export function makeAction(event, actor){
    console.log("CQN | MAKE ACTION!")
    const element = event.currentTarget;
    const dataset = element.dataset;
    const actionType = dataset.action;
    
    switch(actionType){
        case "attack":
            _makeAttack(actor);
    }
}

function _makeAttack(actor){
    console.log("CQN | MAKE A ATTACK!")

    const attackRoll = _buildAttackRoll(actor);
    
    console.log(attackRoll)
    
    let label = _buildAttackLabel(actor);
    let roll = new Roll(attackRoll, actor.getRollData());

    roll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: actor }),
      flavor: label,
      rollMode: game.settings.get('core', 'rollMode'),
    });
}

function _buildAttackRoll(actor){

    let equipedWeapon = _recoverWeapon(actor);
    let accuracyFirst = actor.system.attributes[equipedWeapon.system.accuracyFirst];
    let accuracySecond = actor.system.attributes[equipedWeapon.system.accuracySecond];
    let accuracyMod = equipedWeapon.system.accuracyMod;

    return `${accuracyFirst} + ${accuracySecond} + ${accuracyMod}`;
}

function _recoverWeapon(actor){
    let itemId = actor.system.gear.weapon || "";
    return itemId ? actor.items.get(itemId) : "unnarmed attack";
}

function _buildAttackLabel(actor){
    let equipedWeapon = _recoverWeapon(actor);
    let weaponName = equipedWeapon.name || "unnarmed attack";
    return `MAKE A ATTACK with ${weaponName}!!!`;
}
