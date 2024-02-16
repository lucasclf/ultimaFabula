import RenderRitual from "../../apps/RenderRitualModal.mjs";

const template = 'systems/ultimaFabula/templates/chat/ritual-message.html';
const flavor = 'Ritual performed with ';  

export function mountRitual(actor){
    const casterJobs = actor.items.filter(job => job.system.isCaster === true);
    const hasCasterJobs = casterJobs.length != 0;

    const objOpt = {
        actor: actor,
        attributes: actor.system.attributes.actual,
        hasCasterJobs: hasCasterJobs,
        jobs: casterJobs
    }   

    new RenderRitual(objOpt).render(true);
}


export async function renderRitualMessage(ritualData){
    const actor = ritualData.actor;

    const obj =
        `${ritualData.attrFirst.value}+${ritualData.attrSecond.value}+${ritualData.attrMod}`;

    let roll = new Roll(obj, actor.getRollData());
    let diceRoll = await roll.roll({async: true});

    const templateData = {
        actor: actor,
        image: actor.img,
        diceRoll: diceRoll,
        flavor: `${flavor} ${ritualData.selectedJob.name}`
    }
    const html = await renderTemplate(template, templateData);

    ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: actor }),
        content: html
    });
}