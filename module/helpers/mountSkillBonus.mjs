export function mountSkill(actor, skillBonus, skills){
    skillBonus.hp = calcHpBonus(skills);
    skillBonus.mp = calcMpBonus(skills);
    skillBonus.meleeAccuracy = calcAccuracyBonus(skills, "meleeAccuracy");
    skillBonus.rangedAccuracy = calcAccuracyBonus(skills, "rangedAccuracy");
    skillBonus.dualShield = toogleDualShield(skills);

    return skillBonus;
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

// "maxLevel": 1,
// "level": 1,
// "jobRelation": "Define",
// "bonus": {
//   "hp": 0,
//   "hpMultiply": 0,
//   "mp": 0,
//   "mpMultiply": 0,
//   "ip": 0,
//   "ipMultiply": 0,
//   "meleeAcuracy": false,
//   "rangedAccuracy": false,
//   "dualShield": false