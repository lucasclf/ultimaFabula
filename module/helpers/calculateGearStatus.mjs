import { extractAttrDiceValue } from "./genericHelper.mjs";
import { recoverArmor } from "./recoverEquipHelper.mjs";

export function mountGearStatus(char, defensive, weapon, accessory){
    char.gearStatus.defense = _calculateDefense(char, defensive, weapon, accessory, "defense");
    char.gearStatus.mDefense = _calculateDefense(char, defensive, weapon, accessory, "mDefense");
    char.gearStatus.initiative = _calculateInitiative(char, defensive, accessory);

}

function _calculateDefense(char, defensive, weapon, accessory, type){
    let equipedArmor = _recoverItem(char, defensive, "armor");
    let equipedShield = _recoverItem(char, defensive, "shield");
    let equipedWeapon = _recoverItem(char, weapon, "weapon") || _recoverItem(char, defensive, "weapon");
    let equipedAccessory = _recoverItem(char, accessory, "accessory")

    let armorValue = equipedArmor?.system[type].value || 0;
    let shieldValue = equipedShield?.system[type].value || 0;
    let weaponValue = equipedWeapon?.system[type]?.value || 0;

    let armorAttr = _recoverAttr(char, equipedArmor, type);
    let weaponQualityBonus = _recoverQualityBonus(equipedWeapon);
    let accessoryQualityBonus = _recoverQualityBonus(equipedAccessory);

    console.log(`CQN | CalcQuality ${type}`)
    console.log(weaponQualityBonus[type]);

    let defenseTotal = +armorValue + +shieldValue + +armorAttr + +weaponValue + +weaponQualityBonus[type] + +accessoryQualityBonus[type];

    return defenseTotal;
};

function _calculateInitiative(char, defensive, accessory){
    let equipedArmor = _recoverItem(char, defensive, "armor");
    let equipedShield = _recoverItem(char, defensive, "shield");
    let equipedWeapon = _recoverItem(char, defensive, "weapon");
    let equipedAccessory = _recoverItem(char, accessory, "accessory")

    let accessoryQualityBonus = _recoverQualityBonus(equipedAccessory);
    let armorQualityBonus = _recoverQualityBonus(equipedArmor);

    let armorInit = equipedArmor?.system.initiative || 0;
    let shieldInit = equipedShield?.system.initiative || 0;
    let weaponInit = equipedWeapon?.system.initiative || 0;

    let initiativeTotal = +armorInit + +shieldInit + +weaponInit + +accessoryQualityBonus.initiative + +armorQualityBonus.initiative;

    return initiativeTotal;
};

function _recoverItem(char, gear, type){
    let id = char.gear[type];   
    return gear.find(g => g._id === id) || null;
}

function _recoverAttr(char, armor, type){
    let defaultAttr = type === "defense" ? "dexterity" : "insight";

    let armorAttr = armor?.system[type].attr || defaultAttr;
    let attrDice = char.attributes[armorAttr];
    let attrValue = extractAttrDiceValue(attrDice);

    return attrValue;
}

function _recoverQualityBonus(equipedItem){
    let quality = equipedItem?.system.quality || "";
    console.log("CQN")
    console.log(quality)

    let bonus = {
        "defense": 0,
        "mDefense": 0,
        "initiative": 0
    };

    switch(quality){
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