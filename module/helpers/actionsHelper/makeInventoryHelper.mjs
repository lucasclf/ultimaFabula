import RenderInventory from "../../apps/RenderInventoryModal.mjs";

const template = 'systems/ultimaFabula/templates/chat/inventory-message.html';

export function mountInventory(actor){
    const itemList = CONFIG.ULTIMAFABULA.inventoryItems;

    const inventoryOpt = {
        actor: actor,
        itemList: itemList
    }

    new RenderInventory(inventoryOpt).render(true);
}


export async function renderInventoryMessage(inventoryData){
    console.log(inventoryData)
    const actor = inventoryData.actor;

    const item = CONFIG.ULTIMAFABULA.inventoryItems[inventoryData.selectedItem];

    const templateData = {
        actor: actor,
        image: actor.img,
        selectedItem: item
    }

    console.log(templateData);
    const html = await renderTemplate(template, templateData);

    ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: actor }),
        content: html
    });
}