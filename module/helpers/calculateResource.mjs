import { extractAttrDiceValue } from "./genericHelper.mjs";

export function mountResources(character, jobs){
    character.resources.level = _calcLevel(jobs);
    character.resources.hp.max = _calcResource(character, character.attributes.actual.might, "hp");
    character.resources.hp.crisis = _calcCrisisHp(character.resources.hp.max);
    character.resources.mp.max = _calcResource(character, character.attributes.actual.willpower, "mp");
    character.resources.ip.max = _calcIp(jobs)
}

function _calcLevel(jobs){
    return jobs.reduce((total, job) => total + job.system.level, 0);
}

function _calcResource(character, attr, type){
    let attrValue = extractAttrDiceValue(attr);

    let resource = (attrValue * 5) + character.resources.level + character.benefitsBonus[type] + character.skillBonus[type];
    return resource;
}

function _calcCrisisHp(hp){
    return Math.floor(hp / 2);
}

function _calcIp(jobs){
    let ipBonus = jobs.reduce(function(total, jobAtual) {
        return total + (jobAtual.system.level > 0 && 
            jobAtual.system.benefitsBonus && 
            jobAtual.system.benefitsBonus.ip ? jobAtual.system.benefitsBonus.ip : 0);
    }, 0);
    return 6 + ipBonus
}
