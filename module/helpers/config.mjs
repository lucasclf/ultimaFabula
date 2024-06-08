export const FABULA_ULTIMA = {};

/**
 * The set of Ability Scores used within the system.
 * @type {Object}
 */
//Objetos da ficha
FABULA_ULTIMA.tabName = {
  attributes: 'FABULA_ULTIMA.Tabs.attributes.name',
  description: 'FABULA_ULTIMA.Tabs.description.name',
  gears: 'FABULA_ULTIMA.Tabs.gears.name',
  classes: 'FABULA_ULTIMA.Tabs.classes.name',
  abilities: 'FABULA_ULTIMA.Tabs.abilities.name',
  spells: 'FABULA_ULTIMA.Tabs.spells.name',
  actions: 'FABULA_ULTIMA.Tabs.actions.name'
};

//Recursos de personagem

FABULA_ULTIMA.resources = {
  healthPoints: 'FABULA_ULTIMA.Resources.healthPoints.long',
  manaPoints: 'FABULA_ULTIMA.Resources.manaPoints.long',
  inventoryPoints: 'FABULA_ULTIMA.Resources.inventoryPoints.long',
  crises: 'FABULA_ULTIMA.Resources.healthPoints.name'
};

//Informações na aba Attributos

FABULA_ULTIMA.resourcesAbbreviations = {
  healthPoints: 'FABULA_ULTIMA.Resources.healthPoints.abbr',
  manaPoints: 'FABULA_ULTIMA.Resources.manaPoints.abbr',
  inventoryPoints: 'FABULA_ULTIMA.Resources.inventoryPoints.abbr'
}

FABULA_ULTIMA.attributes = {
  dex: 'FABULA_ULTIMA.Attributes.Dex.long',
  ins: 'FABULA_ULTIMA.Attributes.Ins.long',
  mig: 'FABULA_ULTIMA.Attributes.Mig.long',
  wlp: 'FABULA_ULTIMA.Attributes.Wlp.long',
};

FABULA_ULTIMA.abilityAbbreviations = {
  dex: 'FABULA_ULTIMA.Attributes.Dex.abbr',
  ins: 'FABULA_ULTIMA.Attributes.Ins.abbr',
  mig: 'FABULA_ULTIMA.Attributes.Mig.abbr',
  wlp: 'FABULA_ULTIMA.Attributes.Wlp.abbr'
};

FABULA_ULTIMA.defenses = {
  physical: 'FABULA_ULTIMA.Defenses.physical.name',
  magical: 'FABULA_ULTIMA.Defenses.magical.name'
};

FABULA_ULTIMA.initiative = 'FABULA_ULTIMA.initiative.name';

//Equipamentos

FABULA_ULTIMA.weaponType = {
  'sword': 'FABULA_ULTIMA.weaponType.sword',
  'axe': 'FABULA_ULTIMA.weaponType.axe',
  'arcane': 'FABULA_ULTIMA.weaponType.arcane',
  'bow': 'FABULA_ULTIMA.weaponType.bow',
  'brawling': 'FABULA_ULTIMA.weaponType.brawling',
  'dagger': 'FABULA_ULTIMA.weaponType.dagger',
  'firearm': 'FABULA_ULTIMA.weaponType.firearm',
  'flail': 'FABULA_ULTIMA.weaponType.flail',
  'heavy': 'FABULA_ULTIMA.weaponType.heavy',
  'spear': 'FABULA_ULTIMA.weaponType.spear',
  'thrown': 'FABULA_ULTIMA.weaponType.thrown'
}

FABULA_ULTIMA.gripType = {
  'one-handed': 'FABULA_ULTIMA.gripType.one-handed',
  'two-handed': 'FABULA_ULTIMA.gripType.two-handed'
}

FABULA_ULTIMA.attackType = {
  'ranged': 'FABULA_ULTIMA.attackType.ranged',
  'melee': 'FABULA_ULTIMA.attackType.melee'
}

FABULA_ULTIMA.equipmentSlot = {
  'mainHand': 'FABULA_ULTIMA.equipmentSlot.mainHand',
  'offHand': 'FABULA_ULTIMA.equipmentSlot.offHand',
  'accessory': 'FABULA_ULTIMA.equipmentSlot.accessory'
}

//Condições
FABULA_ULTIMA.conditionsName = {
  'weak': 'FABULA_ULTIMA.basicConditions.weak.name',
  'dazed': 'FABULA_ULTIMA.basicConditions.dazed.name',
  'shaken': 'FABULA_ULTIMA.basicConditions.shaken.name',
  'slow': 'FABULA_ULTIMA.basicConditions.slow.name',
  'enraged': 'FABULA_ULTIMA.basicConditions.enraged.name',
  'poisoned': 'FABULA_ULTIMA.basicConditions.poisoned.name'
}

FABULA_ULTIMA.conditionsAttr = {
  'weak': [FABULA_ULTIMA.attributes.mig],
  'dazed': [FABULA_ULTIMA.attributes.ins],
  'shaken': [FABULA_ULTIMA.attributes.wlp],
  'slow': [FABULA_ULTIMA.attributes.dex],
  'enraged': [FABULA_ULTIMA.attributes.dex, FABULA_ULTIMA.attributes.ins],
  'poisoned': [FABULA_ULTIMA.attributes.wlp, FABULA_ULTIMA.attributes.mig]
}

//Magias
FABULA_ULTIMA.elementType = {
  'physical': 'FABULA_ULTIMA.elementType.physical', 
  'air': 'FABULA_ULTIMA.elementType.air', 
  'bolt': 'FABULA_ULTIMA.elementType.bolt', 
  'dark': 'FABULA_ULTIMA.elementType.dark', 
  'earth': 'FABULA_ULTIMA.elementType.earth', 
  'fire': 'FABULA_ULTIMA.elementType.fire', 
  'ice': 'FABULA_ULTIMA.elementType.ice', 
  'light': 'FABULA_ULTIMA.elementType.light', 
  'poison': 'FABULA_ULTIMA.elementType.poison'
}

//Utilitários

FABULA_ULTIMA.attributeDice = {
  'd6': 'D6',
  'd8': 'D8',
  'd10': 'D10',
  'd12': 'D12'
};

