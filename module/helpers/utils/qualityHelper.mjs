export function recoverQualityName(qualityName){
    const quality = CONFIG.FABULA_ULTIMA.qualities[qualityName];
    return game.i18n.localize(quality.name);
}

export function recoverQualityInfo(qualityName){
    return CONFIG.FABULA_ULTIMA.qualities[qualityName];
}