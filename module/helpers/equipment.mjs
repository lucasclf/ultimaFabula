export function equipGear(event, actor, dualShield){
    const li = $(event.currentTarget).parents(".item");
    const item = actor.items.get(li.data("itemId"));

    let updateData = {};
    
    if(dualShield === true){
        _equipDualShield(updateData, item, actor.system.gear);
    } else if(item.type == 'weapon'){
        _equipWeapon(updateData, item, actor.system.gear);
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
        _toogleTwoHandedWeapon(itemType, weapon, updateData)
    } else{
        updateData[`system.gear.${itemType}`] = "";
    }
}

function _toogleTwoHandedWeapon(itemType, weapon, updateData){
    if(itemType === "shield" && weapon?.system.gripType === "two-handed"){
        updateData["system.gear.weapon"] = "";
    }
}

function _equipWeapon(updateData, item, gear){
    let newEquipedItem = "";
    if(gear.weapon != item.id){
        newEquipedItem = item.id;
        _toogleShield(updateData, item);
    }

    updateData[`system.gear.${item.type}`] = newEquipedItem;
}

function _toogleShield(updateData, item){
    if(item.system.gripType === "two-handed"){
        updateData[`system.gear.shield`] = "";
    }
}

function _equipDualShield(updateData, item, gear){
    
    if(gear.weapon != item.id){
        updateData[`system.gear.weapon`] = item.id;
    } else{
        updateData[`system.gear.weapon`] = "";
    }

}