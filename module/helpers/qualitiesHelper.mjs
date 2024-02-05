export function recoverQualityInfo(itemType, infoType, quality){
    console.log(itemType, infoType, quality)
    let recoveredQuality;

    switch(itemType){
        case "weapon":
            return recoveredQuality[infoType];
        case "armor":
            recoveredQuality = CONFIG.ULTIMAFABULA.armorQualities[quality];
            return recoveredQuality[infoType];
        case "accessory":
            recoveredQuality = CONFIG.ULTIMAFABULA.accessoryQualities[quality];
            console.log(recoveredQuality);
            return recoveredQuality[infoType];
    }
}