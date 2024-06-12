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


export function extractDiceValor(dice){
    const diceValue = dice.match(/\d+/)[0];
    return parseInt(diceValue);
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