export function extractAttrDiceValue(attr){
    return attr.match(/\d+/)[0] || 6;
}