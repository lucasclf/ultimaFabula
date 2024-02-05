export function equipGear(event, actor, dualShield){
    const li = $(event.currentTarget).parents(".item");
    const item = actor.items.get(li.data("itemId"));


    let slotType = event.currentTarget.attributes.slot.value;
    let updateData = {};
    
    switch(slotType){
        case "mainHand":
            updateData = _equipMainHand(item, actor);
            break;
        case "offHand":
            updateData = _equipOffHand(item, actor);
            break;
        default:
            updateData = _equipNotHand(item, actor, slotType);
            break;
    }

    actor.update(updateData);
}

function _equipNotHand(item, actor, itemType){
    let actualGearId = actor.system.gear[itemType];
    let updateData = {};

    if(actualGearId != item.id){
        updateData[`system.gear.${itemType}`] = item.id;
        updateData[`system.gear.${itemType}Quality`] = item.system.quality;
    } else{
        updateData[`system.gear.${itemType}`] = "";
        updateData[`system.gear.${itemType}Quality`] = "no-quality";
    }

    return updateData;
}

function _equipMainHand(item, actor){
    let mainHandId = actor.system.gear.mainHand;
    let updateData = {};

    if(mainHandId != item.id){
        updateData[`system.gear.mainHand`] = item.id;
        updateData[`system.gear.mainHandQuality`] = item.system.quality;
        if(item?.system.gripType === "two-handed") _toogleTwoHandedWeapon(updateData, "offHand")
    } else{
        updateData[`system.gear.mainHand`] = "";
        updateData[`system.gear.mainHandQuality`] = "no-quality";
    }

    return updateData;
}

function _equipOffHand(item, actor){
    let offHandId = actor.system.gear.offHand;
    let mainHandId = actor.system.gear.mainHand;
    let mainHand = actor.items.get(mainHandId);
    let updateData = {};

    if(offHandId != item.id){
        updateData[`system.gear.offHand`] = item.id;
        updateData[`system.gear.offHandQuality`] = item.system.quality;
        if(mainHand?.system.gripType === "two-handed") _toogleTwoHandedWeapon(updateData, "mainHand")
        
    } else{
        updateData[`system.gear.offHand`] = "";
        updateData[`system.gear.offHandQuality`] = "no-quality";
    }

    return updateData;
}

function _toogleTwoHandedWeapon(updateData, handType){
    updateData[`system.gear.${handType}`] = "";
    updateData[`system.gear.${handType}Quality`] = "no-quality";
}