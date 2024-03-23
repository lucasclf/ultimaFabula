import RenderSkill from "../../apps/RenderSkillModal.mjs"

const template = 'systems/ultimaFabula/templates/chat/skill-message.html';
export async function mountSkill(actor){
    const skillList = actor.items.filter(item => item.type === 'skill' && item.system.jobRelation != "No-Job" && !item.system.isPassive);

    const skillsOrganized = skillList.reduce((acc, skill) => {
        const job = skill.system.jobRelation;
        if (!acc[job]) {
           acc[job] = [];
        }
        acc[job].push(skill);
        return acc;
       }, {});

    const skillOpt = {
        actor: actor,
        skills: skillsOrganized
    }

    new RenderSkill(skillOpt).render(true);
}

export async function mountMessageData(actor, selectedSkill){
    const templateData = {
        actor: actor,
        image: selectedSkill.img,
        flavor: _buildSkillLabel(selectedSkill),
        effect: selectedSkill.system.effect
    }

    _renderSkillMessage(templateData);
}

function _buildSkillLabel(selectedSkill){
    const skillName = selectedSkill.name.toUpperCase();
    return `USE ${skillName}!!!`
}

async function _renderSkillMessage(templateData){
    const html = await renderTemplate(template, templateData);

    ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: templateData.actor }),
        content: html
    });
}