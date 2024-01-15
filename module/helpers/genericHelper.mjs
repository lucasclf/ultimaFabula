export function extractAttrDiceValue(attr){
    return attr.match(/\d+/)[0] || 6;
}

export function captalizeFirstLetter(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function recoverQualityInfo(itemType, infoType, quality){
    console.log("CQN")
    console.log(itemType)
    console.log(infoType)
    console.log(quality)
    if(itemType === "weapon"){
        console.log(CONFIG.ULTIMAFABULA.weaponQualities)
        let recoveredQuality = CONFIG.ULTIMAFABULA.weaponQualities[quality];
        console.log(recoveredQuality)
        return recoveredQuality[infoType];
    }
}