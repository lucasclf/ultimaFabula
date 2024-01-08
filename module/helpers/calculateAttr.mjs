export function calcLevel(jobs) {
    let totalLevel = jobs.reduce((total, job) => total + job.system.level, 0);

    return totalLevel;
}

export function calcHp(level, attr, job){
    let attrValue = extractAttrDiceValue(attr);

    let hpBonus = job.reduce(function(total, jobAtual) {
        return total + (jobAtual.system.level > 0 && 
            jobAtual.system.benefitsBonus && 
            jobAtual.system.benefitsBonus.hp ? jobAtual.system.benefitsBonus.hp : 0);
    }, 0);

    let hp = (attrValue * 5) + level + hpBonus;
    return hp
}

export function calcMp(level, attr, job){
    let attrValue = extractAttrDiceValue(attr);

    let mpBonus = job.reduce(function(total, jobAtual) {
        return total + (jobAtual.system.level > 0 && 
            jobAtual.system.benefitsBonus && 
            jobAtual.system.benefitsBonus.mp ? jobAtual.system.benefitsBonus.mp : 0);
    }, 0);

    let mp = (attrValue * 5) + level + mpBonus;
    return mp
}

export function calcIp(job){
    let ipBonus = job.reduce(function(total, jobAtual) {
        return total + (jobAtual.system.level > 0 && 
            jobAtual.system.benefitsBonus && 
            jobAtual.system.benefitsBonus.ip ? jobAtual.system.benefitsBonus.ip : 0);
    }, 0);
    return 6 + ipBonus
}

export function calcResouce(level, attr) {
    let attrValue = extractAttrDiceValue(attr);

    let hp = (attrValue * 5) + level;
    return hp;
}

export function calcCrisis(hp) {
    return Math.floor(hp / 2);
}

export function extractAttrDiceValue(attr){
    return attr.match(/\d+/)[0] || 6;
}