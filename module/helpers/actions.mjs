import { captalizeFirstLetter } from "./genericHelper.mjs";

export async function makeAction(event, actor){
    console.log("CQN | MAKE ACTION!")
    const element = event.currentTarget;
    const dataset = element.dataset;
    const actionType = dataset.action;
    
    switch(actionType){
        case "attack":
            _makeAttack(actor);
            break;
    }
}

async function _makeAttack(actor){
    const template = 'systems/ultimaFabula/templates/chat/attack-message.html';

    let equipedWeapon = _recoverWeapon(actor);
    let attackRoll = _buildAttackRoll(actor, equipedWeapon);

    let roll = new Roll(attackRoll, actor.getRollData());
    let diceRoll = await roll.roll({async: true}); 

    const templateData = {
        actor: actor,
        image: equipedWeapon.img,
        diceRoll: diceRoll,
        flavor: _buildAttackLabel(equipedWeapon),
        attackType: captalizeFirstLetter(equipedWeapon.system.attackType),
        damage: _calcDamage(diceRoll.dice, equipedWeapon),
        damageType: equipedWeapon.system.damageType
    }

    _renderMessage(template, templateData, actor);
}

function _buildAttackRoll(actor, equipedWeapon){
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
        img: "icons/svg/item-bag.svg",
        system: {
            accuracyFirst: "dexterity",
            accuracySecond: "might",
            accuracyMod: 0,
            attackType: "melee",
            damage: 0,
            damageType: "physical",

        }
    };
}

function _mountShieldWeapon(actor){
    let shield = actor.system.gear.shield;
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
                damageType: "physical"
            }
        };
    }

    return _mountUnnarmedWeapon();
}

function _buildAttackLabel(equipedWeapon){
    let weaponName = equipedWeapon.name.toUpperCase();
    return `ATTACK WITH ${weaponName}!!!`;
}

function _calcDamage(dices, equipedWeapon){
    let highRoll = dices.reduce((max, dice) => {
        return (max.results[0].result > dice.results[0].result) ? max : dice;
    }).results[0].result;

    let weaponDamage = equipedWeapon.system.damage;
    return highRoll + weaponDamage;
}

async function _renderMessage(template, templateData, actor){
    const html = await renderTemplate(template, templateData);

    ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: actor }),
        content: html
    });
}
