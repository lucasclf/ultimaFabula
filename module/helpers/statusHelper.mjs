export function mountStatusResistances(char){
    const statusTypes = ["slow", "weak", "shaken", "dazed", "enraged", "poisoned"];

    statusTypes.forEach(statusType => {
        if(disableStatusCheck(statusType, char)){
            char.status[statusType] = false;
        }
    });
}

export function disableStatusCheck(statusType, char){
    let qualities = [char.gear.mainHandQuality, char.gear.armorQuality, char.gear.offHandQuality, char.gear.accessoryQuality];
    
    return qualities.some(quality => quality === `antistatus-${statusType}` || quality === "perfect-health");
}