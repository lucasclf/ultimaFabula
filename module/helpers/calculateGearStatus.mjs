import { extractAttrDiceValue } from "./genericHelper.mjs";

export function mountGearStatus(actor) {
    let updateData = {};

    updateData[`system.gearStatus.defense`] = _calculateDefense(actor, "defense");
    updateData[`system.gearStatus.mDefense`] = _calculateDefense(actor, "mDefense");
    updateData[`system.gearStatus.initiative`] = _calculateInitiative(actor);

    actor.update(updateData);

}

function _calculateDefense(actor, type) {
    let equipedArmor = _recoverItem(actor, "armor");
    let equipedAccessory = _recoverItem(actor, "accessory")
    let equipedOffHand = _recoverItem(actor, "offHand");
    let equipedMainHand = _recoverItem(actor, "mainHand");

    let armorValue = equipedArmor?.system[type].value || 0;
    let offHandValue = equipedOffHand?.system[type].value || 0;
    let mainHandValue = equipedMainHand?.system[type]?.value || 0;

    let armorAttr = _recoverAttr(actor, equipedArmor, type);

    let mainHandQualityBonus = _recoverQualityBonus(equipedMainHand)[type];
    let offHandQualityBonus = _recoverQualityBonus(equipedOffHand)[type];
    let accessoryQualityBonus = _recoverQualityBonus(equipedAccessory)[type];

    let gearBonus = +armorValue + +offHandValue + +mainHandValue + +armorAttr;
    let qualityBonus = +mainHandQualityBonus + +offHandQualityBonus + +accessoryQualityBonus;

    let defenseTotal = +gearBonus + +qualityBonus;

    return defenseTotal;
};

function _calculateInitiative(actor) {
    let equipedArmor = _recoverItem(actor, "armor");
    let equipedAccessory = _recoverItem(actor, "accessory")
    let equipedOffHand = _recoverItem(actor, "offHand");
    let equipedMainHand = _recoverItem(actor, "mainHand");

    let accessoryQualityBonus = _recoverQualityBonus(equipedAccessory).initiative;
    let armorQualityBonus = _recoverQualityBonus(equipedArmor).initiative;
    let offHandQualityBonus = _recoverQualityBonus(equipedOffHand).initiative;
    let mainHandQualityBonus = _recoverQualityBonus(equipedMainHand).initiative;

    let qualityBonus = +accessoryQualityBonus + +armorQualityBonus + +offHandQualityBonus + +mainHandQualityBonus;

    let armorInit = equipedArmor?.system.initiative || 0;
    let offHandInit = equipedOffHand?.system.initiative || 0;
    let mainHandInit = equipedMainHand?.system.initiative || 0;

    let gearBonus = +armorInit + +offHandInit + +mainHandInit;

    let initiativeTotal = +qualityBonus + +gearBonus;

    return initiativeTotal;
};

function _recoverItem(actor, type) {
    let itemId = actor.system.gear[type];
    return actor.items.get(itemId) || null;
}

function _recoverAttr(actor, armor, type) {
    let defaultAttr = type === "defense" ? "dexterity" : "insight";

    let armorAttr = armor?.system[type].attr || defaultAttr;
    let attrDice = actor.system.attributes.actual[armorAttr];
    let attrValue = extractAttrDiceValue(attrDice);

    return attrValue;
}

function _recoverQualityBonus(equipedItem) {
    let quality = equipedItem?.system.quality || "";

    let bonus = {
        "defense": 0,
        "mDefense": 0,
        "initiative": 0
    };

    switch (quality) {
        case "amulet":
            bonus.mDefense = 1;
            break;
        case "bulwark":
            bonus.defense = 1;
            break;
        case "omnishield":
            bonus.defense = 1;
            bonus.mDefense = 1;
            break;
        case "initiative-up":
            bonus.initiative = 4;
            break;
    }

    return bonus;
}