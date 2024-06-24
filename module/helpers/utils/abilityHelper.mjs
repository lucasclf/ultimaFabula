export function recoverAbilitiesByJob(abilityFlag, abilities){

    if(abilityFlag === CONFIG.FABULA_ULTIMA.enums.utils.ALL){
        return abilities;
    }
    const filteredAbilities = abilities.filter(ability => ability.system.job === abilityFlag);
    return filteredAbilities;
}