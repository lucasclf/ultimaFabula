export function equipGear(event, actor){
    console.log("CQN | EQUIP ITEM!")

    const li = $(event.currentTarget).parents(".item");
    const item = actor.items.get(li.data("itemId"));

    let updateData = {};
    let itemType = item.system.type

    updateData[`system.gear.${itemType}`] = item.id;
    updateData[`system.defense.${itemType}Value`] = item.system.defense.value;
    updateData[`system.defense.${itemType}Attr`] = item.system.defense.attr;
    updateData[`system.mDefense.${itemType}Value`] = item.system.mDefense.value;
    updateData[`system.mDefense.${itemType}Attr`] = item.system.mDefense.attr;
    updateData[`system.initiative.${itemType}Value`] = item.system.initiative;

    actor.update(updateData);
}