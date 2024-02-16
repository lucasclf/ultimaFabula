import RenderOther from "../../apps/RenderOtherModal.mjs";

const template = 'systems/ultimaFabula/templates/chat/other-message.html';
const flavor = 'You perform an action that is not covered by any of the above, negotiating its resolution and effects with the Game Master.';

export function mountOther(actor){

    const objOpt = {
        actor: actor,
        attributes: actor.system.attributes.actual
    }   

    new RenderOther(objOpt).render(true);
}


export async function renderOtherMessage(otherData){
    const actor = otherData.actor;

    const obj =
        `${otherData.attributeFirst.value}+${otherData.attributeSecond.value}+${otherData.attributeMod}`;

    let roll = new Roll(obj, actor.getRollData());
    let diceRoll = await roll.roll({async: true});

    const templateData = {
        actor: actor,
        image: actor.img,
        diceRoll: diceRoll,
        flavor: flavor
    }
    const html = await renderTemplate(template, templateData);

    ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: actor }),
        content: html
    });
}