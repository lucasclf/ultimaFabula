import RenderObjective from "../../apps/RenderObjectiveModal.mjs";

const template = 'systems/ultimaFabula/templates/chat/objective-message.html';
const flavor = 'Describe what you want to accomplish and how you intend to approach it.';

export function mountObjective(actor){

    const objOpt = {
        actor: actor,
        attributes: actor.system.attributes.actual
    }

    new RenderObjective(objOpt).render(true);
}


export async function renderObjectiveMessage(objectiveData){
    const actor = objectiveData.actor;

    const obj =
        `${objectiveData.attributeFirst.value}+${objectiveData.attributeSecond.value}+${objectiveData.attributeMod}`;

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