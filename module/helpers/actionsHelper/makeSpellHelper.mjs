import RenderSpell from "../../apps/RenderSpellModal.mjs"
import { extractItem } from "../genericHelper.mjs";

const template = 'systems/ultimaFabula/templates/chat/spell-message.html';
export async function mountSpell(actor){
    const spellList = actor.items.filter(item => item.type === 'spell' && item.system.jobRelation != "No-Job");

    const spellsOrganized = spellList.reduce((acc, spell) => {
        const job = spell.system.jobRelation;
        if (!acc[job]) {
           acc[job] = [];
        }
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
    _mountSpellRoll(actor, selectedSpell).then(diceRoll => {

        const templateData = {
            actor: actor,
            isOffensive: selectedSpell.system.isOffensive,
            image: selectedSpell.img,
            name: selectedSpell.name.toUpperCase(),
            diceRoll: diceRoll,
            flavor: _buildSpellLabel(selectedSpell),
            duration: selectedSpell.system.duration,
            damage: _calcDamage(diceRoll.dice, selectedSpell.system.damage),
            damageType: selectedSpell.system.damageType,
            target: selectedSpell.system.target,
            effect: selectedSpell.system.effect
        }
        
        console.log(templateData)
        _renderSpellMessage(templateData);
    }).catch(error => {
        console.error(error);
    });

}

async function _mountSpellRoll(actor, selectedSpell){
    const actorJobList = extractItem(actor.items, "job");
    const selectedSpellJob = actorJobList.filter(job => job._id == selectedSpell.system.jobRelation)[0];
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

function _calcDamage(dices, damage){
    let highRoll = dices.reduce((max, dice) => {
        return (max.results[0].result > dice.results[0].result) ? max : dice;
    }).results[0].result;

    return Number(highRoll) + Number(damage);
}


async function _renderSpellMessage(templateData){
    const html = await renderTemplate(template, templateData);

    ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: templateData.actor }),
        content: html
    });
}