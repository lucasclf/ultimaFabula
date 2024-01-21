export function equipGear(event, actor, dualShield){
    const li = $(event.currentTarget).parents(".item");
    const item = actor.items.get(li.data("itemId"));

    let updateData = {};
    
    if(dualShield === true){
        _equipDualShield(updateData, item, actor.system.gear);
    } else if(item.type == 'weapon'){
        _equipWeapon(updateData, item, actor.system.gear);
    } else if(item.type == 'accessory'){
        _equipAccessory(updateData, item, actor);
    } else {
        _equipDefensive(updateData, item, actor);
    }

    actor.update(updateData);
}

function _equipDefensive(updateData, item, actor){
    let itemType = item.system.type;
    let weaponId = actor.system.gear.weapon;
    let weapon = actor.items.get(weaponId);
    
    if(actor.system.gear[itemType] != item.id){
        updateData[`system.gear.${itemType}`] = item.id;
        updateData[`system.gear.${itemType}Quality`] = item.system.quality;
        _toogleTwoHandedWeapon(itemType, weapon, updateData)
    } else{
        updateData[`system.gear.${itemType}`] = "";
        updateData[`system.gear.${itemType}Quality`] = "no-qualities";
    }
}

function _toogleTwoHandedWeapon(itemType, weapon, updateData){
    if(itemType === "shield" && weapon?.system.gripType === "two-handed"){
        updateData["system.gear.weapon"] = "";
        updateData["system.gear.weaponQuality"] = "no-qualities";
    }
}

function _equipWeapon(updateData, item, gear){
    let newEquipedItem = "";
    let newQuality = "no-qualities";
    if(gear.weapon != item.id){
        newEquipedItem = item.id;
        newQuality = item.system.quality;
        _toogleShield(updateData, item);
    }

    updateData[`system.gear.${item.type}`] = newEquipedItem;
    updateData[`system.gear.${item.type}Quality`] = newQuality;
}

function _equipAccessory(updateData, item, actor){

    let newEquipedItem = "";
    let newQuality = "no-qualities";
    if(actor.system.gear.accessory != item.id){
        newEquipedItem = item.id;
        newQuality = item.system.quality;
    }

    updateData["system.gear.accessory"] = newEquipedItem;
    updateData[`system.gear.${item.type}Quality`] = newQuality;
}

function _toogleShield(updateData, item){
    if(item.system.gripType === "two-handed"){
        updateData[`system.gear.shield`] = "";
        updateData['system.gear.shieldQuality'] = "no-qualities";
    }
}

function _equipDualShield(updateData, item, gear){
    
    if(gear.weapon != item.id){
        updateData[`system.gear.weapon`] = item.id;
        updateData['system.gear.weaponQuality'] = item.system.quality;
    } else{
        updateData[`system.gear.weapon`] = "";
        updateData['system.gear.weaponQuality'] = "no-qualities";
    }

}