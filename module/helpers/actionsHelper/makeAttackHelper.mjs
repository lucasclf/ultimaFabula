import {captalizeFirstLetter} from "../genericHelper.mjs";
import {recoverAccessory, recoverArmor, recoverMainHand, recoverOffHand} from "../recoverEquipHelper.mjs";
import RenderAttack from "../../apps/RenderAttackModal.mjs"
import { mountDamageType, recoverQualityInfoByActor } from "../qualitiesHelper.mjs";
import { calcHighRoll } from "../rollHelper.mjs";

const template = 'systems/ultimaFabula/templates/chat/attack-message.html';

export async function mountAttack(actor){
    const equipedGear = {
        mainHand: recoverMainHand(actor),
        offHand: recoverOffHand(actor),
        armor: recoverArmor(actor),
        accessory: recoverAccessory(actor)
    }

    const mainHandIsWeapon = equipedGear.mainHand?.type === "weapon";
    const offHandIsWeapon = equipedGear.offHand?.type === "weapon";

    if(mainHandIsWeapon && offHandIsWeapon){
        const mainHandPromise = _mountAttackData(actor, equipedGear, "mainHand");
        const offHandPromise = _mountAttackData(actor, equipedGear, "offHand");
        const isDualHandPromise = _validateIsDualHand(equipedGear)
    
        Promise.all([mainHandPromise, offHandPromise, isDualHandPromise])
        .then(([mainHandAttackData, offHandAttackData, isDualHandData]) => {
            const possibleAttacks = {
                mainHand: mainHandAttackData,
                offHand: offHandAttackData,
                isDualHand: isDualHandData
            };
            
            new RenderAttack(possibleAttacks).render(true);
        })
        .catch(error => {
            console.error(error);
        });
        return;
    }

    let gearSlot;
    if(mainHandIsWeapon){
        gearSlot = "mainHand";
    } else {
        gearSlot = "offHand";
    }

    _mountAttackData(actor, equipedGear, gearSlot).then(data => {
        renderAttackMessage(data);
    })
    .catch(error => {
        console.error(error);
    });

    
}

async function _mountAttackData(actor, equipedGear, gearSlot){

    let attackRoll = _buildAttackRoll(actor, equipedGear[gearSlot], equipedGear.accessory, equipedGear.armor);

    let roll = new Roll(attackRoll, actor.getRollData());
    let diceRoll = await roll.roll({async: true});

    const qualities = recoverQualityInfoByActor(actor.system.gear);

    return {
        actor: actor,
        image: equipedGear[gearSlot].img,
        quality: equipedGear[gearSlot].system.quality,
        accuracy: `${equipedGear[gearSlot].system.accuracyFirst} + ${equipedGear[gearSlot].system.accuracySecond} + ${equipedGear[gearSlot].system.accuracyMod}`,
        name: equipedGear[gearSlot].name.toUpperCase(),
        diceRoll: diceRoll,
        flavor: _buildAttackLabel(equipedGear[gearSlot]),
        attackType: captalizeFirstLetter(equipedGear[gearSlot].system.attackType),
        damage: _calcDamage(diceRoll.dice, equipedGear[gearSlot], equipedGear.accessory, equipedGear.armor),
        damageType: mountDamageType(equipedGear[gearSlot].system.damageType, qualities),
        qualityText: _recoverQualityText(equipedGear[gearSlot])
    };
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

function _buildAttackLabel(equipedWeapon){
    let weaponName = equipedWeapon.name.toUpperCase();
    return `ATTACK WITH ${weaponName}!!!`;
}

function _calcDamage(dices, equipedWeapon, equipedAccessory, equipedArmor){
    const highRoll = calcHighRoll(dices);

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

export async function renderAttackMessage(templateData){
    const html = await renderTemplate(template, templateData);

    ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: templateData.actor }),
        content: html
    });
}

async function _validateIsDualHand(equipedGear){

    if(equipedGear.mainHand.system.weaponType === equipedGear.offHand.system.weaponType){
        return true
    }

    return false;
}