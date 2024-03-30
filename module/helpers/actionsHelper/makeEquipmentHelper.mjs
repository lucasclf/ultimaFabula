
import {recoverAccessory, recoverMainHand, recoverOffHand, recoverItemList} from "../recoverEquipHelper.mjs";
import RenderEquipment from "../../apps/RenderEquipmentModal.mjs"

const template = 'systems/ultimaFabula/templates/chat/equipment-change-meessage.html';

export async function mountEquipment(actor){
    const equipedGear = {
        mainHand: recoverMainHand(actor),
        offHand: recoverOffHand(actor),
        accessory: recoverAccessory(actor)
    }

    const hasDualShield = actor.system.skillBonus.dualShield;

    var gearList = {
        mainHand: recoverItemList(actor, "weapon"),
        offHand: _unifyWeaponShieldList(recoverItemList(actor, "weapon"), recoverItemList(actor, "shield")),
        accessory: recoverItemList(actor, "accessory")
    }

    if(hasDualShield){
        gearList = {
            mainHand: _unifyWeaponShieldList(recoverItemList(actor, "weapon"), recoverItemList(actor, "shield")),
            offHand: _unifyWeaponShieldList(recoverItemList(actor, "weapon"), recoverItemList(actor, "shield")),
            accessory: recoverItemList(actor, "accessory")
        }
    }

    const twoHanded = equipedGear.mainHand?.system.gripType === "two-handed" ? true : false;

    const equipmentOpt = {
        actor: actor,
        equipedGear: equipedGear,
        gearList: gearList,
        twoHanded: twoHanded,
        hasDualShield: hasDualShield
    }

    console.log(equipmentOpt)

    new RenderEquipment(equipmentOpt).render(true);
}

function _unifyWeaponShieldList(weaponList, shieldList){
    return [...weaponList, ...shieldList]
}

export async function updateEquipment(updateData){

    const actor = updateData.actor;
    const equipedGear = updateData.equipedGear;
    const newGear = updateData.newGear;

    const newData = {
        ...(_validateGearChange(equipedGear, newGear, "mainHand") && { "system.gear.mainHand": newGear.mainHand }),
        ...(_validateGearChange(equipedGear, newGear, "offHand") && { "system.gear.offHand": newGear.offHand }),
        ...(_validateGearChange(equipedGear, newGear, "accessory") && { "system.gear.accessory": newGear.accessory })
    };

    actor.update(newData);

    //_renderEquipmentMessage(templateData);
}

function _validateGearChange(equipedGear, newGear, gearType){
    if(newGear[gearType] == undefined){
        newGear[gearType] = "";
    }

    if(equipedGear[gearType]?._id == null){
        equipedGear[gearType] = {_id: ""};
    }

    return equipedGear[gearType]._id != newGear[gearType];
}

async function _renderEquipmentMessage(templateData){
    const html = await renderTemplate(template, templateData);

    ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: templateData.actor }),
        content: html
    });
}

function _normalizeGear(newGear){
    if(newGear.mainHand === newGear.offHand){
        
    }

    return {
        ...defaultGear,
        ...newGear
    }

}

function _mountUpdateData(equipedItem, newItem){
    
}
