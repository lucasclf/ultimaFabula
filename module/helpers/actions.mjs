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
    const attackRoll = _buildAttackRoll(actor);

    
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
    let weapon = itemId ? actor.items.get(itemId) : _mountUnnarmedWeapon();
    
    if(weapon.type === "defensive"){
        return _mountShieldWeapon(actor);
    }
    return weapon;
}

function _mountUnnarmedWeapon(){
    return {
        name:"Unarmed Weapon",
        type: "weapon",
        system: {
          accuracyFirst: "dexterity",
          accuracySecond: "might",
          accuracyMod: 0
        }
       };
}

function _mountShieldWeapon(actor){
    let shield = actor.system.gear.shield;
    if(shield != ""){
        return {
            name:"Twin Shield",
            type: "weapon",
            system: {
              accuracyFirst: "might",
              accuracySecond: "might",
              accuracyMod: 0
            }
           };
    }

    return _mountUnnarmedWeapon();
}

function _buildAttackLabel(actor){
    let equipedWeapon = _recoverWeapon(actor);
    let weaponName = equipedWeapon.name.toUpperCase();
    return `MAKE A ATTACK WITH ${weaponName}!!!`;
}
