export function recoverFreeBenefits(jobName, job){
    const { jobsBenefits } = job;
    const benefitsContainer = document.createElement("div");
    benefitsContainer.className = "benefits-container";

    benefitsContainer.appendChild(_generateCasterText(job));
    benefitsContainer.appendChild(_generateCasterAttrText(job));


    Object.entries(jobsBenefits).forEach(([key, value]) => {
        benefitsContainer.appendChild(_generateBenefitText([key, value]));
    });

    return benefitsContainer.outerHTML;
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

function _generateBenefitText(benefit){
    const span = document.createElement("span");
    const benefitName = game.i18n.localize(CONFIG.FABULA_ULTIMA.uiBenefits[benefit[0]]);
    let content;

    if(typeof benefit[1] === "boolean"){
        const img = document.createElement("img");
        img.src = `systems/fabula-ultima/assets/icons/check-${benefit[1]}.png`
        img.className = "check-img"
        content = document.createTextNode(`${benefitName}: `);
        span.appendChild(content)
        span.appendChild(img)
    } else {
        content = document.createTextNode(`${benefitName}: ${benefit[1]} `);
        span.appendChild(content);
    }
    return span;
}

function _generateCasterText(job){
    const { caster } = job;
    const casterImg = _createImageElement(
        'systems/fabula-ultima/assets/icons/properties/caster.png', 
        'caster-img'
    );

    const checkImg = _createImageElement(
        `systems/fabula-ultima/assets/icons/check-${caster}.png`, 
        'check-img'
    );
    
    const casterSpan = document.createElement("span");
    const casterContent = document.createTextNode(': ');

    casterSpan.appendChild(casterImg);
    casterSpan.appendChild(casterContent);
    casterSpan.appendChild(checkImg);

    return casterSpan;
}

function _createImageElement(src, className) {
    const img = document.createElement("img");
    img.src = src;
    img.className = className;
    return img;
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