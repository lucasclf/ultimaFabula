export function equipGear(event, actor){
    console.log("CQN | EQUIP ITEM!")

    const li = $(event.currentTarget).parents(".item");
    const item = actor.items.get(li.data("itemId"));

    let updateData = {};

    if(item.type == 'weapon'){
        _equipWeapon(updateData, item, actor.system.gear);
    } else {
        _equipDefensive(updateData, item, actor.system.gear)
    }

    actor.update(updateData);
}

function _equipDefensive(updateData, item, gear){
    let itemType = item.system.type
    
    if(gear[itemType] != item.id){
        updateData[`system.gear.${itemType}`] = item.id;
        updateData[`system.defense.${itemType}Value`] = item.system.defense.value;
        updateData[`system.defense.${itemType}Attr`] = item.system.defense.attr;
        updateData[`system.mDefense.${itemType}Value`] = item.system.mDefense.value;
        updateData[`system.mDefense.${itemType}Attr`] = item.system.mDefense.attr;
        updateData[`system.initiative.${itemType}Value`] = item.system.initiative;
    } else{
        updateData[`system.gear.${itemType}`] = "";
        updateData[`system.defense.${itemType}Value`] = 0;
        updateData[`system.defense.${itemType}Attr`] = "dexterity";
        updateData[`system.mDefense.${itemType}Value`] = 0;
        updateData[`system.mDefense.${itemType}Attr`] = "insight";
        updateData[`system.initiative.${itemType}Value`] = 0;
    }
    
}

function _equipWeapon(updateData, item, gear){
    let newEquipedItem = "";
    console.log(gear);
    if(gear.weapon != item.id){
        newEquipedItem = item.id;
    }

    updateData[`system.gear.${item.type}`] = newEquipedItem;
    
}