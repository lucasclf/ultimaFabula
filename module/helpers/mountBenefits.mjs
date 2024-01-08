export function mountBenefit(benefits, job){

    benefits.initiateProjects = toogleProjects(job);
    benefits.rituals = toogleRituals(job);
    benefits.martialItems.meeleWeapon = toogleMartial(job, 'meeleWeapon');
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