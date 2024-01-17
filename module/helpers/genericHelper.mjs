export function extractAttrDiceValue(attr){
    return attr.match(/\d+/)[0] || 6;
}

export function captalizeFirstLetter(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function recoverQualityInfo(itemType, infoType, quality){
    let recoveredQuality;

    switch(itemType){
        case "weapon":
            recoveredQuality = CONFIG.ULTIMAFABULA.weaponQualities[quality];
            return recoveredQuality[infoType];
        case "armor":
            recoveredQuality = CONFIG.ULTIMAFABULA.armorQualities[quality];
            return recoveredQuality[infoType];
        case "accessory":
            recoveredQuality = CONFIG.ULTIMAFABULA.accessoryQualities[quality];
            return recoveredQuality[infoType];
    }
}