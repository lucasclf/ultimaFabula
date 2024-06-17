import { enums } from "../enums/enums.mjs"; 

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
  jobs: 'FABULA_ULTIMA.Tabs.jobs.name',
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

FABULA_ULTIMA.resistancesType = {
  normal: 'normal',
  vulnerability: 'vulnerability',
  resistance: 'resistance',
  immunity: 'immunity',
  absorption: 'absorption'
}

//Equipamentos

FABULA_ULTIMA.weaponType = {
  sword: 'FABULA_ULTIMA.weaponType.sword',
  axe: 'FABULA_ULTIMA.weaponType.axe',
  arcane: 'FABULA_ULTIMA.weaponType.arcane',
  bow: 'FABULA_ULTIMA.weaponType.bow',
  brawling: 'FABULA_ULTIMA.weaponType.brawling',
  dagger: 'FABULA_ULTIMA.weaponType.dagger',
  firearm: 'FABULA_ULTIMA.weaponType.firearm',
  flail: 'FABULA_ULTIMA.weaponType.flail',
  heavy: 'FABULA_ULTIMA.weaponType.heavy',
  spear: 'FABULA_ULTIMA.weaponType.spear',
  thrown: 'FABULA_ULTIMA.weaponType.thrown'
}

FABULA_ULTIMA.gripType = {
  oneHanded: 'FABULA_ULTIMA.gripType.one-handed',
  twoHanded: 'FABULA_ULTIMA.gripType.two-handed'
}

FABULA_ULTIMA.attackType = {
  ranged: 'FABULA_ULTIMA.attackType.ranged',
  melee: 'FABULA_ULTIMA.attackType.melee'
}

FABULA_ULTIMA.equipmentSlot = {
  mainHand: 'FABULA_ULTIMA.equipmentSlot.mainHand',
  offHand: 'FABULA_ULTIMA.equipmentSlot.offHand',
  accessory: 'FABULA_ULTIMA.equipmentSlot.accessory'
}

//Condições
FABULA_ULTIMA.conditions = {
  weak: 'FABULA_ULTIMA.basicConditions.weak.name',
  dazed: 'FABULA_ULTIMA.basicConditions.dazed.name',
  shaken: 'FABULA_ULTIMA.basicConditions.shaken.name',
  slow: 'FABULA_ULTIMA.basicConditions.slow.name',
  enraged: 'FABULA_ULTIMA.basicConditions.enraged.name',
  poisoned: 'FABULA_ULTIMA.basicConditions.poisoned.name'
}

FABULA_ULTIMA.conditionsAttr = {
  weak: ['mig'],
  dazed: ['ins'],
  shaken: ['wlp'],
  slow: ['dex'],
  enraged: ['dex', 'ins'],
  poisoned: ['wlp', 'mig']
}

//Magias
FABULA_ULTIMA.elementType = {
  physical: 'FABULA_ULTIMA.elementType.physical', 
  air: 'FABULA_ULTIMA.elementType.air', 
  bolt: 'FABULA_ULTIMA.elementType.bolt', 
  dark: 'FABULA_ULTIMA.elementType.dark', 
  earth: 'FABULA_ULTIMA.elementType.earth', 
  fire: 'FABULA_ULTIMA.elementType.fire', 
  ice: 'FABULA_ULTIMA.elementType.ice', 
  light: 'FABULA_ULTIMA.elementType.light', 
  poison: 'FABULA_ULTIMA.elementType.poison'
}

//jobs
FABULA_ULTIMA.jobs = {
  arcanist:  {name: 'FABULA_ULTIMA.jobs.arcanist.name', caster: true, casterAttr: 'special', firstAttr: 'ins', secondAttr: 'mig'},
  chimerist: {name: 'FABULA_ULTIMA.jobs.chimerist.name', caster: true, casterAttr: 'ins'},
  elementalist: {name: 'FABULA_ULTIMA.jobs.elementalist.name', caster: true, casterAttr: 'ins'},
  entropist: {name: 'FABULA_ULTIMA.jobs.entropist.name', caster: true, casterAttr: 'ins'},
  spiritist: {name: 'FABULA_ULTIMA.jobs.spiritist.name', caster: true, casterAttr: 'ins'},
  necromancer: {name: 'FABULA_ULTIMA.jobs.necromancer.name', caster: false, casterAttr: null},
  darkblade: {name: 'FABULA_ULTIMA.jobs.darkblade.name', caster: false, casterAttr: null},
  fury: {name: 'FABULA_ULTIMA.jobs.fury.name', caster: false, casterAttr: null},
  guardian: {name: 'FABULA_ULTIMA.jobs.guardian.name', caster: false, casterAttr: null},
  loremaster: {name: 'FABULA_ULTIMA.jobs.loremaster.name', caster: false, casterAttr: null},
  orator: {name: 'FABULA_ULTIMA.jobs.orator.name', caster: false, casterAttr: null},
  rogue: {name: 'FABULA_ULTIMA.jobs.rogue.name', caster: false, casterAttr: null},
  sharpshooter: {name: 'FABULA_ULTIMA.jobs.sharpshooter.name', caster: false, casterAttr: null},
  tinkerer: {name: 'FABULA_ULTIMA.jobs.tinkerer.name', caster: false, casterAttr: null},
  wayfarer: {name: 'FABULA_ULTIMA.jobs.wayfarer.name', caster: false, casterAttr: null},
  weaponmaster: {name: 'FABULA_ULTIMA.jobs.weaponmaster.name', caster: false, casterAttr: null},
  chanter: {name: 'FABULA_ULTIMA.jobs.chanter.name', caster: false, casterAttr: null},
  commander: {name: 'FABULA_ULTIMA.jobs.commander.name', caster: false, casterAttr: null},
  dancer: {name: 'FABULA_ULTIMA.jobs.dancer.name', caster: false, casterAttr: null},
  symbolist: {name: 'FABULA_ULTIMA.jobs.symbolist.name', caster: false, casterAttr: null},
  ace: {name: 'FABULA_ULTIMA.jobs.ace.name', caster: false, casterAttr: null}
}

FABULA_ULTIMA.jobsBenefits = {
  arcanist: {mp: 5, hp: 0, ip: 0, ritual: false, projects: false},
  chimerist: {mp: 5, hp: 0, ip: 0, ritual: true, projects: false},
  elementalist: {mp: 5, hp: 0, ip: 0, ritual: true, projects: false},
  entropist: {mp: 5, hp: 0, ip: 0, ritual: true, projects: false},
  spiritist: {mp: 5, hp: 0, ip: 0, ritual: true, projects: false},
  necromancer: {mp: 0, hp: 0, ip: 0, ritual: false, projects: false},
  darkblade: {mp: 0, hp: 5, ip: 0, ritual: false, projects: false},
  fury: {mp: 0, hp: 5, ip: 0, ritual: false, projects: false},
  guardian: {mp: 0, hp: 5, ip: 0, ritual: false, projects: false},
  loremaster: {mp: 5, hp: 0, ip: 0, ritual: false, projects: false},
  orator: {mp: 5, hp: 0, ip: 0, ritual: false, projects: false},
  rogue: {mp: 0, hp: 0, ip: 2, ritual: false, projects: false},
  sharpshooter: {mp: 0, hp: 5, ip: 0, ritual: false, projects: false},
  tinkerer: {mp: 0, hp: 0, ip: 2, ritual: false, projects: true},
  wayfarer: {mp: 0, hp: 0, ip: 2, ritual: false, projects: false},
  weaponmaster:  {mp: 0, hp: 5, ip: 0, ritual: false, projects: false},
  chanter: {mp: 5, hp: 0, ip: 0, ritual: false, projects: false},
  commander: {mp: 0, hp: 5, ip: 0, ritual: false, projects: false},
  dancer: {mp: 0, hp: 0, ip: 0, ritual: false, projects: false},
  symbolist: {mp: 0, hp: 0, ip: 2, ritual: false, projects: false},
  ace: {mp: 0, hp: 0, ip: 0, ritual: false, projects: false}
}

FABULA_ULTIMA.jobsMartialProficiency = {
  arcanist: {armor: false, shield: false, ranged: false, melee: false},
  chimerist: {armor: false, shield: false, ranged: false, melee: false},
  elementalist: {armor: false, shield: false, ranged: false, melee: false},
  entropist: {armor: false, shield: false, ranged: false, melee: false},
  spiritist: {armor: false, shield: false, ranged: false, melee: false},
  necromancer: {armor: false, shield: false, ranged: false, melee: false},
  darkblade: {armor: true, shield: false, ranged: false, melee: true},
  fury: {armor: true, shield: false, ranged: false, melee: true},
  guardian: {armor: true, shield: true, ranged: false, melee: false},
  loremaster: {armor: false, shield: false, ranged: false, melee: false},
  orator: {armor: false, shield: false, ranged: false, melee: false},
  rogue: {armor: false, shield: false, ranged: false, melee: false},
  sharpshooter: {armor: false, shield: true, ranged: true, melee: false},
  tinkerer: {armor: false, shield: false, ranged: false, melee: false},
  wayfarer: {armor: false, shield: false, ranged: false, melee: false},
  weaponmaster: {armor: false, shield: true, ranged: false, melee: true},
  chanter: {armor: false, shield: false, ranged: false, melee: false},
  commander: {armor: false, shield: false, ranged: true, melee: true},
  dancer: {armor: false, shield: false, ranged: false, melee: false},
  symbolist: {armor: false, shield: false, ranged: false, melee: false},
  ace: {armor: false, shield: false, ranged: false, melee: false}
}

FABULA_ULTIMA.jobType = {
  master: 'mastered',
  trained: 'trained',
  untrained: 'untrained'
}

FABULA_ULTIMA.jobTypeName = {
  master: 'FABULA_ULTIMA.jobTypeName.mastered',
  trained: 'FABULA_ULTIMA.jobTypeName.trained',
  untrained: 'FABULA_ULTIMA.jobTypeName.untrained'
}

//UI
FABULA_ULTIMA.uiHeader = {
  conditions: 'FABULA_ULTIMA.uiHeader.conditions',
  resistances: 'FABULA_ULTIMA.uiHeader.resistances',
  resources: 'FABULA_ULTIMA.uiHeader.resources',
  magic: 'FABULA_ULTIMA.uiHeader.caster',
  martial: 'FABULA_ULTIMA.uiHeader.martial',
  others: 'FABULA_ULTIMA.uiHeader.others',
  proficiency: 'FABULA_ULTIMA.uiHeader.proficiency',
  cost: 'FABULA_ULTIMA.uiHeader.cost',
  qualification: 'FABULA_ULTIMA.uiHeader.qualification',
  quality: 'FABULA_ULTIMA.uiHeader.quality',
  attack: 'FABULA_ULTIMA.uiHeader.attack',
  damage: 'FABULA_ULTIMA.uiHeader.damage'
}

FABULA_ULTIMA.uiJob = {
  freeBenefits: 'FABULA_ULTIMA.uiJob.freeBenefits'
}

FABULA_ULTIMA.uiBenefits = {
  manaPoints: 'FABULA_ULTIMA.uiBenefits.manaBonus',
  inventoryPoints: 'FABULA_ULTIMA.uiBenefits.inventoryBonus',
  healthPoints: 'FABULA_ULTIMA.uiBenefits.healthBonus',
  ritual: 'FABULA_ULTIMA.uiBenefits.canPerformRitual',
  project: 'FABULA_ULTIMA.uiBenefits.canInitiateProjects',
  caster: 'FABULA_ULTIMA.uiBenefits.caster',
  attr: 'FABULA_ULTIMA.uiBenefits.attr'
}

FABULA_ULTIMA.conditionSymbol = {
  weak: '&#128567',
  dazed: '&#128565',
  shaken: '&#x1F62C',
  slow: '&#128012',
  enraged: '&#129324',
  poisoned: '&#129326'
}

FABULA_ULTIMA.resistancesName = {
  air: 'FABULA_ULTIMA.resistancesName.air',
  bolt: 'FABULA_ULTIMA.resistancesName.bolt',
  dark: 'FABULA_ULTIMA.resistancesName.dark',
  earth: 'FABULA_ULTIMA.resistancesName.earth',
  fire: 'FABULA_ULTIMA.resistancesName.fire',
  ice: 'FABULA_ULTIMA.resistancesName.ice',
  light: 'FABULA_ULTIMA.resistancesName.light',
  poison: 'FABULA_ULTIMA.resistancesName.poison',
  physical: 'FABULA_ULTIMA.resistancesName.physical'
}

FABULA_ULTIMA.jobItemBenefits = {
  caster: 'FABULA_ULTIMA.jobItemBenefits.caster',
  ritual: 'FABULA_ULTIMA.jobItemBenefits.ritual',
  attribute: 'FABULA_ULTIMA.jobItemBenefits.attribute',
  project: 'FABULA_ULTIMA.jobItemBenefits.project'
}

FABULA_ULTIMA.martialGear = {
  armor: 'FABULA_ULTIMA.martialGear.armor',
  shield: 'FABULA_ULTIMA.martialGear.shield',
  ranged: 'FABULA_ULTIMA.martialGear.ranged',
  melee: 'FABULA_ULTIMA.martialGear.melee'
}

//Utilitários
FABULA_ULTIMA.attributeDice = {
  d6: 'd6',
  d8: 'd8',
  d10: 'd10',
  d12: 'd12'
};

FABULA_ULTIMA.enums = enums;