import RenderSpell from "../../apps/RenderSpellModal.mjs"
import { extractItem } from "../genericHelper.mjs";
import { mountDamageType, recoverQualityInfoByActor } from "../qualitiesHelper.mjs";

const template = 'systems/ultimaFabula/templates/chat/spell-message.html';
export async function mountSpell(actor){
    const spellsOrganized = actor.items
        .filter(item => item.type === 'spell' && item.system.jobRelation !== "No-Job")
        .reduce((acc, spell) => {
            const job = spell.system.jobRelation;
            acc[job] = acc[job] || [];
            acc[job].push(spell);
            return acc;
        }, {});

    const spellOpt = {
        actor: actor,
        spells: spellsOrganized
    }

    new RenderSpell(spellOpt).render(true);
}

export async function mountMessageData(actor, selectedSpell){
    const qualities = recoverQualityInfoByActor(actor.system.gear);

    _mountSpellRoll(actor, selectedSpell).then(diceRoll => {

        const templateData = {
            actor: actor,
            isOffensive: selectedSpell.system.isOffensive,
            image: selectedSpell.img,
            name: selectedSpell.name.toUpperCase(),
            diceRoll: diceRoll,
            flavor: _buildSpellLabel(selectedSpell),
            duration: selectedSpell.system.duration,
            damage: _calcDamage(diceRoll.dice, selectedSpell.system.damage, qualities),
            damageType: mountDamageType(selectedSpell.system.damageType, qualities),
            target: selectedSpell.system.target,
            effect: selectedSpell.system.effect
        }
        
        _renderSpellMessage(templateData);
    }).catch(error => {
        console.error(error);
    });

}

async function _mountSpellRoll(actor, selectedSpell){
    const actorJobList = extractItem(actor.items, "job");
    const selectedSpellJob = actorJobList.find(job => job._id === selectedSpell.system.jobRelation);
    const firsAttr = actor.system.attributes.actual[selectedSpellJob.system.magicAttr];
    const secondAttr = actor.system.attributes.actual[selectedSpellJob.system.magicSecondAttr];
    const spellRoll = `${firsAttr} + ${secondAttr}`;

    let roll = new Roll(spellRoll, actor.getRollData());
    let diceRoll = await roll.roll({async: true});
    return diceRoll;
};

function _buildSpellLabel(selectedSpell){
    const spellName = selectedSpell.name.toUpperCase();
    return `CAST ${spellName}!!!`
}

function _calcDamage(dices, damage, qualities){
    let highRoll = dices.reduce((max, dice) => {
        return (max.results[0].result > dice.results[0].result) ? max : dice;
    }).results[0].result;

    let qualityDamage = 0;

    qualities.forEach(quality =>{
        if(Object.keys(quality) == 'spell-up'){
            qualityDamage += 5;
        }
    })

    return Number(highRoll) + Number(damage) + Number(qualityDamage);
}


async function _renderSpellMessage(templateData){
    const html = await renderTemplate(template, templateData);

    ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: templateData.actor }),
        content: html
    });
}