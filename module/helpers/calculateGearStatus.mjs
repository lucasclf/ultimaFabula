import { extractAttrDiceValue } from "./genericHelper.mjs";

export function mountGearStatus(char, defensive){
    char.gearStatus.defense = _calculateDefense(char, defensive, "defense");
    char.gearStatus.mDefense = _calculateDefense(char, defensive, "mDefense");
    char.gearStatus.initiative = _calculateInitiative(char, defensive);

}

function _calculateDefense(char, defensive, type){
    let armor = _recoverItem(char, defensive, "armor");
    let shield = _recoverItem(char, defensive, "shield");
    let weapon = _recoverItem(char, defensive, "weapon");

    let armorValue = armor?.system[type].value || 0;
    let shieldValue = shield?.system[type].value || 0;
    let weaponValue = weapon?.system[type].value || 0;

    let armorAttr = _recoverAttr(char, armor, type);
    let weaponQualityBonus = _recoverWeaponQualityBonus();

    let defenseTotal = +armorValue + +shieldValue + +armorAttr + +weaponValue;

    return defenseTotal;
};

function _calculateInitiative(char, defensive){
    let armor = _recoverItem(char, defensive, "armor");
    let shield = _recoverItem(char, defensive, "shield");
    let weapon = _recoverItem(char, defensive, "weapon");

    let armorInit = armor?.system.initiative || 0;
    let shieldInit = shield?.system.initiative || 0;
    let weaponInit = weapon?.system.initiative || 0;

    let initiativeTotal = +armorInit + +shieldInit + +weaponInit;

    return initiativeTotal;
};

function _recoverItem(char, defensive, type){
    let id = char.gear[type];
    return defensive.find(a => a._id === id) || null;
}

function _recoverAttr(char, armor, type){
    let defaultAttr = type === "defense" ? "dexterity" : "insight";

    let armorAttr = armor?.system[type].attr || defaultAttr;
    let attrDice = char.attributes[armorAttr];
    let attrValue = extractAttrDiceValue(attrDice);

    return attrValue;
}