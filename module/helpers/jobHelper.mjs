export function recoverFreeBenefits(job){
    const { jobsBenefits } = job;
    const jobContainer = document.createElement("div");
    const benefitsContainer = document.createElement("div");
    jobContainer.className = "full-benefits-container";
    benefitsContainer.className = "benefits-container";


    if(job.caster){
        jobContainer.appendChild(_generateCasterText(job));    
    }

    Object.entries(jobsBenefits).forEach(([key, value]) => {
        if(value === true){
            benefitsContainer.appendChild(_generateBooleanBenefitText([key, value]));
        }else if(value !== false){
            benefitsContainer.appendChild(_generateNumericalBenefitText([key, value]));
        }
    });

    jobContainer.appendChild(benefitsContainer);

    return jobContainer.outerHTML;
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

    Object.values(jobs).forEach(job => {
        if (job.level > 0) {
            benefits.hp += job.jobsBenefits.healthBonus;
            benefits.mp += job.jobsBenefits.manaBonus;
            benefits.ip += job.jobsBenefits.inventoryBonus;
            benefits.canInitiateProjects = benefits.canInitiateProjects || job.jobsBenefits.canInitiateProjects;
            benefits.canPerformRituals = benefits.canPerformRituals || job.jobsBenefits.canPerformRituals;
            benefits.martialProficiency.armor = benefits.martialProficiency.armor || job.martialProficiency.armor;
            benefits.martialProficiency.shield = benefits.martialProficiency.shield || job.martialProficiency.shield;
            benefits.martialProficiency.ranged = benefits.martialProficiency.ranged || job.martialProficiency.ranged;
            benefits.martialProficiency.melee = benefits.martialProficiency.melee || job.martialProficiency.melee;
        }
    });

    return benefits;
}

export function recoverTotalLevel(jobs){
    return Object.values(jobs).reduce((total, job) => total += job.level, 0);
}

function _generateBooleanBenefitText(benefit){
    const span = document.createElement("span");
    let content;
    const benefitName = game.i18n.localize(CONFIG.FABULA_ULTIMA.uiBenefits[benefit[0]]);

    const img = document.createElement("img");
    img.src = `systems/fabula-ultima/assets/icons/check-${benefit[1]}.png`
    img.className = "check-img"
    content = document.createTextNode(`${benefitName}: `);
    span.appendChild(content)
    span.appendChild(img)
    return span;
}

function _generateNumericalBenefitText(benefit){
    const span = document.createElement("span");
    let content;
    const benefitName = game.i18n.localize(CONFIG.FABULA_ULTIMA.uiBenefits[benefit[0]]);
    content = document.createTextNode(`${benefitName}: ${benefit[1]} `);
    span.appendChild(content);
    return span;
}

function _generateCasterText(job){
    let casterAttr;
    const casterImg = _createImageElement(
        'systems/fabula-ultima/assets/icons/properties/caster.png', 
        'caster-img'
    );

    const casterSpan = document.createElement("span");

    if(job.casterAttr == CONFIG.FABULA_ULTIMA.jobs.arcanist.casterAttr){
        
        let fistAttr = game.i18n.localize(CONFIG.FABULA_ULTIMA.attributes.ins);
        let secondAttr = game.i18n.localize(CONFIG.FABULA_ULTIMA.attributes.mig);
        casterAttr = `${fistAttr}||${secondAttr}`;
    } else {
        casterAttr = game.i18n.localize(CONFIG.FABULA_ULTIMA.attributes[job.casterAttr]);
    }

    casterSpan.className = "caster-span";
    const casterContent = document.createTextNode(`: ${casterAttr}`);

    casterSpan.appendChild(casterImg);
    casterSpan.appendChild(casterContent);

    return casterSpan;
}

function _createImageElement(src, className) {
    const img = document.createElement("img");
    img.src = src;
    img.className = className;
    return img;
}

export function hasJobsType(jobs, jobType){
    const jobCheckers = {
        mastered: _isMastered,
        trained: _isTrained,
        untrained: _isUntrained
    };

    const checker = jobCheckers[jobType];
    if (!checker) return false;

    return Object.values(jobs).some(job => checker(job.level));
}

export function groupJobs(jobs, groupType){
    const jobFilters = {
        [CONFIG.FABULA_ULTIMA.jobType.master]: _isMastered,
        [CONFIG.FABULA_ULTIMA.jobType.trained]: _isTrained,
        [CONFIG.FABULA_ULTIMA.jobType.untrained]: _isUntrained
    };

    const filterFn = jobFilters[groupType];
    if (!filterFn) return;

    return Object.fromEntries(
        Object.entries(jobs).filter(([_, job]) => filterFn(job.level))
    );
}

export function recoverJobQuantity(jobType, jobs){
    const jobCheckers = {
        [CONFIG.FABULA_ULTIMA.jobType.master]: _isMastered,
        [CONFIG.FABULA_ULTIMA.jobType.trained]: _isTrained,
        [CONFIG.FABULA_ULTIMA.jobType.untrained]: _isUntrained
    };

    const checker = jobCheckers[jobType];
    if (!checker) return 0;

    return Object.values(jobs).filter(job => checker(job.level)).length;
}

function _isMastered(level){
    return level === 10;;
}

function _isTrained(level){
    return level > 0 && level < 10;
}

function _isUntrained(level){
    return level === 0;
}