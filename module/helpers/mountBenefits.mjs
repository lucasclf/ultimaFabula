import { extractItem } from "./genericHelper.mjs";

export function mountBenefit(actor){
    let updateData = {};
    const jobs = extractItem(actor.items, "job"); 

    updateData["system.benefitsBonus.hp"] = _calcResource(jobs, "hp");
    updateData["system.benefitsBonus.mp"] = _calcResource(jobs, "mp");
    updateData["system.benefitsBonus.ip"] = _calcResource(jobs, "ip");
    updateData["system.benefitsBonus.initiateProjects"] = _toogleProjects(jobs);
    updateData["system.benefitsBonus.rituals"] = _toogleRituals(jobs);
    updateData["system.benefitsBonus.martialItems.meleeWeapon"] = _toogleMartial(jobs, 'meleeWeapon');
    updateData["system.benefitsBonus.martialItems.rangedWeapon"] = _toogleMartial(jobs, 'rangedWeapon');
    updateData["system.benefitsBonus.martialItems.armor"] = _toogleMartial(jobs, 'armor');
    updateData["system.benefitsBonus.martialItems.shield"] = _toogleMartial(jobs, 'shield');

    actor.update(updateData);
}

function _toogleProjects(jobs){
    return jobs.some(job => job.system.benefitsBonus.initiateProjects === true && job.system.level > 0);
}

function _toogleRituals(jobs){
    return jobs
            .filter(job => job.system.isCaster === true && job.system.level > 0)
            .map(job => job.name);
}

function _toogleMartial(job, type){
    return job.some(job => job.system.benefitsBonus.martialItems[type] === true && job.system.level > 0);
}

function _calcResource(jobs, type){
    return jobs.reduce(function(total, jobAtual) {
        return total + (jobAtual.system.level > 0 && 
            jobAtual.system.benefitsBonus && 
            jobAtual.system.benefitsBonus[type] ? jobAtual.system.benefitsBonus[type] : 0);
    }, 0);
}