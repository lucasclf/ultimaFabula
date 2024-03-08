export function recoverArmor(actor){
    let itemId = actor.system.gear.armor || "";
    let armor = itemId ? actor.items.get(itemId) : null;

    return armor;
}

export function recoverAccessory(actor){
    let itemId = actor.system.gear.accessory || "";
    let accessory = itemId ? actor.items.get(itemId) : null;

    return accessory;
}

export function recoverWeapon(actor){
    let itemId = actor.system.gear.mainHand || "";
    let weapon = itemId ? actor.items.get(itemId) : _mountUnnarmedWeapon();

    if(weapon.type === "shield"){
        return _mountShieldWeapon(actor);
    }

    return weapon;
}

export function recoverMainHand(actor){
    const itemId = actor.system.gear.mainHand || "";
    const mainHand = itemId ? actor.items.get(itemId) : null;
    const offHand = recoverOffHand(actor);

    if(mainHand === null && offHand === null){
        return _mountUnnarmedWeapon();
    }

    if(mainHand === null && offHand.system.gripType != "two-handed"){
        return _mountUnnarmedWeapon();
    }

    if(mainHand?.type === "shield" && offHand?.type === "shield"){
        return _mountShieldWeapon(actor);
    }

    return mainHand;
}

export function recoverOffHand(actor){
    const itemId = actor.system.gear.offHand || "";
    const offHand = itemId ? actor.items.get(itemId) : null;
    const mainHand = itemId ? actor.items.get(itemId) : null;

    if(mainHand === null && offHand === null){
        return _mountUnnarmedWeapon();
    }

    if(offHand === null && mainHand.system.gripType != "two-handed"){
        return _mountUnnarmedWeapon();
    }

    return offHand;
}

export function recoverShield(actor){
    let itemId = actor.system.gear.offHand || "";
    let shield = itemId ? actor.items.get(itemId) : null;

    return shield;
}

export function recoverItemList(actor, itemType){
    return actor.items.filter(item => item.type === itemType);
}

function _mountUnnarmedWeapon(){
    return {
        name:"Unarmed Weapon",
        type: "weapon",
        img: "icons/svg/item-bag.svg",
        system: {
            accuracyFirst: "dexterity",
            accuracySecond: "might",
            accuracyMod: 0,
            attackType: "melee",
            damage: 0,
            damageType: "physical",
            quality: "no-quality",
            gripType: "one-handed"
        },
        _id: ""
    };
}

function _mountShieldWeapon(actor){
    let shield = actor.system.gear.offHand;
    if(shield != ""){
        return {
            name:"Twin Shield",
            type: "weapon",
            img: "icons/svg/item-bag.svg",
            system: {
                accuracyFirst: "might",
                accuracySecond: "might",
                accuracyMod: 0,
                attackType: "melee",
                damage: 0,
                damageType: "physical",
                quality: "no-quality",
                gripType: "two-handed"
            }
        };
    }

    return _mountUnnarmedWeapon();
}