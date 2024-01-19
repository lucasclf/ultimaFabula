import { captalizeFirstLetter } from "./genericHelper.mjs";

export async function makeAttack(actor){
    const template = 'systems/ultimaFabula/templates/chat/attack-message.html';

    let equipedWeapon = _recoverWeapon(actor);
    let equipedAccessory = _recoverAccessory(actor);
    let attackRoll = _buildAttackRoll(actor, equipedWeapon);

    let roll = new Roll(attackRoll, actor.getRollData());
    let diceRoll = await roll.roll({async: true}); 

    let templateData = {
        actor: actor,
        image: equipedWeapon.img,
        diceRoll: diceRoll,
        flavor: _buildAttackLabel(equipedWeapon),
        attackType: captalizeFirstLetter(equipedWeapon.system.attackType),
        damage: _calcDamage(diceRoll.dice, equipedWeapon, equipedAccessory),
        damageType: equipedWeapon.system.damageType,
        qualityText: _recoverQualityText(equipedWeapon)
    }

    _renderMessage(template, templateData, actor);
}

function _buildAttackRoll(actor, equipedWeapon){
    let accuracyFirst = actor.system.attributes[equipedWeapon.system.accuracyFirst];
    let accuracySecond = actor.system.attributes[equipedWeapon.system.accuracySecond];
    let accuracyMod = equipedWeapon.system.accuracyMod;

    return `${accuracyFirst} + ${accuracySecond} + ${accuracyMod}`;
}

function _recoverWeapon(actor){
    let itemId = actor.system.gear.weapon || "";
    let weapon = itemId ? actor.items.get(itemId) : _mountUnnarmedWeapon();
    
    if(weapon.type === "defensive"){
        return _mountShieldWeapon(actor);
    }
    return weapon;
}

function _recoverAccessory(actor){
    let itemId = actor.system.gear.accessory || "";
    let accessory = itemId ? actor.items.get(itemId) : null;

    return accessory;
}

function _mountUnnarmedWeapon(){
    return {
        name:"Unarmed Weapon",
        type: "weapon",
        img: "icons/svg/item-bag.svg",
        system: {
            accuracyFirst: "dexterity",
            accuracySecond: "might",
            accuracyMod: 0,
            attackType: "melee",
            damage: 0,
            damageType: "physical",
            quality: "no-quality"
        }
    };
}

function _mountShieldWeapon(actor){
    let shield = actor.system.gear.shield;
    if(shield != ""){
        return {
            name:"Twin Shield",
            type: "weapon",
            img: "icons/svg/item-bag.svg",
            system: {
                accuracyFirst: "might",
                accuracySecond: "might",
                accuracyMod: 0,
                attackType: "melee",
                damage: 0,
                damageType: "physical",
                quality: "no-quality"
            }
        };
    }

    return _mountUnnarmedWeapon();
}

function _buildAttackLabel(equipedWeapon){
    let weaponName = equipedWeapon.name.toUpperCase();
    return `ATTACK WITH ${weaponName}!!!`;
}

function _calcDamage(dices, equipedWeapon, equipedAccessory){
    let highRoll = dices.reduce((max, dice) => {
        return (max.results[0].result > dice.results[0].result) ? max : dice;
    }).results[0].result;

    let weaponDamage = equipedWeapon.system.damage;
    let accessoryQuality = equipedAccessory?.system.quality || "";

    if(accessoryQuality === "weapon-up-melee" && equipedWeapon.system.attackType === "melee"){
        console.log("CQN || ++damage")
        weaponDamage += 5;
    }

    if(accessoryQuality === "weapon-up-ranged" && equipedWeapon.system.attackType === "ranged"){
        weaponDamage += 5;
    }

    console.log(weaponDamage);

    return highRoll + weaponDamage;
}

function _recoverQualityText(equipedWeapon) {
    let quality = equipedWeapon.system.quality;

    let prefixAttackQualities = ["magical", "piercing", "multi", "status", "hunter"]
    
    if(prefixAttackQualities.some(prefix => quality.includes(prefix))){
        return `${CONFIG.ULTIMAFABULA.weaponQualities[quality].name}: ${CONFIG.ULTIMAFABULA.weaponQualities[quality].effect}`;
    }
    
    return "";
}

async function _renderMessage(template, templateData, actor){
    const html = await renderTemplate(template, templateData);

    ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: actor }),
        content: html
    });
}
