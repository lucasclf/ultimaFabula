import { extractAttrDiceValue } from "./attrHelper.mjs";

export function calcDefenseValue(char, defensive, defenseType){
    let defenseAttr = _extractDefenseAttr(char, defensive, defenseType);
    let defenseValue = _extractDefenseValue(char, defensive, defenseType);
    let defenseAttrValue = extractAttrDiceValue(char.attributes[defenseAttr])

    return +defenseAttrValue + +defenseValue;
}

function _extractDefenseAttr(char, defensive, defenseType){
    let armorId = char.gear.armor || "";
    let armor = defensive.find(a => a._id === armorId) || null;

    if(defenseType == "defense"){
        if(armor != null){
            return armor.system.defense.attr;
        } else {
            return "dexterity";
        }
        
    } else if(defenseType == "mDefense"){
        if(armor != null){
            return armor.system.mDefense.attr;
        } else {
            return "insight";
        }
    }
}

function _extractDefenseValue(char, defensive, defenseType){
    let armorId = char.gear.armor || "";
    let shieldId = char.gear.shield || "";

    let armor = defensive.find(a => a._id === armorId) || null;
    let shield = defensive.find(s => s._id === shieldId) || null;
    
    let defenseValue = 0; 
    if(defenseType == "defense"){
        if(armor != null){
            defenseValue += armor.system.defense.value;
        }
        if(shield != null){
            defenseValue += shield.system.defense.value;
        }
    } else if(defenseType == "mDefense"){
        if(armor != null){
            defenseValue += armor.system.mDefense.value;
        }
        if(shield != null){
            defenseValue += shield.system.mDefense.value;
        }
    }

    return defenseValue;
}