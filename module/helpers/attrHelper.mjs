export function mountActualAttributes(actor){
    let updateData = {}
    updateData[`system.attributes.actual`] = _calcAttr(actor.system.attributes.base, actor.system.status);
    actor.update(updateData);
}

function _calcAttr(attr, status){
    let attrCopy = JSON.parse(JSON.stringify(attr));

    if(status.dazed){
        attrCopy.insight = _decreaseAttr(attrCopy.insight);
    }

    if(status.shaken){
        attrCopy.willpower = _decreaseAttr(attrCopy.willpower);
    }

    if(status.slow){
        attrCopy.dexterity = _decreaseAttr(attrCopy.dexterity);
    }

    if(status.weak){
        attrCopy.might = _decreaseAttr(attrCopy.might);

    }

    if(status.enraged){
        attrCopy.dexterity = _decreaseAttr(attrCopy.dexterity);
        attrCopy.insight = _decreaseAttr(attrCopy.insight);
    }

    if(status.poisoned){
        attrCopy.might = _decreaseAttr(attrCopy.might);
        attrCopy.willpower = _decreaseAttr(attrCopy.willpower);
    }

    return attrCopy;
}

function _decreaseAttr(attr){
    const decreaseMap = {
        "d12": "d10",
        "d10": "d8",
        "d8": "d6",
        "d6": "d6"
    };
    return decreaseMap[attr] || attr;
}