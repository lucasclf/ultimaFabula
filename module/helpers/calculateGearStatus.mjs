import { extractAttrDiceValue } from "./genericHelper.mjs";
import { recoverArmor, recoverMainHand, recoverOffHand } from "./recoverEquipHelper.mjs";

export function mountGearStatus(actor) {
    let updateData = {};
    _normalizeGear(actor);

    updateData[`system.gearStatus.defense`] = _calculateDefense(actor, "defense");
    updateData[`system.gearStatus.mDefense`] = _calculateDefense(actor, "mDefense");
    updateData[`system.gearStatus.initiative`] = _calculateInitiative(actor);

    actor.update(updateData);

}

function _normalizeGear(actor){
    const hasMartial = {
        melee: actor.system.benefitsBonus.martialItems.meleeWeapon,
        ranged: actor.system.benefitsBonus.martialItems.rangedWeapon,
        armor: actor.system.benefitsBonus.martialItems.armor,
        shield: actor.system.benefitsBonus.martialItems.shield
    }

    const equipedGear = {
        armor: recoverArmor(actor),
        mainHand: recoverMainHand(actor),
        offHand: recoverOffHand(actor)
    }

    const newData = {
        "system.gear.mainHand": _validateHasIlegalGear(equipedGear.mainHand, hasMartial),
        "system.gear.offHand": _validateHasIlegalGear(equipedGear.offHand, hasMartial),
        "system.gear.armor": _validateHasIlegalGear(equipedGear.armor, hasMartial)
    }

    actor.update(newData);
}

function _validateHasIlegalGear(item, hasMartial){
    const itemType = item?.type || null;
    switch(itemType){
        case "defensive":
            const defensiveType = item.system.type;
            return hasMartial[defensiveType] === false && item.system.isMartial === true ? "" : item._id;
        case "weapon":
            const weaponType = item.system.attackType;
            return hasMartial[weaponType] === false && item.system.isMartial === true ? "" : item._id;
        default:
            return "";
    }
}

function _calculateDefense(actor, type) {
    const equipedItems = ["armor", "accessory", "offHand", "mainHand"].map(itemType => _recoverItem(actor, itemType));
    const armorAttr = _recoverAttr(actor, equipedItems[0], type);

    const  defenseTotal = equipedItems.reduce((acc, item) => acc + _calculateBonus(item, type),  0) + +armorAttr;

    return defenseTotal;
};

function _calculateInitiative(actor) {
    const equipedItems = ["armor", "accessory", "offHand", "mainHand"].map(itemType => _recoverItem(actor, itemType));

    const initiativeTotal = equipedItems.reduce((acc, item) => acc + _calculateBonus(item, "initiative"),  0);

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

function _calculateBonus(item, type) {

    let itemBonus = 0;
    if(type === "initiative"){
        itemBonus = item?.system.initiative ||  0;
    } else {
        itemBonus = item?.system[type]?.value || 0;
    }
    
    const qualityBonus = _recoverQualityBonus(item)[type];
    return +itemBonus + +qualityBonus;
};

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