export function extractAttrDiceValue(attr){
    return attr.match(/\d+/)[0] || 6;
}

export function captalizeFirstLetter(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}