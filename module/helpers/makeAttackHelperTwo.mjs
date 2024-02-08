import AttackModal from "../apps/MakeAttackModal.mjs";
import { captalizeFirstLetter } from "./genericHelper.mjs";
import { recoverAccessory, recoverArmor, recoverMainHand, recoverOffHand } from "./recoverEquipHelper.mjs";

const template = 'systems/ultimaFabula/templates/chat/attack-message.html';

export async function mountAttack(actor){
    const equipedGear = {
        mainHand: recoverMainHand(actor),
        offHand: recoverOffHand(actor),
        armor: recoverArmor(actor),
        accessory: recoverAccessory(actor)
    }
    
    const mainHandIsWeapon = equipedGear.mainHand.type === "weapon";
    const offHandIsWeapon = equipedGear.offHand?.type === "weapon";

    if(mainHandIsWeapon && offHandIsWeapon){
        const possibleAttacks = {
        mainHand: _mountAttackData(actor, equipedGear, "mainHand"),
        offHand: _mountAttackData(actor, equipedGear, "offHand")
        }

        new AttackModal(possibleAttacks).render(true);
        return ;
    }

    let attackData;

    if(mainHandIsWeapon){
        attackData = _mountAttackData(actor, equipedGear, "mainHand");
    } else {
        attackData = _mountAttackData(actor, equipedGear, "offHand");
    }

    console.log(attackData)
    renderMessage(attackData);
}

async function _mountAttackData(actor, equipedGear, gearSlot){

    let attackRoll = _buildAttackRoll(actor, equipedGear[gearSlot], equipedGear.accessory, equipedGear.armor);

    let roll = new Roll(attackRoll, actor.getRollData());
    let diceRoll = await roll.roll({async: true}); 

    const attack = {
            actor: actor,
            image: equipedGear[gearSlot].img,
            diceRoll: diceRoll,
            flavor: _buildAttackLabel(equipedGear[gearSlot]),
            attackType: captalizeFirstLetter(equipedGear[gearSlot].system.attackType),
            damage: _calcDamage(diceRoll.dice, equipedGear[gearSlot], equipedGear.accessory, equipedGear.armor),
            damageType: _recoverDamageType(equipedGear[gearSlot], equipedGear.accessory),
            qualityText: _recoverQualityText(equipedGear[gearSlot])
    }

    return attack;
}

function _buildAttackRoll(actor, equipedWeapon, equipedAccessory, equipedArmor){
    let accuracyFirst = actor.system.attributes.actual[equipedWeapon.system.accuracyFirst];
    let accuracySecond = actor.system.attributes.actual[equipedWeapon.system.accuracySecond];
    let accuracyMod = equipedWeapon.system.accuracyMod;

    let accessoryQuality = equipedAccessory?.system.quality || "no-qualites";
    let armorQuality = equipedArmor?.system.quality || "no-qualities";
    let qualityModify = 0;


    if(accessoryQuality === "accuracy-up"){
        qualityModify += 1;
    }
    if(armorQuality === "accuracy-up"){
        qualityModify += 1;
    }

    if(qualityModify > 0){
        return `${accuracyFirst} + ${accuracySecond} + ${accuracyMod} + ${qualityModify}`;
    }

    return `${accuracyFirst} + ${accuracySecond} + ${accuracyMod}`;
}

function _recoverDamageType(equipedWeapon, equipedAccessory){
    let accessoryQuality = equipedAccessory?.system.quality || "no-qualites";
    let damageType =  equipedWeapon.system.damageType;

    if(accessoryQuality.includes("damage-change")){
        let element = accessoryQuality.split("-").pop();
        return element;
    }

    return damageType;
}

function _buildAttackLabel(equipedWeapon){
    let weaponName = equipedWeapon.name.toUpperCase();
    return `ATTACK WITH ${weaponName}!!!`;
}

function _calcDamage(dices, equipedWeapon, equipedAccessory, equipedArmor){
    let highRoll = dices.reduce((max, dice) => {
        return (max.results[0].result > dice.results[0].result) ? max : dice;
    }).results[0].result;

    let weaponDamage = equipedWeapon.system.damage;
    let accessoryQuality = equipedAccessory?.system.quality || "no-qualities";
    let armorQuality = equipedArmor?.system.quality || "no-qualities"

    if(accessoryQuality === "weapon-up-melee" && equipedWeapon.system.attackType === "melee"){
        weaponDamage += 5;
    }

    if(accessoryQuality === "weapon-up-ranged" && equipedWeapon.system.attackType === "ranged"){
        weaponDamage += 5;
    }

    if(armorQuality === "weapon-up-melee" && equipedWeapon.system.attackType === "melee"){
        weaponDamage += 5;
    }

    if(armorQuality === "weapon-up-ranged" && equipedWeapon.system.attackType === "ranged"){
        weaponDamage += 5;
    }

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

async function renderMessage(templateData){
    const html = await renderTemplate(template, templateData);

    ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: templateData.actor }),
        content: html
    });
}