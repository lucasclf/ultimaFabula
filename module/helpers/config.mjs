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

FABULA_ULTIMA.weaponCategory = {
  sword: 'FABULA_ULTIMA.weaponType.sword',
  axe: 'FABULA_ULTIMA.weaponType.axe',
  arcane: 'FABULA_ULTIMA.weaponType.arcane',
  bow: 'FABULA_ULTIMA.weaponType.bow',
  brawler: 'FABULA_ULTIMA.weaponType.brawling',
  dagger: 'FABULA_ULTIMA.weaponType.dagger',
  firearm: 'FABULA_ULTIMA.weaponType.firearm',
  flail: 'FABULA_ULTIMA.weaponType.flail',
  heavy: 'FABULA_ULTIMA.weaponType.heavy',
  spear: 'FABULA_ULTIMA.weaponType.spear',
  throw: 'FABULA_ULTIMA.weaponType.thrown'
}

FABULA_ULTIMA.weaponGrip = {
  one_hand: 'FABULA_ULTIMA.gripType.one_handed',
  two_hand: 'FABULA_ULTIMA.gripType.two_handed'
}

FABULA_ULTIMA.weaponType = {
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

//Equipamentos
FABULA_ULTIMA.uiGearHeader = {
  weapons: 'FABULA_ULTIMA.uiGearHeader.weapons',
  name: 'FABULA_ULTIMA.uiGearHeader.name',
  accuracy: 'FABULA_ULTIMA.uiGearHeader.accuracy',
  damage: 'FABULA_ULTIMA.uiGearHeader.damage',
  element: 'FABULA_ULTIMA.uiGearHeader.element',
  type: 'FABULA_ULTIMA.uiGearHeader.type',
  equipped: 'FABULA_ULTIMA.uiGearHeader.equipped',
  addItem: 'FABULA_ULTIMA.uiGearHeader.addItem'
};

FABULA_ULTIMA.qualities = {
  'no_quality': {name: 'FABULA_ULTIMA.qualities.no_quality.name', cost: 'FABULA_ULTIMA.qualities.no_quality.cost', effect: 'FABULA_ULTIMA.qualities.no_quality.effect'},
  'magical': {name: 'FABULA_ULTIMA.qualities.magical.name', cost: 'FABULA_ULTIMA.qualities.magical.cost', effect: 'FABULA_ULTIMA.qualities.magical.effect'},
  'hunter_beasts': {name: 'FABULA_ULTIMA.qualities.hunter_beasts.name', cost: 'FABULA_ULTIMA.qualities.hunter_beasts.cost', effect: 'FABULA_ULTIMA.qualities.hunter_beasts.effect'},
  'hunter_constructs': {name: 'FABULA_ULTIMA.qualities.hunter_constructs.name', cost: 'FABULA_ULTIMA.qualities.hunter_constructs.cost', effect: 'FABULA_ULTIMA.qualities.hunter_constructs.effect'},
  'hunter_demons': {name: 'FABULA_ULTIMA.qualities.hunter_demons.name', cost: 'FABULA_ULTIMA.qualities.hunter_demons.cost', effect: 'FABULA_ULTIMA.qualities.hunter_demons.effect'},
  'hunter_elementals': {name: 'FABULA_ULTIMA.qualities.hunter_elementals.name', cost: 'FABULA_ULTIMA.qualities.hunter_elementals.cost', effect: 'FABULA_ULTIMA.qualities.hunter_elementals.effect'},
  'hunter_humanoids': {name: 'FABULA_ULTIMA.qualities.hunter_humanoids.name', cost: 'FABULA_ULTIMA.qualities.hunter_humanoids.cost', effect: 'FABULA_ULTIMA.qualities.hunter_humanoids.effect'},
  'hunter_monsters': {name: 'FABULA_ULTIMA.qualities.hunter_monsters.name', cost: 'FABULA_ULTIMA.qualities.hunter_monsters.cost', effect: 'FABULA_ULTIMA.qualities.hunter_monsters.effect'},
  'hunter_plants': {name: 'FABULA_ULTIMA.qualities.hunter_plants.name', cost: 'FABULA_ULTIMA.qualities.hunter_plants.cost', effect: 'FABULA_ULTIMA.qualities.hunter_plants.effect'},
  'hunter_undeads': {name: 'FABULA_ULTIMA.qualities.hunter_undeads.name', cost: 'FABULA_ULTIMA.qualities.hunter_undeads.cost', effect: 'FABULA_ULTIMA.qualities.hunter_undeads.effect'},
  'piercing': {name: 'FABULA_ULTIMA.qualities.piercing.name', cost: 'FABULA_ULTIMA.qualities.piercing.cost', effect: 'FABULA_ULTIMA.qualities.piercing.effect'},
  'dual_hunter_beasts_constructs': {name: 'FABULA_ULTIMA.qualities.dual_hunter_beasts_constructs.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_beasts_constructs.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_beasts_constructs.effect'},
  'dual_hunter_beasts_demons': {name: 'FABULA_ULTIMA.qualities.dual_hunter_beasts_demons.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_beasts_demons.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_beasts_demons.effect'},
  'dual_hunter_beasts_elementals': {name: 'FABULA_ULTIMA.qualities.dual_hunter_beasts_elementals.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_beasts_elementals.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_beasts_elementals.effect'},
  'dual_hunter_beasts_humanoids': {name: 'FABULA_ULTIMA.qualities.dual_hunter_beasts_humanoids.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_beasts_humanoids.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_beasts_humanoids.effect'},
  'dual_hunter_beasts_monsters': {name: 'FABULA_ULTIMA.qualities.dual_hunter_beasts_monsters.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_beasts_monsters.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_beasts_monsters.effect'},
  'dual_hunter_beasts_plants': {name: 'FABULA_ULTIMA.qualities.dual_hunter_beasts_plants.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_beasts_plants.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_beasts_plants.effect'},
  'dual_hunter_beasts_undeads': {name: 'FABULA_ULTIMA.qualities.dual_hunter_beasts_undeads.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_beasts_undeads.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_beasts_undeads.effect'},
  'dual_hunter_constructs_demons': {name: 'FABULA_ULTIMA.qualities.dual_hunter_constructs_demons.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_constructs_demons.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_constructs_demons.effect'},
  'dual_hunter_constructs_elementals': {name: 'FABULA_ULTIMA.qualities.dual_hunter_constructs_elementals.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_constructs_elementals.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_constructs_elementals.effect'},
  'dual_hunter_constructs_humanoids': {name: 'FABULA_ULTIMA.qualities.dual_hunter_constructs_humanoids.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_constructs_humanoids.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_constructs_humanoids.effect'},
  'dual_hunter_constructs_monsters': {name: 'FABULA_ULTIMA.qualities.dual_hunter_constructs_monsters.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_constructs_monsters.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_constructs_monsters.effect'},
  'dual_hunter_constructs_plants': {name: 'FABULA_ULTIMA.qualities.dual_hunter_constructs_plants.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_constructs_plants.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_constructs_plants.effect'},
  'dual_hunter_constructs_undeads': {name: 'FABULA_ULTIMA.qualities.dual_hunter_constructs_undeads.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_constructs_undeads.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_constructs_undeads.effect'},
  'dual_hunter_demons_elementals': {name: 'FABULA_ULTIMA.qualities.dual_hunter_demons_elementals.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_demons_elementals.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_demons_elementals.effect'},
  'dual_hunter_demons_humanoids': {name: 'FABULA_ULTIMA.qualities.dual_hunter_demons_humanoids.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_demons_humanoids.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_demons_humanoids.effect'},
  'dual_hunter_demons_monsters': {name: 'FABULA_ULTIMA.qualities.dual_hunter_demons_monsters.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_demons_monsters.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_demons_monsters.effect'},
  'dual_hunter_demons_plants': {name: 'FABULA_ULTIMA.qualities.dual_hunter_demons_plants.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_demons_plants.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_demons_plants.effect'},
  'dual_hunter_demons_undeads': {name: 'FABULA_ULTIMA.qualities.dual_hunter_demons_undeads.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_demons_undeads.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_demons_undeads.effect'},
  'dual_hunter_elementals_humanoids': {name: 'FABULA_ULTIMA.qualities.dual_hunter_elementals_humanoids.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_elementals_humanoids.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_elementals_humanoids.effect'},
  'dual_hunter_elementals_monsters': {name: 'FABULA_ULTIMA.qualities.dual_hunter_elementals_monsters.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_elementals_monsters.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_elementals_monsters.effect'},
  'dual_hunter_elementals_plants': {name: 'FABULA_ULTIMA.qualities.dual_hunter_elementals_plants.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_elementals_plants.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_elementals_plants.effect'},
  'dual_hunter_elementals_undeads': {name: 'FABULA_ULTIMA.qualities.dual_hunter_elementals_undeads.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_elementals_undeads.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_elementals_undeads.effect'},
  'dual_hunter_humanoids_monsters': {name: 'FABULA_ULTIMA.qualities.dual_hunter_humanoids_monsters.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_humanoids_monsters.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_humanoids_monsters.effect'},
  'dual_hunter_humanoids_plants': {name: 'FABULA_ULTIMA.qualities.dual_hunter_humanoids_plants.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_humanoids_plants.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_humanoids_plants.effect'},
  'dual_hunter_humanoids_undeads': {name: 'FABULA_ULTIMA.qualities.dual_hunter_humanoids_undeads.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_humanoids_undeads.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_humanoids_undeads.effect'},
  'dual_hunter_monsters_plants': {name: 'FABULA_ULTIMA.qualities.dual_hunter_monsters_plants.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_monsters_plants.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_monsters_plants.effect'},
  'dual_hunter_monsters_undeads': {name: 'FABULA_ULTIMA.qualities.dual_hunter_monsters_undeads.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_monsters_undeads.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_monsters_undeads.effect'},
  'dual_hunter_plants_undeads': {name: 'FABULA_ULTIMA.qualities.dual_hunter_plants_undeads.name', cost: 'FABULA_ULTIMA.qualities.dual_hunter_plants_undeads.cost', effect: 'FABULA_ULTIMA.qualities.dual_hunter_plants_undeads.effect'},
  'multi': {name: 'FABULA_ULTIMA.qualities.multi.name', cost: 'FABULA_ULTIMA.qualities.multi.cost', effect: 'FABULA_ULTIMA.qualities.multi.effect'},
  'status_dazed': {name: 'FABULA_ULTIMA.qualities.status_dazed.name', cost: 'FABULA_ULTIMA.qualities.status_dazed.cost', effect: 'FABULA_ULTIMA.qualities.status_dazed.effect'},
  'status_shaken': {name: 'FABULA_ULTIMA.qualities.status_shaken.name', cost: 'FABULA_ULTIMA.qualities.status_shaken.cost', effect: 'FABULA_ULTIMA.qualities.status_shaken.effect'},
  'status_slow': {name: 'FABULA_ULTIMA.qualities.status_slow.name', cost: 'FABULA_ULTIMA.qualities.status_slow.cost', effect: 'FABULA_ULTIMA.qualities.status_slow.effect'},
  'status_weak': {name: 'FABULA_ULTIMA.qualities.status_weak.name', cost: 'FABULA_ULTIMA.qualities.status_weak.cost', effect: 'FABULA_ULTIMA.qualities.status_weak.effect'},
  'status_enraged': {name: 'FABULA_ULTIMA.qualities.status_enraged.name', cost: 'FABULA_ULTIMA.qualities.status_enraged.cost', effect: 'FABULA_ULTIMA.qualities.status_enraged.effect'},
  'status_poisoned': {name: 'FABULA_ULTIMA.qualities.status_poisoned.name', cost: 'FABULA_ULTIMA.qualities.status_poisoned.cost', effect: 'FABULA_ULTIMA.qualities.status_poisoned.effect'},
  'antistatus_dazed': {name: 'FABULA_ULTIMA.qualities.antistatus_dazed.name', cost: 'FABULA_ULTIMA.qualities.antistatus_dazed.cost', effect: 'FABULA_ULTIMA.qualities.antistatus_dazed.effect'},
  'antistatus_enraged': {name: 'FABULA_ULTIMA.qualities.antistatus_enraged.name', cost: 'FABULA_ULTIMA.qualities.antistatus_enraged.cost', effect: 'FABULA_ULTIMA.qualities.antistatus_enraged.effect'},
  'antistatus_poisoned': {name: 'FABULA_ULTIMA.qualities.antistatus_poisoned.name', cost: 'FABULA_ULTIMA.qualities.antistatus_poisoned.cost', effect: 'FABULA_ULTIMA.qualities.antistatus_poisoned.effect'},
  'antistatus_shaken': {name: 'FABULA_ULTIMA.qualities.antistatus_shaken.name', cost: 'FABULA_ULTIMA.qualities.antistatus_shaken.cost', effect: 'FABULA_ULTIMA.qualities.antistatus_shaken.effect'},
  'antistatus_slow': {name: 'FABULA_ULTIMA.qualities.antistatus_slow.name', cost: 'FABULA_ULTIMA.qualities.antistatus_slow.cost', effect: 'FABULA_ULTIMA.qualities.antistatus_slow.effect'},
  'antistatus_weak': {name: 'FABULA_ULTIMA.qualities.antistatus_weak.name', cost: 'FABULA_ULTIMA.qualities.antistatus_weak.cost', effect: 'FABULA_ULTIMA.qualities.antistatus_weak.effect'},
  'resistance_air': {name: 'FABULA_ULTIMA.qualities.resistance_air.name', cost: 'FABULA_ULTIMA.qualities.resistance_air.cost', effect: 'FABULA_ULTIMA.qualities.resistance_air.effect'},
  'resistance_bolt': {name: 'FABULA_ULTIMA.qualities.resistance_bolt.name', cost: 'FABULA_ULTIMA.qualities.resistance_bolt.cost', effect: 'FABULA_ULTIMA.qualities.resistance_bolt.effect'},
  'resistance_dark': {name: 'FABULA_ULTIMA.qualities.resistance_dark.name', cost: 'FABULA_ULTIMA.qualities.resistance_dark.cost', effect: 'FABULA_ULTIMA.qualities.resistance_dark.effect'},
  'resistance_earth': {name: 'FABULA_ULTIMA.qualities.resistance_earth.name', cost: 'FABULA_ULTIMA.qualities.resistance_earth.cost', effect: 'FABULA_ULTIMA.qualities.resistance_earth.effect'},
  'resistance_fire': {name: 'FABULA_ULTIMA.qualities.resistance_fire.name', cost: 'FABULA_ULTIMA.qualities.resistance_fire.cost', effect: 'FABULA_ULTIMA.qualities.resistance_fire.effect'},
  'resistance_ice': {name: 'FABULA_ULTIMA.qualities.resistance_ice.name', cost: 'FABULA_ULTIMA.qualities.resistance_ice.cost', effect: 'FABULA_ULTIMA.qualities.resistance_ice.effect'},
  'resistance_light': {name: 'FABULA_ULTIMA.qualities.resistance_light.name', cost: 'FABULA_ULTIMA.qualities.resistance_light.cost', effect: 'FABULA_ULTIMA.qualities.resistance_light.effect'},
  'resistance_poison': {name: 'FABULA_ULTIMA.qualities.resistance_poison.name', cost: 'FABULA_ULTIMA.qualities.resistance_poison.cost', effect: 'FABULA_ULTIMA.qualities.resistance_poison.effect'},
  'amulet': {name: 'FABULA_ULTIMA.qualities.amulet.name', cost: 'FABULA_ULTIMA.qualities.amulet.cost', effect: 'FABULA_ULTIMA.qualities.amulet.effect'},
  'bulwark': {name: 'FABULA_ULTIMA.qualities.bulwark.name', cost: 'FABULA_ULTIMA.qualities.bulwark.cost', effect: 'FABULA_ULTIMA.qualities.bulwark.effect'},
  'dual_resistance_air_bolt': {name: 'FABULA_ULTIMA.qualities.dual_resistance_air_bolt.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_air_bolt.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_air_bolt.effect'},
  'dual_resistance_air_dark': {name: 'FABULA_ULTIMA.qualities.dual_resistance_air_dark.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_air_dark.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_air_dark.effect'},
  'dual_resistance_air_earth': {name: 'FABULA_ULTIMA.qualities.dual_resistance_air_earth.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_air_earth.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_air_earth.effect'},
  'dual_resistance_air_fire': {name: 'FABULA_ULTIMA.qualities.dual_resistance_air_fire.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_air_fire.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_air_fire.effect'},
  'dual_resistance_air_ice': {name: 'FABULA_ULTIMA.qualities.dual_resistance_air_ice.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_air_ice.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_air_ice.effect'},
  'dual_resistance_air_light': {name: 'FABULA_ULTIMA.qualities.dual_resistance_air_light.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_air_light.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_air_light.effect'},
  'dual_resistance_air_poison': {name: 'FABULA_ULTIMA.qualities.dual_resistance_air_poison.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_air_poison.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_air_poison.effect'},
  'dual_resistance_bolt_dark': {name: 'FABULA_ULTIMA.qualities.dual_resistance_bolt_dark.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_bolt_dark.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_bolt_dark.effect'},
  'dual_resistance_bolt_earth': {name: 'FABULA_ULTIMA.qualities.dual_resistance_bolt_earth.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_bolt_earth.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_bolt_earth.effect'},
  'dual_resistance_bolt_fire': {name: 'FABULA_ULTIMA.qualities.dual_resistance_bolt_fire.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_bolt_fire.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_bolt_fire.effect'},
  'dual_resistance_bolt_ice': {name: 'FABULA_ULTIMA.qualities.dual_resistance_bolt_ice.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_bolt_ice.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_bolt_ice.effect'},
  'dual_resistance_bolt_light': {name: 'FABULA_ULTIMA.qualities.dual_resistance_bolt_light.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_bolt_light.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_bolt_light.effect'},
  'dual_resistance_bolt_poison': {name: 'FABULA_ULTIMA.qualities.dual_resistance_bolt_poison.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_bolt_poison.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_bolt_poison.effect'},
  'dual_resistance_dark_earth': {name: 'FABULA_ULTIMA.qualities.dual_resistance_dark_earth.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_dark_earth.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_dark_earth.effect'},
  'dual_resistance_dark_fire': {name: 'FABULA_ULTIMA.qualities.dual_resistance_dark_fire.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_dark_fire.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_dark_fire.effect'},
  'dual_resistance_dark_ice': {name: 'FABULA_ULTIMA.qualities.dual_resistance_dark_ice.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_dark_ice.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_dark_ice.effect'},
  'dual_resistance_dark_light': {name: 'FABULA_ULTIMA.qualities.dual_resistance_dark_light.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_dark_light.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_dark_light.effect'},
  'dual_resistance_dark_poison': {name: 'FABULA_ULTIMA.qualities.dual_resistance_dark_poison.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_dark_poison.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_dark_poison.effect'},
  'dual_resistance_earth_fire': {name: 'FABULA_ULTIMA.qualities.dual_resistance_earth_fire.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_earth_fire.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_earth_fire.effect'},
  'dual_resistance_earth_ice': {name: 'FABULA_ULTIMA.qualities.dual_resistance_earth_ice.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_earth_ice.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_earth_ice.effect'},
  'dual_resistance_earth_light': {name: 'FABULA_ULTIMA.qualities.dual_resistance_earth_light.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_earth_light.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_earth_light.effect'},
  'dual_resistance_earth_poison': {name: 'FABULA_ULTIMA.qualities.dual_resistance_earth_poison.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_earth_poison.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_earth_poison.effect'},
  'dual_resistance_fire_ice': {name: 'FABULA_ULTIMA.qualities.dual_resistance_fire_ice.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_fire_ice.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_fire_ice.effect'},
  'dual_resistance_fire_light': {name: 'FABULA_ULTIMA.qualities.dual_resistance_fire_light.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_fire_light.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_fire_light.effect'},
  'dual_resistance_fire_poison': {name: 'FABULA_ULTIMA.qualities.dual_resistance_fire_poison.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_fire_poison.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_fire_poison.effect'},
  'dual_resistance_ice_light': {name: 'FABULA_ULTIMA.qualities.dual_resistance_ice_light.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_ice_light.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_ice_light.effect'},
  'dual_resistance_ice_poison': {name: 'FABULA_ULTIMA.qualities.dual_resistance_ice_poison.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_ice_poison.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_ice_poison.effect'},
  'dual_resistance_light_poison': {name: 'FABULA_ULTIMA.qualities.dual_resistance_light_poison.name', cost: 'FABULA_ULTIMA.qualities.dual_resistance_light_poison.cost', effect: 'FABULA_ULTIMA.qualities.dual_resistance_light_poison.effect'},
  'swordbreaker': {name: 'FABULA_ULTIMA.qualities.swordbreaker.name', cost: 'FABULA_ULTIMA.qualities.swordbreaker.cost', effect: 'FABULA_ULTIMA.qualities.swordbreaker.effect'},
  'immunity_air': {name: 'FABULA_ULTIMA.qualities.immunity_air.name', cost: 'FABULA_ULTIMA.qualities.immunity_air.cost', effect: 'FABULA_ULTIMA.qualities.immunity_air.effect'},
  'immunity_bolt': {name: 'FABULA_ULTIMA.qualities.immunity_bolt.name', cost: 'FABULA_ULTIMA.qualities.immunity_bolt.cost', effect: 'FABULA_ULTIMA.qualities.immunity_bolt.effect'},
  'immunity_dark': {name: 'FABULA_ULTIMA.qualities.immunity_dark.name', cost: 'FABULA_ULTIMA.qualities.immunity_dark.cost', effect: 'FABULA_ULTIMA.qualities.immunity_dark.effect'},
  'immunity_earth': {name: 'FABULA_ULTIMA.qualities.immunity_earth.name', cost: 'FABULA_ULTIMA.qualities.immunity_earth.cost', effect: 'FABULA_ULTIMA.qualities.immunity_earth.effect'},
  'immunity_fire': {name: 'FABULA_ULTIMA.qualities.immunity_fire.name', cost: 'FABULA_ULTIMA.qualities.immunity_fire.cost', effect: 'FABULA_ULTIMA.qualities.immunity_fire.effect'},
  'immunity_ice': {name: 'FABULA_ULTIMA.qualities.immunity_ice.name', cost: 'FABULA_ULTIMA.qualities.immunity_ice.cost', effect: 'FABULA_ULTIMA.qualities.immunity_ice.effect'},
  'immunity_light': {name: 'FABULA_ULTIMA.qualities.immunity_light.name', cost: 'FABULA_ULTIMA.qualities.immunity_light.cost', effect: 'FABULA_ULTIMA.qualities.immunity_light.effect'},
  'immunity_poison': {name: 'FABULA_ULTIMA.qualities.immunity_poison.name', cost: 'FABULA_ULTIMA.qualities.immunity_poison.cost', effect: 'FABULA_ULTIMA.qualities.immunity_poison.effect'},
  'omnishield': {name: 'FABULA_ULTIMA.qualities.omnishield.name', cost: 'FABULA_ULTIMA.qualities.omnishield.cost', effect: 'FABULA_ULTIMA.qualities.omnishield.effect'},
  'perfect_health': {name: 'FABULA_ULTIMA.qualities.perfect_health.name', cost: 'FABULA_ULTIMA.qualities.perfect_health.cost', effect: 'FABULA_ULTIMA.qualities.perfect_health.effect'},
  'damage_change_air': {name: 'FABULA_ULTIMA.qualities.damage_change_air.name', cost: 'FABULA_ULTIMA.qualities.damage_change_air.cost', effect: 'FABULA_ULTIMA.qualities.damage_change_air.effect'},
  'damage_change_bolt': {name: 'FABULA_ULTIMA.qualities.damage_change_bolt.name', cost: 'FABULA_ULTIMA.qualities.damage_change_bolt.cost', effect: 'FABULA_ULTIMA.qualities.damage_change_bolt.effect'},
  'damage_change_dark': {name: 'FABULA_ULTIMA.qualities.damage_change_dark.name', cost: 'FABULA_ULTIMA.qualities.damage_change_dark.cost', effect: 'FABULA_ULTIMA.qualities.damage_change_dark.effect'},
  'damage_change_earth': {name: 'FABULA_ULTIMA.qualities.damage_change_earth.name', cost: 'FABULA_ULTIMA.qualities.damage_change_earth.cost', effect: 'FABULA_ULTIMA.qualities.damage_change_earth.effect'},
  'damage_change_fire': {name: 'FABULA_ULTIMA.qualities.damage_change_fire.name', cost: 'FABULA_ULTIMA.qualities.damage_change_fire.cost', effect: 'FABULA_ULTIMA.qualities.damage_change_fire.effect'},
  'damage_change_ice': {name: 'FABULA_ULTIMA.qualities.damage_change_ice.name', cost: 'FABULA_ULTIMA.qualities.damage_change_ice.cost', effect: 'FABULA_ULTIMA.qualities.damage_change_ice.effect'},
  'damage_change_light': {name: 'FABULA_ULTIMA.qualities.damage_change_light.name', cost: 'FABULA_ULTIMA.qualities.damage_change_light.cost', effect: 'FABULA_ULTIMA.qualities.damage_change_light.effect'},
  'damage_change_poison': {name: 'FABULA_ULTIMA.qualities.damage_change_poison.name', cost: 'FABULA_ULTIMA.qualities.damage_change_poison.cost', effect: 'FABULA_ULTIMA.qualities.damage_change_poison.effect'},
  'damage_change_physical': {name: 'FABULA_ULTIMA.qualities.damage_change_physical.name', cost: 'FABULA_ULTIMA.qualities.damage_change_physical.cost', effect: 'FABULA_ULTIMA.qualities.damage_change_physical.effect'},
  'initiative_up': {name: 'FABULA_ULTIMA.qualities.initiative_up.name', cost: 'FABULA_ULTIMA.qualities.initiative_up.cost', effect: 'FABULA_ULTIMA.qualities.initiative_up.effect'},
  'accuracy_up': {name: 'FABULA_ULTIMA.qualities.accuracy_up.name', cost: 'FABULA_ULTIMA.qualities.accuracy_up.cost', effect: 'FABULA_ULTIMA.qualities.accuracy_up.effect'},
  'magic_up': {name: 'FABULA_ULTIMA.qualities.magic_up.name', cost: 'FABULA_ULTIMA.qualities.magic_up.cost', effect: 'FABULA_ULTIMA.qualities.magic_up.effect'},
  'vitality_up': {name: 'FABULA_ULTIMA.qualities.vitality_up.name', cost: 'FABULA_ULTIMA.qualities.vitality_up.cost', effect: 'FABULA_ULTIMA.qualities.vitality_up.effect'},
  'healing_up': {name: 'FABULA_ULTIMA.qualities.healing_up.name', cost: 'FABULA_ULTIMA.qualities.healing_up.cost', effect: 'FABULA_ULTIMA.qualities.healing_up.effect'},
  'spell_up': {name: 'FABULA_ULTIMA.qualities.spell_up.name', cost: 'FABULA_ULTIMA.qualities.spell_up.cost', effect: 'FABULA_ULTIMA.qualities.spell_up.effect'},
  'weapon_up_melee': {name: 'FABULA_ULTIMA.qualities.weapon_up_melee.name', cost: 'FABULA_ULTIMA.qualities.weapon_up_melee.cost', effect: 'FABULA_ULTIMA.qualities.weapon_up_melee.effect'},
  'weapon_up_ranged': {name: 'FABULA_ULTIMA.qualities.weapon_up_ranged.name', cost: 'FABULA_ULTIMA.qualities.weapon_up_ranged.cost', effect: 'FABULA_ULTIMA.qualities.weapon_up_ranged.effect'}
}

FABULA_ULTIMA.enums = enums;