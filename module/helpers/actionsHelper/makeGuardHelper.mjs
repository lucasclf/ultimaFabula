import { localize } from "../localizeHelper.mjs";

const template = 'systems/ultimaFabula/templates/chat/guard-message.html';

export function mountGuard(actor){
    const templateData = {
        actor: actor,
        actionHeader: localize(CONFIG.ULTIMAFABULA.modalActions.guardHeader),
        actionBody: localize(CONFIG.ULTIMAFABULA.modalActions.guardBody)
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