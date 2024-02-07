import { extractItem } from "./genericHelper.mjs";

export function mountSkill(actor, skillBonus, skillsa){
    let updateData = {};
    const skills = extractItem(actor.items, "skill");
    updateData["system.skillBonus.hp"] = calcHpBonus(skills);
    updateData["system.skillBonus.mp"] = calcMpBonus(skills);
    updateData["system.skillBonus.meleeAccuracy"] = calcAccuracyBonus(skills, "meleeAccuracy");
    updateData["system.skillBonus.rangedAccuracy"] = calcAccuracyBonus(skills, "rangedAccuracy");
    updateData["system.skillBonus.dualShield"] = toogleDualShield(skills);
    // skillBonus.hp = calcHpBonus(skills);
    // skillBonus.mp = calcMpBonus(skills);
    // skillBonus.meleeAccuracy = calcAccuracyBonus(skills, "meleeAccuracy");
    // skillBonus.rangedAccuracy = calcAccuracyBonus(skills, "rangedAccuracy");
    // skillBonus.dualShield = toogleDualShield(skills);

    actor.update(updateData);
}

function calcHpBonus(skills){
    let fixedHpBonus = calcFixedBonus(skills, "hp")

    let variableHpBonus = calcVariableBonus(skills, "hpMultiply");

    return fixedHpBonus + variableHpBonus;
}

function calcMpBonus(skills){
    let fixedMpBonus = calcFixedBonus(skills, "mp")

    let variableMpBonus = calcVariableBonus(skills, "mpMultiply");

    return fixedMpBonus + variableMpBonus;
}

function calcAccuracyBonus(skills, type){

    
    return skills.reduce((total, skill) => {
        if (skill.system.bonus[type] === true) {
            return total + skill.system.level;
        } else {
            return total;
        }
       }, 0);
}

function toogleDualShield(skills){
    return skills.some(skill => skill.system.bonus.dualShield === true && skill.system.level > 0);
}


function calcFixedBonus(skills, type){
    return skills.reduce(function(total, skillAtual) {
        return total + (skillAtual.system.level > 0 && 
            skillAtual.system.bonus && 
            skillAtual.system.bonus[type] ? skillAtual.system.bonus[type] : 0);
    }, 0);
}

function calcVariableBonus(skills, type){
    return skills.reduce(function(total, skillAtual) {
        return total + (skillAtual.system.level > 0 && 
            skillAtual.system.bonus && 
            skillAtual.system.bonus[type] ? skillAtual.system.bonus[type] * skillAtual.system.level : 0);
    }, 0);
}