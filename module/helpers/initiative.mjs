export function calcInitiative(gear, defensive){
    let armorId = gear.armor || "";
    let shieldId = gear.shield || "";

    let armor = defensive.find(a => a._id === armorId) || null;
    let shield = defensive.find(s => s._id === shieldId) || null;

    let armorInitiative = armor != null ? armor.system.initiative : 0;
    let shieldInitiative = shield != null ? shield.system.initiative : 0;

    let initiativeValue = armorInitiative + shieldInitiative

    return initiativeValue;
}