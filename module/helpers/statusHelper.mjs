export function mountStatusResistances(actor){
    const statusTypes = ["slow", "weak", "shaken", "dazed", "enraged", "poisoned"];
    let updateData = {};

    statusTypes.forEach(statusType => {
        if(disableStatusCheck(statusType, actor.system)){
            updateData[`system.status.${statusType}`] = false;
        }
    });
    actor.update(updateData);
}

export function disableStatusCheck(statusType, char){
    let qualities = [char.gear.mainHandQuality, char.gear.armorQuality, char.gear.offHandQuality, char.gear.accessoryQuality];
    
    return qualities.some(quality => quality === `antistatus-${statusType}` || quality === "perfect-health");
}