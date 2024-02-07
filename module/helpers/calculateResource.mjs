import { extractAttrDiceValue, extractItem } from "./genericHelper.mjs";

export function mountResources(actor){
    let updateData = {};

    updateData["system.resources.level"] = _calcLevel(actor);
    updateData["system.resources.hp.max"] = _calcResource(actor, "hp");
    updateData["system.resources.hp.crisis"] =_calcCrisisHp(updateData["system.resources.hp.max"]);
    updateData["system.resources.mp.max"] = _calcResource(actor, "mp");
    updateData["system.resources.ip.max"] = _calcIp(extractItem(actor.items, "job"));

    actor.update(updateData);
}

function _calcLevel(actor){
    const jobs = extractItem(actor.items, "job");
    return jobs.reduce((total, job) => total + job.system.level, 0);
}

function _calcResource(actor, type){
    let attr = actor.system.attributes.actual.might;
    if(type === "mp"){
        attr = actor.system.attributes.actual.willpower;
    }

    let attrValue = extractAttrDiceValue(attr);

    let resource = (attrValue * 5) + actor.system.resources.level + actor.system.benefitsBonus[type] + actor.system.skillBonus[type];
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
