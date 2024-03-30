import RenderHinder from "../../apps/RenderHinderModal.mjs"
import {ULTIMAFABULA} from "../config.mjs";
import { localize } from "../localizeHelper.mjs";

const template = 'systems/ultimaFabula/templates/chat/hinder-message.html';
export function mountHinder(actor){
    const basicConditions = _removeAdvancedAttributesConditions();

    const hinderOpt = {
        actor: actor,
        attributes: actor.system.attributes.actual,
        conditions: basicConditions
    }

    new RenderHinder(hinderOpt).render(true);
}

function _removeAdvancedAttributesConditions() {
    return Object.values(ULTIMAFABULA.basicConditions).filter(condition => condition.attributes.length ===  1);
}

export async function renderHinderMessage(hinderData){
    const actor = hinderData.actor;

    const hinderRoll =
        `${hinderData.accuracyFirst.value}+${hinderData.accuracySecond.value}+${hinderData.accuracyMod}`;

    let roll = new Roll(hinderRoll, actor.getRollData());
    let diceRoll = await roll.roll({async: true});

    const defaultFlavor = localize(CONFIG.ULTIMAFABULA.modalActions.hinderFlavor);
    const localizedCondition = localize(hinderData.condition);
    
    const flavor = defaultFlavor.replace(/\$\$\$/g, localizedCondition);;

    const templateData = {
        actor: actor,
        image: actor.img,
        diceRoll: diceRoll,
        flavor: flavor
    }
    const html = await renderTemplate(template, templateData);

    ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: templateData.actor }),
        content: html
    });
}