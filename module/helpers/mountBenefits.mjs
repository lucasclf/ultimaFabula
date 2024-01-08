export function mountBenefit(benefits, job){

    benefits.hp = calcResource(job, "hp");
    benefits.mp = calcResource(job, "mp");
    benefits.ip = calcResource(job, "ip");
    benefits.initiateProjects = toogleProjects(job);
    benefits.rituals = toogleRituals(job);
    benefits.martialItems.meleeWeapon = toogleMartial(job, 'meleeWeapon');
    benefits.martialItems.rangedWeapon = toogleMartial(job, 'rangedWeapon');
    benefits.martialItems.armor = toogleMartial(job, 'armor');
    benefits.martialItems.shield = toogleMartial(job, 'shield');

    return benefits;
}

function toogleProjects(job){
    return job.some(job => job.system.benefitsBonus.initiateProjects === true && job.system.level > 0);
}

function toogleRituals(job){
    return job
            .filter(job => job.system.isCaster === true && job.system.level > 0)
            .map(job => job.name);
}

function toogleMartial(job, type){
    return job.some(job => job.system.benefitsBonus.martialItems[type] === true && job.system.level > 0);
}

function calcResource(job, type){
    return job.reduce(function(total, jobAtual) {
        return total + (jobAtual.system.level > 0 && 
            jobAtual.system.benefitsBonus && 
            jobAtual.system.benefitsBonus[type] ? jobAtual.system.benefitsBonus[type] : 0);
    }, 0);
}