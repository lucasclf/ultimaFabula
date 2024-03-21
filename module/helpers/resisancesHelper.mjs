export function mountElementalResistances(actor){
    let updateData = {}
    updateData[`system.resistances`] = _calcRes(actor.system.gear);
    actor.update(updateData);

    console.log(actor);
}

function _calcRes(gear){
    const { accessoryQuality, armorQuality, mainHandQuality, offHandQuality} = gear;
    const qualities = [accessoryQuality, armorQuality, mainHandQuality, offHandQuality];

    let resistances = {
        "air": "Normal",
        "bolt": "Normal",
        "dark": "Normal",
        "earth": "Normal",
        "fire": "Normal",
        "ice": "Normal",
        "light": "Normal",
        "poison": "Normal"
    };

    qualities.forEach(str => {
        const resistanceMatch = str.match(/resistance-(\w+)/);
        const dualResistanceMatch = str.match(/dual-resistance-(\w+)-(\w+)/);
        const immunityMatch = str.match(/immunity-(\w+)/);
       
        if (resistanceMatch) {
            const [, element] = resistanceMatch;
            _updateResistance(resistances, element, "Resistant");
        } else if (dualResistanceMatch) {
            const [, element1, element2] = dualResistanceMatch;
            _updateResistance(resistances, element1, "Resistant");
            _updateResistance(resistances, element2, "Resistant");
        } else if (immunityMatch) {
            _updateResistance(resistances, element, "Immunity");
        }
    });

    return resistances;
}

function _updateResistance(resistances, element, newValue) {
    if (resistances[element] !== "Immunity") {
        resistances[element] = newValue;
    }
}