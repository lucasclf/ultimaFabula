const template = 'systems/ultimaFabula/templates/chat/guard-message.html';
const actionTitle = "Only once per turn. Until the start of your next turn:"
const actionList = "You gain Resistance to all damage types.*You gain a +2 bonus to Opposed Checks.*You may cover another creature and prevent foes from performing melee attacks against them."

export function mountGuard(actor){
    const actionBody = actionList.split("*");

    const templateData = {
        actor: actor,
        actionHeader: "GUARD ACTION!",
        actionTitle: actionTitle,
        actionBody: actionBody
    }

    renderGuardMessage(templateData);
}

async function renderGuardMessage(templateData){
    const html = await renderTemplate(template, templateData);

    ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: templateData.actor }),
        content: html
    });
}