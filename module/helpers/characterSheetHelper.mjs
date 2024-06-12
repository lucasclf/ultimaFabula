export function insertIconIfAttrLowered(attr, conditions){
  var iconString = "";
  const filteredKeys = Object.keys(conditions)
  .filter(key => conditions[key] === true && _filterAttrCondition(attr, key));

  filteredKeys.forEach(key => {
    const conditionSymbol = CONFIG.FABULA_ULTIMA.conditionSymbol[key];
    iconString += conditionSymbol;
  })

  return iconString;
}

function _filterAttrCondition(attr, trueCondition){
    return CONFIG.FABULA_ULTIMA.conditionsAttr[trueCondition].includes(attr);
}