export function mountStatusResistances(char){
    char.status.slow = disableStatusCheck("slow", char) ? false : char.status.slow;
    char.status.weak = disableStatusCheck("weak", char) ? false : char.status.weak;
    char.status.shaken = disableStatusCheck("shaken", char) ? false : char.status.shaken;
    char.status.dazed = disableStatusCheck("dazed", char) ? false : char.status.dazed;
    char.status.enraged = disableStatusCheck("enraged", char) ? false : char.status.enraged;
    char.status.poisoned = disableStatusCheck("poisoned", char) ? false : char.status.poisoned;

}

export function disableStatusCheck(statusType, char){
    let qualities = [char.gear.weaponQuality, char.gear.armorQuality, char.gear.shieldQuality, char.gear.accessoryQuality];
    
    return qualities.some(quality => quality === `antistatus-${statusType}` || quality === "perfect-health");
}