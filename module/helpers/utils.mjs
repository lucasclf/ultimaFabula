export function decreaseAttr(attr, numberOfDecreases){
    const decreaseMap = {
        "d12": "d10",
        "d10": "d8",
        "d8": "d6",
        "d6": "d6"
    };

    let currentAttr = attr;
    for (let i = 0; i < numberOfDecreases; i++) {
        currentAttr = decreaseMap[currentAttr];
    }

    return currentAttr;
}

export function recoverFreeBenefits(jobs){
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

export function extractDiceValor(dice){
    const diceValue = dice.match(/\d+/)[0];
    return parseInt(diceValue);
}

export function recoverTotalLevel(jobs){
    let total = 0;
    for (let job in jobs) {
        total += jobs[job].level;
    }
    return total;
}

export function recoverAttrLoweredByCondition(conditions){
    const trueConditions = {};
    Object.keys(conditions)
        .filter(key => conditions[key] === true)
        .map(condition => trueConditions[condition] = conditions[condition]);

    const attrLowered = [];
    Object.keys(trueConditions)
        .map(condition => attrLowered.push( ...CONFIG.FABULA_ULTIMA.conditionsAttr[condition]));

    return attrLowered;
}