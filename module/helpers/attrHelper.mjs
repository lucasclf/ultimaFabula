import { ULTIMAFABULA } from "./config.mjs";
import { localize } from "./localizeHelper.mjs";

export function mountActualAttributes(actor){
    let updateData = {}
    updateData[`system.attributes.actual`] = _calcAttr(actor.system.attributes.base, actor.system.status);

    actor.update(updateData);
}

export function recoverAttrNameByKey(key){
    return localize(ULTIMAFABULA.attributes[key]);
}

function _calcAttr(attr, status){
    let attributesCopy = JSON.parse(JSON.stringify(attr));

    const affectedAttributes = {
        dazed: ['insight'],
        shaken: ['willpower'],
        slow: ['dexterity'],
        weak: ['might'],
        enraged: ['dexterity', 'insight'],
        poisoned: ['might', 'willpower']
    };

    for (const effect in affectedAttributes) {
        if (status[effect]) {
            affectedAttributes[effect].forEach(attribute => {
                attributesCopy[attribute] = _decreaseAttr(attributesCopy[attribute]);
            });
        }
    }

    return attributesCopy;
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