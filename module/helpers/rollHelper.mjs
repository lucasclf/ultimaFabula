export async function mountRoll(actor, firstAttr, secondAttr, modifier=0){
    const attrs = `${firstAttr} + ${secondAttr} +${modifier}`;

    let roll = new Roll(attrs, actor.getRollData());
    let diceRoll = await roll.roll({async: true});
    return diceRoll;
}

export function calcHighRoll(dices){
    let highRoll = dices.reduce((max, dice) => {
        return (max.results[0].result > dice.results[0].result) ? max : dice;
    }).results[0].result;

    return Number(highRoll);
}