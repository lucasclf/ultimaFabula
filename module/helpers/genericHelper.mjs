export function extractAttrDiceValue(attr){
    return attr.match(/\d+/)[0] || 6;
}

export function captalizeFirstLetter(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function extractItem(items, type){
    return items.filter(obj => obj.type === type);
}

export function manipuleStudyCss(resultTotal, minResult, maxResult){   
    if(resultTotal < minResult || resultTotal > maxResult){
        return "study-active";
    }

    return "study-inactive";
}