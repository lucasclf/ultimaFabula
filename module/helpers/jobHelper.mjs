export function recoverFreeBenefits(jobName, job){
    const benefits = job.jobsBenefits;
    const newDiv = document.createElement("div");

    if(job.caster === true){
        newDiv.appendChild(_generateJobText(job));
    }

    for (const benefit of Object.entries(benefits)) {
        if(benefit[1] > 0 || benefit[1] === true){
            newDiv.appendChild(_generateBenefitText(benefit));
        }
    }

    return newDiv.innerHTML;
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
    const p = document.createElement("p");
    const benefitsName = game.i18n.localize(CONFIG.FABULA_ULTIMA.uiBenefits[benefit[0]]);

    if(typeof benefit[1] === "boolean"){
        const img = document.createElement("img");
        img.src = "systems/fabula-ultima/assets/icons/check.png"
        img.className = "check-img"
        const conteudo = document.createTextNode(`${benefitsName}: `);
        p.appendChild(conteudo)
        p.appendChild(img)
        return p;
    }
    
    const conteudo = document.createTextNode(`${benefitsName}: ${benefit[1]} `);
    p.appendChild(conteudo)
    return p;

}

function _generateJobText(job){
    const casterAttr = job.casterAttr;
    const paragraph = document.createElement("p");
    const conteudo = document.createTextNode(`${casterAttr}`)
    paragraph.appendChild(conteudo);

    return paragraph
}