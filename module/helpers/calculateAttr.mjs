export function calcLevel(jobs) {
    let totalLevel = jobs.reduce((total, job) => total + job.system.level, 0);

    return totalLevel;
}

export function calcResouce(level, attr) {
    let attrValue = extractAttrDiceValue(attr);

    let hp = (attrValue * 5) + level;
    return hp;
}

export function calcCrisis(hp) {
    return hp / 2;
}

export function extractAttrDiceValue(attr){
    return attr.match(/\d+/)[0] || 6;
}