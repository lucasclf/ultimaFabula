const slotEquipmentFunctions = {
    mainHand: _equipMainHand,
    offHand: _equipOffHand,
    default: _equipNotHand,
};

export function equipGear(event, actor, dualShield){
    const li = $(event.currentTarget).parents(".item");
    const item = actor.items.get(li.data("itemId"));

    let slotType = event.currentTarget.attributes.slot.value;
    const equipFunction = slotEquipmentFunctions[slotType] || slotEquipmentFunctions.default;

    const updateData = equipFunction(item, actor, slotType);

    actor.update(updateData);
}

export function toogleGearButton(actor, item){
    const isMartial = item.system.isMartial;
    const itemType = _extractItemType(item);
    const hasMartialBenefits = actor.benefitsBonus.martialItems[itemType];

    if(isMartial && !hasMartialBenefits){
        return "disabled-shield";
    }
}

function _extractItemType(item){
    switch(item.type){
        case "shield":
            return item.type;
        case "armor":
            return item.type;
        case "weapon":
            return `${item.system.attackType}Weapon`
    }
}

function _equipNotHand(item, actor, slotType){
    const currentItemId = actor.system.gear[slotType];
    return createUpdateData(item, slotType, currentItemId);
}

function _equipMainHand(item, actor, slotType){
    const currentItemId = actor.system.gear[slotType];

    const updateData = createUpdateData(item, slotType, currentItemId);
     
    if (currentItemId !== item.id && item?.system.gripType === "two-handed") {
       _toggleTwoHandedWeapon(updateData, "offHand");
    }
     
    return updateData;
}

function _equipOffHand(item, actor, slotType){
    const currentItemId = actor.system.gear[slotType];
    const mainHandId = actor.system.gear.mainHand;
    const mainHand = actor.items.get(mainHandId);

    const updateData = createUpdateData(item, slotType, currentItemId);
  
    if (currentItemId !== item.id && mainHand?.system.gripType === "two-handed") {  
        _toggleTwoHandedWeapon(updateData, "mainHand");
    }
 return updateData;
}

function _toggleTwoHandedWeapon(updateData, handType){
    updateData[`system.gear.${handType}`] = "";
    updateData[`system.gear.${handType}Quality`] = "no-quality";
}

function createUpdateData(item, slotType, currentItemId = "") {
    const updateData = {
        [`system.gear.${slotType}`]: "",
        [`system.gear.${slotType}Quality`]: "no-quality",
    };

    if (currentItemId !== item.id) {
        updateData[`system.gear.${slotType}`] = item.id;
        updateData[`system.gear.${slotType}Quality`] = item.system.quality;
    }

    return updateData;
}