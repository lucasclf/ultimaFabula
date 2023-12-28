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
        updateData[`system.initiative.${itemType}Value`] = item.system.initiative;
    } else{
        updateData[`system.gear.${itemType}`] = "";
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