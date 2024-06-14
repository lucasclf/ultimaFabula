export function recoverFreeBenefits(jobName, job){
    const benefits = job.jobsBenefits;
    const newDiv = document.createElement("div");
    newDiv.className = "benefits-container";

    newDiv.appendChild(_generateCasterText(job));
    newDiv.appendChild(_generateCasterAttrText(job));


    for (const benefit of Object.entries(benefits)) {
        newDiv.appendChild(_generateBenefitText(benefit));
    }

    return newDiv.outerHTML;
}

export function recoverTotalFreeBenefits(jobs){
    const benefits = {
        hp: 0,
        mp: 0,
        ip: 0,
        canInitiateProjects: false,
        canPerformRituals: false,
        martialProficiency: {
            armor: false,
            shield: false,
            ranged: false,
            melee: false
        }
    }

    for (let job in jobs) {
        if(jobs[job].level > 0){
            benefits.hp += jobs[job].jobsBenefits.healthBonus;
            benefits.mp += jobs[job].jobsBenefits.manaBonus;
            benefits.ip += jobs[job].jobsBenefits.inventoryBonus;
            benefits.canInitiateProjects = jobs[job].jobsBenefits.canInitiateProjects == true ? true : false;
            benefits.canPerformRituals = jobs[job].jobsBenefits.canPerformRituals == true ? true : false;
            benefits.martialProficiency.armor = jobs[job].martialProficiency.armor == true ? true : false;
            benefits.martialProficiency.shield = jobs[job].martialProficiency.shield == true ? true : false;
            benefits.martialProficiency.ranged = jobs[job].martialProficiency.ranged == true ? true : false;
            benefits.martialProficiency.melee = jobs[job].martialProficiency.melee == true ? true : false;
        }
    }

    return benefits;
}

export function recoverTotalLevel(jobs){
    let total = 0;
    for (let job in jobs) {
        total += jobs[job].level;
    }
    return total;
}

function _generateBenefitText(benefit){
    const span = document.createElement("span");
    const benefitsName = game.i18n.localize(CONFIG.FABULA_ULTIMA.uiBenefits[benefit[0]]);

    if(typeof benefit[1] === "boolean"){
        const img = document.createElement("img");
        img.src = `systems/fabula-ultima/assets/icons/check-${benefit[1]}.png`
        img.className = "check-img"
        const contend = document.createTextNode(`${benefitsName}: `);
        span.appendChild(contend)
        span.appendChild(img)
        return span;
    }
    
    const contend = document.createTextNode(`${benefitsName}: ${benefit[1]} `);
    span.appendChild(contend)
    return span;

}

function _generateCasterText(job){
    const caster = job.caster;
    const casterImg = document.createElement("img");
    casterImg.src = `systems/fabula-ultima/assets/icons/properties/caster.png`;
    casterImg.className = "caster-img"
    
    const img = document.createElement("img");
    img.src = `systems/fabula-ultima/assets/icons/check-${caster}.png`
    img.className = "check-img"
    
    const casterSpan = document.createElement("span");
    const casterContend = document.createTextNode(': ')
    casterSpan.appendChild(casterImg)
    casterSpan.appendChild(casterContend)
    casterSpan.appendChild(img)

    return casterSpan
}

function _generateCasterAttrText(job){
    const attrSpan = document.createElement("span");

    if(job.caster){
        const casterAttr = game.i18n.localize(CONFIG.FABULA_ULTIMA.attributes[job.casterAttr]);

        const attrContend = document.createTextNode(`${casterAttr}`)
        attrSpan.appendChild(attrContend)
    }

    return attrSpan;
}

export function hasJobsType(jobs, jobType){
    for (const job of Object.values(jobs)) {
        if(jobType === 'mastered'){
            if(job.level === 10){
                return true;
            }
        } else if(jobType === 'trained'){
            if(job.level > 0 && job.level < 10){
                return true;
            }
        } else if(jobType === 'untrained') {
            if(job.level === 0){
                return true;
            }
        }
    }

    return false;
}

export function groupJobs(jobs, groupType){
    console.log(CONFIG.FABULA_ULTIMA.jobType.master)
    console.log(groupType)
    if(groupType == CONFIG.FABULA_ULTIMA.jobType.master){
        const jobsReduced = Object.fromEntries(Object.entries(jobs).filter(([_, job]) => job.level === 10));
        return jobsReduced;
    }
    if(groupType == CONFIG.FABULA_ULTIMA.jobType.trained){
        const jobsReduced = Object.fromEntries(Object.entries(jobs).filter(([_, job]) => job.level > 0 && job.level < 10));
        return jobsReduced;
    }
    if(groupType == CONFIG.FABULA_ULTIMA.jobType.untrained){
        const jobsReduced = Object.fromEntries(Object.entries(jobs).filter(([_, job]) => job.level === 0));
        return jobsReduced;
    }
    return;
}