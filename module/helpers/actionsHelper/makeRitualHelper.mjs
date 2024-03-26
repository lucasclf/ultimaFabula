import RenderRitual from "../../apps/RenderRitualModal.mjs";

const template = 'systems/ultimaFabula/templates/chat/ritual-message.html';
const flavor = 'Ritual performed with ';  

export function mountRitual(actor){
    const casterJobs = actor.items.filter(job => job.system.isCaster === true);
    const hasCasterJobs = casterJobs.length != 0;
    const skills = actor.items.filter(skill => skill.type === "skill");
    const ritualSkills = skills.filter(skill => skill.system.bonus.ritualFlag === true)


    ritualSkills.forEach(skill => {
        let skillJob = "";
        casterJobs.forEach(job => {
            if(job._id === skill.system.jobRelation){
                skillJob = job;
            }
        })

        skill.magicAttr = skillJob.system.magicAttr;
        skill.magicSecondAttr = skillJob.system.magicSecondAttr;
        skill.ritualName = skillJob.name;
    })

    if(hasCasterJobs){
        const ritualismSkill = _mountRitualismSkill();
        ritualSkills.push(ritualismSkill);
        console.log(ritualismSkill);
        console.log(ritualSkills);
    }

    const objOpt = {
        actor: actor,
        attributes: actor.system.attributes.actual,
        hasCasterJobs: hasCasterJobs,
        jobs: casterJobs,
        skills: ritualSkills
    }   

    new RenderRitual(objOpt).render(true);
}

function _mountRitualismSkill(){
    return {
        name: "Ritualism",
        img: "systems/ultimaFabula/icons/x_blade.svg",
        magicAttr: "insight",
        magicSecondAttr: "willpower",
        ritualName: "Ritualism"
        }
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
        flavor: `${flavor} ${ritualData.selectedSkill}`
    }
    const html = await renderTemplate(template, templateData);

    ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: actor }),
        content: html
    });
}