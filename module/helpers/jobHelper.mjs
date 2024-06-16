export function recoverFreeBenefits(job){
    const { jobBenefits } = job.system;
    const jobContainer = document.createElement("div");
    const benefitsContainer = document.createElement("div");
    jobContainer.className = "full-benefits-container";
    benefitsContainer.className = "benefits-container";

    jobContainer.appendChild(_generateCasterText(job.system.casterBenefits));    


    Object.entries(jobBenefits).forEach(([key, value]) => {
        benefitsContainer.appendChild(_generateNumericalBenefitText([key, value]));
    });

    if(job.system.casterBenefits.ritual){
        benefitsContainer.appendChild(_generateBooleanBenefitText(["ritual", job.system.casterBenefits.ritual]));
    }
    if(job.system.project){
        benefitsContainer.appendChild(_generateBooleanBenefitText(["project", job.system.project]));
    }

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
        if (job.system.level > 0) {
            benefits.hp += job.system.jobBenefits.healthPoints;
            benefits.mp += job.system.jobBenefits.manaPoints;
            benefits.ip += job.system.jobBenefits.inventoryPoints;
            benefits.canInitiateProjects = benefits.canInitiateProjects || job.system.jobBenefits.canInitiateProjects;
            benefits.canPerformRituals = benefits.canPerformRituals || job.system.jobBenefits.canPerformRituals;
            benefits.martialProficiency.armor = benefits.martialProficiency.armor || job.system.martialBenefits.armor;
            benefits.martialProficiency.shield = benefits.martialProficiency.shield || job.system.martialBenefits.shield;
            benefits.martialProficiency.ranged = benefits.martialProficiency.ranged || job.system.martialBenefits.ranged;
            benefits.martialProficiency.melee = benefits.martialProficiency.melee || job.system.martialBenefits.melee;
        }
    });

    return benefits;
}

export function recoverLevel(jobs){
    return Object.values(jobs).reduce((total, job) => total += job.system.level, 0);
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

function _generateCasterText(casterBenefits){
    let casterAttr;
    const casterImg = _createImageElement(
        'systems/fabula-ultima/assets/icons/properties/caster.png', 
        'caster-img'
    );
    const casterFalse = _createImageElement(
        'systems/fabula-ultima/assets/icons/check-false.png', 
        'check-img'
    );

    const casterSpan = document.createElement("span");

    casterAttr = game.i18n.localize(CONFIG.FABULA_ULTIMA.attributes[casterBenefits.attribute]);


    casterSpan.className = "caster-span";
    const casterContent = document.createTextNode(`: ${casterAttr}`);
    casterSpan.appendChild(casterImg);
    if(casterBenefits.caster){
        casterSpan.appendChild(casterContent);
    } else {
        casterSpan.appendChild(casterFalse);
    }

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

    return Object.values(jobs).some(job => checker(job.system.level));
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
        Object.entries(jobs).filter(([_, job]) => filterFn(job.system.level))
    );
}

export function groupJoobs(jobs, groupType){
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

export function recoverJobQuantity(jobs, jobType){

    const jobCheckers = {
        [CONFIG.FABULA_ULTIMA.jobType.master]: _isMastered,
        [CONFIG.FABULA_ULTIMA.jobType.trained]: _isTrained,
        [CONFIG.FABULA_ULTIMA.jobType.untrained]: _isUntrained
    };

    const checker = jobCheckers[jobType];
    if (!checker) return 0;
    
    return Object.values(jobs).filter(job => checker(job.system.level)).length;
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