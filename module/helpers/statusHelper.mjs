export function mountStatusResistances(actor){
    const statusTypes = [
        "slow", 
        "weak", 
        "shaken", 
        "dazed", 
        "enraged", 
        "poisoned"
    ];

    let updateData = {};

    statusTypes.forEach(statusType => {
        if(shouldDisableStatusCheck(statusType, actor.system)){
            updateData[`system.status.${statusType}`] = false;
        }
    });
    actor.update(updateData);
}

export function shouldDisableStatusCheck(statusType, actor){
    const qualities = [
        actor.gear.mainHandQuality, 
        actor.gear.armorQuality, 
        actor.gear.offHandQuality, 
        actor.gear.accessoryQuality
    ];
    
    return qualities.some(quality => quality === `antistatus-${statusType}` || quality === "perfect-health");
}