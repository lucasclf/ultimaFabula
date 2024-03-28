import { localizeQuality } from "./localizeHelper.mjs";

export function recoverQualityInfo(itemType, infoType, quality){
    let recoveredQuality;
    let localizedQuality;

    switch(itemType){
        case "weapon":
            recoveredQuality = CONFIG.ULTIMAFABULA.weaponQualities[quality];
            localizedQuality = localizeQuality(recoveredQuality);
            return localizedQuality[infoType];
        case "armor":
            recoveredQuality = CONFIG.ULTIMAFABULA.armorQualities[quality];
            localizedQuality = localizeQuality(recoveredQuality);
            return localizedQuality[infoType];
        case "accessory":
            recoveredQuality = CONFIG.ULTIMAFABULA.accessoryQualities[quality];
            localizedQuality = localizeQuality(recoveredQuality);
            return localizedQuality[infoType];
    }
}

export function recoverQualityInfoByActor(gear){
    const { accessoryQuality, armorQuality, mainHandQuality, offHandQuality} = gear;

    const qualities = [
        _recoverQualityInfo(accessoryQuality), 
        _recoverQualityInfo(armorQuality), 
        _recoverQualityInfo(mainHandQuality), 
        _recoverQualityInfo(offHandQuality)
    ]


    return qualities;
}

export function mountDamageType(originalDamageType, qualities){

    let damageType; 
    qualities.forEach(quality =>{
        let key = String(Object.keys(quality));

        if(key.startsWith('damage-change-')){
            damageType = key.substring('damage-change-'.length);
        }
    })

    return damageType || originalDamageType;
}

function _recoverQualityInfo(qualityTitle){
    const qualitiesList = {
        ...CONFIG.ULTIMAFABULA.weaponQualities,
        ...CONFIG.ULTIMAFABULA.armorQualities,
        ...CONFIG.ULTIMAFABULA.accessoryQualities
    };

    const foundKey = Object.keys(qualitiesList).find(key => key === qualityTitle);

    const resultQuality = qualitiesList[foundKey] || qualitiesList['no-quality'];

    return { [foundKey]: resultQuality };
}
