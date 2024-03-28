export function localizeQuality(quality){
    const localizedQuality = {
        name: localize(quality.name),
        cost: localize(quality.cost),
        effect: localize(quality.effect)
    }

    return localizedQuality;
}

export function localize(key){
    return game.i18n.localize(key);
}