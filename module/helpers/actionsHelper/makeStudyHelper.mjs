import RenderStudy from "../../apps/RenderStudyModal.mjs";

const template = 'systems/ultimaFabula/templates/chat/study-message.html';

export function mountStudy(actor){

    const objOpt = {
        actor: actor,
        attributes: actor.system.attributes.actual
    }   

    new RenderStudy(objOpt).render(true);
}


export async function renderStudyMessage(studyData){
    const actor = studyData.actor;

    const obj =
        `${studyData.attributeFirst.value}+${studyData.attributeSecond.value}+${studyData.attributeMod}`;

    let roll = new Roll(obj, actor.getRollData());
    let diceRoll = await roll.roll({async: true});

    const templateData = {
        actor: actor,
        image: actor.img,
        diceRoll: diceRoll
    }
    const html = await renderTemplate(template, templateData);

    ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: actor }),
        content: html
    });
}