export function recoverAbilitiesByJob(abilityFlag, abilities){
    if(abilityFlag === CONFIG.FABULA_ULTIMA.enums.utils.ALL){
        return abilities;
    }

    const filteredAbilities = abilities.filter(ability => ability.system.job === abilityFlag);
    
    return filteredAbilities;
}

export function hasDualShield(abilities){

    const filteredAbilities = abilities.filter(ability => ability.system.booleanBonus.dualShield === true)
    return filteredAbilities.length > 0;
}