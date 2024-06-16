export function hasProficiency(proficiencies){
    return Object.values(proficiencies).some(value => value === true);
}