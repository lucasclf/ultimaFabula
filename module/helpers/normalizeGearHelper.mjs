
import { recoverArmor, recoverMainHand, recoverOffHand } from "./recoverEquipHelper.mjs";

export function normalizeGear(actor){
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
        "system.gear.mainHand": _validateHasIlegalGear(equipedGear.mainHand, hasMartial, "mainHand"),
        "system.gear.offHand": _validateHasIlegalGear(equipedGear.offHand, hasMartial, "offHand"),
        "system.gear.armor": _validateHasIlegalGear(equipedGear.armor, hasMartial, "armor")
    }

    actor.update(newData);
}

function _validateHasIlegalGear(item, hasMartial, type){
    const itemType = item?.type || null;

    switch(itemType){
        case "shield":
            return hasMartial.shield === false && item.system.isMartial === true ? "" : item._id;
        case "armor":
            return hasMartial.armor === false && item.system.isMartial === true ? "" : item._id;
        case "weapon":
            const weaponType = item.system.attackType;
            return hasMartial[weaponType] === false && item.system.isMartial === true ? "" : item._id;
        default:
            return "";
    }

}