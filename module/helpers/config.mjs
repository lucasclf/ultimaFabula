export const ULTIMAFABULA = {};

// Define constants here, such as:
ULTIMAFABULA.foobar = {
  'bas': 'ULTIMAFABULA.bas',
  'bar': 'ULTIMAFABULA.bar'
};

ULTIMAFABULA.elementType = {
  'physical': 'ULTIMAFABULA.elementType.physical', 
  'air': 'ULTIMAFABULA.elementType.air', 
  'bolt': 'ULTIMAFABULA.elementType.bolt', 
  'dark': 'ULTIMAFABULA.elementType.dark', 
  'earth': 'ULTIMAFABULA.elementType.earth', 
  'fire': 'ULTIMAFABULA.elementType.fire', 
  'ice': 'ULTIMAFABULA.elementType.ice', 
  'light': 'ULTIMAFABULA.elementType.light', 
  'poison': 'ULTIMAFABULA.elementType.poison'
}

ULTIMAFABULA.weaponType = {
  'sword': 'ULTIMAFABULA.weaponType.sword',
  'axe': 'ULTIMAFABULA.weaponType.axe',
  'arcane': 'ULTIMAFABULA.weaponType.arcane',
  'bow': 'ULTIMAFABULA.weaponType.bow',
  'brawling': 'ULTIMAFABULA.weaponType.brawling',
  'dagger': 'ULTIMAFABULA.weaponType.dagger',
  'firearm': 'ULTIMAFABULA.weaponType.firearm',
  'flail': 'ULTIMAFABULA.weaponType.flail',
  'heavy': 'ULTIMAFABULA.weaponType.heavy',
  'spear': 'ULTIMAFABULA.weaponType.spear',
  'thrown': 'ULTIMAFABULA.weaponType.thrown'
}

ULTIMAFABULA.gripType = {
  'one-handed': 'ULTIMAFABULA.gripType.one-handed',
  'two-handed': 'ULTIMAFABULA.gripType.two-handed'
}

ULTIMAFABULA.attackType = {
  'ranged': 'ULTIMAFABULA.attackType.ranged',
  'melee': 'ULTIMAFABULA.attackType.melee'
}

ULTIMAFABULA.attackNames = {
  'twinShield': 'ULTIMAFABULA.attackNames.twinShield',
  'unnarmedWeapon': 'ULTIMAFABULA.attackNames.unnarmedWeapon'
}

ULTIMAFABULA.equipmentSlot = {
  'mainHand': 'ULTIMAFABULA.equipmentSlot.mainHand',
  'offHand': 'ULTIMAFABULA.equipmentSlot.offHand',
  'accessory': 'ULTIMAFABULA.equipmentSlot.accessory'
}

ULTIMAFABULA.modalActions = {
  'change': 'ULTIMAFABULA.modalActions.change',
  'guardHeader': 'ULTIMAFABULA.modalActions.guardHeader',
  'guardBody': 'ULTIMAFABULA.modalActions.guardBody',
  'hinderFlavor': 'ULTIMAFABULA.modalActions.hinderFlavor',
  'attackTitle': 'ULTIMAFABULA.modalActions.attackTitle',
  'equipmentTitle': 'ULTIMAFABULA.modalActions.equipmentTitle',
  'hinderTitle': 'ULTIMAFABULA.modalActions.hinderTitle',
  'inventoryTitle': 'ULTIMAFABULA.modalActions.inventoryTitle',
  'objectiveTitle': 'ULTIMAFABULA.modalActions.objectiveTitle',
  'otherTitle': 'ULTIMAFABULA.modalActions.otherTitle',
  'ritualTitle': 'ULTIMAFABULA.modalActions.ritualTitle',
  'skillTitle': 'ULTIMAFABULA.modalActions.skillTitle',
  'spellTitle': 'ULTIMAFABULA.modalActions.spellTitle',
  'studyTitle': 'ULTIMAFABULA.modalActions.studyTitle'
}

ULTIMAFABULA.attributeDice = {
  'd6': 'd6',
  'd8': 'd8',
  'd10': 'd10',
  'd12': 'd12'
}

ULTIMAFABULA.attributes = {
  'might': 'ULTIMAFABULA.attributes.might',
  'dexterity': 'ULTIMAFABULA.attributes.dexterity',
  'insight': 'ULTIMAFABULA.attributes.insight',
  'willpower': 'ULTIMAFABULA.attributes.willpower'
}

ULTIMAFABULA.basicConditions = {
  'weak': {name: 'ULTIMAFABULA.basicConditions.weak.name', attributes: ULTIMAFABULA.attributes.might},
  'dazed': {name: 'ULTIMAFABULA.basicConditions.dazed.name', attributes: [ULTIMAFABULA.attributes.insight]},
  'shaken': {name: 'ULTIMAFABULA.basicConditions.shaken.name', attributes: [ULTIMAFABULA.attributes.willpower]},
  'slow': {name: 'ULTIMAFABULA.basicConditions.slow.name', attributes: [ULTIMAFABULA.attributes.dexterity]},
  'enraged': {name: 'ULTIMAFABULA.basicConditions.enraged.name', attributes: [ULTIMAFABULA.attributes.dexterity, ULTIMAFABULA.attributes.insight]},
  'poisoned': {name: 'ULTIMAFABULA.basicConditions.poisoned.name', attributes: [ULTIMAFABULA.attributes.willpower, ULTIMAFABULA.attributes.might]}
}

ULTIMAFABULA.attributesAbbreviation = {
  'might': 'ULTIMAFABULA.attributesAbbreviation.might',
  'dexterity': 'ULTIMAFABULA.attributesAbbreviation.dexterity',
  'insight': 'ULTIMAFABULA.attributesAbbreviation.insight',
  'willpower': 'ULTIMAFABULA.attributesAbbreviation.willpower'
}

ULTIMAFABULA.resourceAbbreviation = {
  'HP': 'ULTIMAFABULA.resourceAbbreviation.HP',
  'MP': 'ULTIMAFABULA.resourceAbbreviation.MP',
  'IP': 'ULTIMAFABULA.resourceAbbreviation.IP',
  'DEF': 'ULTIMAFABULA.resourceAbbreviation.DEF',
  'MDEF': 'ULTIMAFABULA.resourceAbbreviation.MDEF',
  'INIT': 'ULTIMAFABULA.resourceAbbreviation.INIT',
  'LEVEL': 'ULTIMAFABULA.resourceAbbreviation.LEVEL',
  'CRISIS': 'ULTIMAFABULA.resourceAbbreviation.CRISIS'
}

ULTIMAFABULA.ui = {
  'attributes': 'ULTIMAFABULA.ui.attributes',
  'gears': 'ULTIMAFABULA.ui.gears',
  'jobs': 'ULTIMAFABULA.ui.jobs',
  'skills': 'ULTIMAFABULA.ui.skills',
  'spells': 'ULTIMAFABULA.ui.spells',
  'actions': 'ULTIMAFABULA.ui.actions',
  'resistances': 'ULTIMAFABULA.ui.resistances',
  'weapons': 'ULTIMAFABULA.ui.weapons',
  'shields': 'ULTIMAFABULA.ui.shields',
  'armors': 'ULTIMAFABULA.ui.armors',
  'accessories': 'ULTIMAFABULA.ui.accessories',
  'name': 'ULTIMAFABULA.ui.name',
  'accuracy': 'ULTIMAFABULA.ui.accuracy',
  'damage': 'ULTIMAFABULA.ui.damage',
  'type': 'ULTIMAFABULA.ui.type',
  'distance': 'ULTIMAFABULA.ui.distance',
  'equipped': 'ULTIMAFABULA.ui.equipped',
  'add-item': 'ULTIMAFABULA.ui.add-item',
  'defense': 'ULTIMAFABULA.ui.defense',
  'mdefense': 'ULTIMAFABULA.ui.mdefense',
  'initiative': 'ULTIMAFABULA.ui.initiative',
  'benefits': 'ULTIMAFABULA.ui.benefits',
  'job': 'ULTIMAFABULA.ui.job',
  'arcanas': 'ULTIMAFABULA.ui.arcanas',
  'domains': 'ULTIMAFABULA.ui.domains',
  'cost': 'ULTIMAFABULA.ui.cost',
  'target': 'ULTIMAFABULA.ui.target',
  'duration': 'ULTIMAFABULA.ui.duration',
  'description': 'ULTIMAFABULA.ui.description',
  'quality': 'ULTIMAFABULA.ui.quality',
  'domains': 'ULTIMAFABULA.ui.domains',
  'merge': 'ULTIMAFABULA.ui.merge',
  'dismiss': 'ULTIMAFABULA.ui.dismiss',
  'isMartial': 'ULTIMAFABULA.ui.isMartial',
  'initiateProject': 'ULTIMAFABULA.ui.initiateProject',
  'martialEquipment': 'ULTIMAFABULA.ui.martialEquipment',
  'meleeWeapon': 'ULTIMAFABULA.ui.meleeWeapon',
  'rangedWeapon': 'ULTIMAFABULA.ui.rangedWeapon',
  'isCaster': 'ULTIMAFABULA.ui.isCaster',
  'casterAttributes': 'ULTIMAFABULA.ui.casterAttributes',
  'freeBenefits': 'ULTIMAFABULA.ui.freeBenefits',
  'effect': 'ULTIMAFABULA.ui.effect',
  'hpMultiply': 'ULTIMAFABULA.ui.hpMultiply',
  'mpMultiply': 'ULTIMAFABULA.ui.mpMultiply',
  'ipMultiply': 'ULTIMAFABULA.ui.ipMultiply',
  'meleeAccuracy': 'ULTIMAFABULA.ui.meleeAccuracy',
  'rangedAccuracy': 'ULTIMAFABULA.ui.rangedAccuracy',
  'dualShield': 'ULTIMAFABULA.ui.dualShield',
  'allowRitual': 'ULTIMAFABULA.ui.allowRitual',
  'offensive': 'ULTIMAFABULA.ui.offensive',
  'damageType': 'ULTIMAFABULA.ui.damageType',
  'attackType': 'ULTIMAFABULA.ui.attackType',
  'gripType': 'ULTIMAFABULA.ui.gripType',
  'weapon': 'ULTIMAFABULA.ui.weapon',
  'bothWeapons': 'ULTIMAFABULA.UI.bothWeapons',
  'select': 'ULTIMAFABULA.ui.select'
}

ULTIMAFABULA.actions = {
  'attack' : {name: 'ULTIMAFABULA.actions.attack.name', description: 'ULTIMAFABULA.actions.attack.description'},
  'equipment' : {name: 'ULTIMAFABULA.actions.equipment.name', description: 'ULTIMAFABULA.actions.equipment.description'},
  'guard' : {name: 'ULTIMAFABULA.actions.guard.name', description: 'ULTIMAFABULA.actions.guard.description'},
  'hinder' : {name: 'ULTIMAFABULA.actions.hinder.name', description: 'ULTIMAFABULA.actions.hinder.description'},
  'inventory' : {name: 'ULTIMAFABULA.actions.inventory.name', description: 'ULTIMAFABULA.actions.inventory.description'},
  'objective' : {name: 'ULTIMAFABULA.actions.objective.name', description: 'ULTIMAFABULA.actions.objective.description'},
  'spell' : {name: 'ULTIMAFABULA.actions.spell.name', description: 'ULTIMAFABULA.actions.spell.description'},
  'study' : {name: 'ULTIMAFABULA.actions.study.name', description: 'ULTIMAFABULA.actions.study.description'},
  'skill' : {name: 'ULTIMAFABULA.actions.skill.name', description: 'ULTIMAFABULA.actions.skill.description'},
  'ritual' : {name: 'ULTIMAFABULA.actions.ritual.name', description: 'ULTIMAFABULA.actions.ritual.description'},
  'other' : {name: 'ULTIMAFABULA.actions.other.name', description: 'ULTIMAFABULA.actions.other.description'}
}

ULTIMAFABULA.actionsLabels = {
  'attackLabel': 'ULTIMAFABULA.actionsLabels.attackLabel',
  'inventoryLabel': 'ULTIMAFABULA.actionsLabels.inventoryLabel',
  'inventoryTitle': 'ULTIUMAFABULA.actionsLabels.inventoryTitle'
}

ULTIMAFABULA.defeniveItemType = {
  'armor': 'ULTIMAFABULA.defeniveItemType.armor',
  'shield': 'ULTIMAFABULA.defeniveItemType.shield'
}

ULTIMAFABULA.spellDuration = {
  'instantaneous': 'ULTIMAFABULA.spellDuration.instantaneous',
  'scene': 'ULTIMAFABULA.spellDuration.scene'
}

ULTIMAFABULA.spellTarget = {
  'one-equip': 'ULTIMAFABULA.spellTarget.one-equip',
  'three-creatures': 'ULTIMAFABULA.spellTarget.three-creatures',
  'one-creature': 'ULTIMAFABULA.spellTarget.one-creature',
  'special': 'ULTIMAFABULA.spellTarget.special',
  'self': 'ULTIMAFABULA.spellTarget.self',
  'one-equiped-weapon': 'ULTIMAFABULA.spellTarget.one-equiped-weapon',
  'one-weapon': 'ULTIMAFABULA.spellTarget.one-weapon'
}

ULTIMAFABULA.weaponQualities = {
  'no-quality': {name: 'ULTIMAFABULA.quality.no-quality.name', cost: 'ULTIMAFABULA.quality.no-quality.cost', effect: 'ULTIMAFABULA.quality.no-quality.effect'},
  'antistatus-dazed': {name: 'ULTIMAFABULA.quality.antistatus-dazed.name', cost: 'ULTIMAFABULA.quality.antistatus-dazed.cost', effect: 'ULTIMAFABULA.quality.antistatus-dazed.effect'},
  'antistatus-enraged': {name: 'ULTIMAFABULA.quality.antistatus-enraged.name', cost: 'ULTIMAFABULA.quality.antistatus-enraged.cost', effect: 'ULTIMAFABULA.quality.antistatus-enraged.effect'},
  'antistatus-poisoned': {name: 'ULTIMAFABULA.quality.antistatus-poisoned.name', cost: 'ULTIMAFABULA.quality.antistatus-poisoned.cost', effect: 'ULTIMAFABULA.quality.antistatus-poisoned.effect'},
  'antistatus-shaken': {name: 'ULTIMAFABULA.quality.antistatus-shaken.name', cost: 'ULTIMAFABULA.quality.antistatus-shaken.cost', effect: 'ULTIMAFABULA.quality.antistatus-shaken.effect'},
  'antistatus-slow': {name: 'ULTIMAFABULA.quality.antistatus-slow.name', cost: 'ULTIMAFABULA.quality.antistatus-slow.cost', effect: 'ULTIMAFABULA.quality.antistatus-slow.effect'},
  'antistatus-weak': {name: 'ULTIMAFABULA.quality.antistatus-weak.name', cost: 'ULTIMAFABULA.quality.antistatus-weak.cost', effect: 'ULTIMAFABULA.quality.antistatus-weak.effect'},
  'resistance-air': {name: 'ULTIMAFABULA.quality.resistance-air.name', cost: 'ULTIMAFABULA.quality.resistance-air.cost', effect: 'ULTIMAFABULA.quality.resistance-air.effect'},
  'resistance-bolt': {name: 'ULTIMAFABULA.quality.resistance-bolt.name', cost: 'ULTIMAFABULA.quality.resistance-bolt.cost', effect: 'ULTIMAFABULA.quality.resistance-bolt.effect'},
  'resistance-dark': {name: 'ULTIMAFABULA.quality.resistance-dark.name', cost: 'ULTIMAFABULA.quality.resistance-dark.cost', effect: 'ULTIMAFABULA.quality.resistance-dark.effect'},
  'resistance-earth': {name: 'ULTIMAFABULA.quality.resistance-earth.name', cost: 'ULTIMAFABULA.quality.resistance-earth.cost', effect: 'ULTIMAFABULA.quality.resistance-earth.effect'},
  'resistance-fire': {name: 'ULTIMAFABULA.quality.resistance-fire.name', cost: 'ULTIMAFABULA.quality.resistance-fire.cost', effect: 'ULTIMAFABULA.quality.resistance-fire.effect'},
  'resistance-ice': {name: 'ULTIMAFABULA.quality.resistance-ice.name', cost: 'ULTIMAFABULA.quality.resistance-ice.cost', effect: 'ULTIMAFABULA.quality.resistance-ice.effect'},
  'resistance-light': {name: 'ULTIMAFABULA.quality.resistance-light.name', cost: 'ULTIMAFABULA.quality.resistance-light.cost', effect: 'ULTIMAFABULA.quality.resistance-light.effect'},
  'resistance-poison': {name: 'ULTIMAFABULA.quality.resistance-poison.name', cost: 'ULTIMAFABULA.quality.resistance-poison.cost', effect: 'ULTIMAFABULA.quality.resistance-poison.effect'},
  'amulet': {name: 'ULTIMAFABULA.quality.amulet.name', cost: 'ULTIMAFABULA.quality.amulet.cost', effect: 'ULTIMAFABULA.quality.amulet.effect'},
  'bulwark': {name: 'ULTIMAFABULA.quality.bulwark.name', cost: 'ULTIMAFABULA.quality.bulwark.cost', effect: 'ULTIMAFABULA.quality.bulwark.effect'},
  'dual-resistance-air-bolt': {name: 'ULTIMAFABULA.quality.dual-resistance-air-bolt.name', cost: 'ULTIMAFABULA.quality.dual-resistance-air-bolt.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-air-bolt.effect'},
  'dual-resistance-air-dark': {name: 'ULTIMAFABULA.quality.dual-resistance-air-dark.name', cost: 'ULTIMAFABULA.quality.dual-resistance-air-dark.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-air-dark.effect'},
  'dual-resistance-air-earth': {name: 'ULTIMAFABULA.quality.dual-resistance-air-earth.name', cost: 'ULTIMAFABULA.quality.dual-resistance-air-earth.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-air-earth.effect'},
  'dual-resistance-air-fire': {name: 'ULTIMAFABULA.quality.dual-resistance-air-fire.name', cost: 'ULTIMAFABULA.quality.dual-resistance-air-fire.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-air-fire.effect'},
  'dual-resistance-air-ice': {name: 'ULTIMAFABULA.quality.dual-resistance-air-ice.name', cost: 'ULTIMAFABULA.quality.dual-resistance-air-ice.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-air-ice.effect'},
  'dual-resistance-air-light': {name: 'ULTIMAFABULA.quality.dual-resistance-air-light.name', cost: 'ULTIMAFABULA.quality.dual-resistance-air-light.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-air-light.effect'},
  'dual-resistance-air-poison': {name: 'ULTIMAFABULA.quality.dual-resistance-air-poison.name', cost: 'ULTIMAFABULA.quality.dual-resistance-air-poison.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-air-poison.effect'},
  'dual-resistance-bolt-dark': {name: 'ULTIMAFABULA.quality.dual-resistance-bolt-dark.name', cost: 'ULTIMAFABULA.quality.dual-resistance-bolt-dark.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-bolt-dark.effect'},
  'dual-resistance-bolt-earth': {name: 'ULTIMAFABULA.quality.dual-resistance-bolt-earth.name', cost: 'ULTIMAFABULA.quality.dual-resistance-bolt-earth.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-bolt-earth.effect'},
  'dual-resistance-bolt-fire': {name: 'ULTIMAFABULA.quality.dual-resistance-bolt-fire.name', cost: 'ULTIMAFABULA.quality.dual-resistance-bolt-fire.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-bolt-fire.effect'},
  'dual-resistance-bolt-ice': {name: 'ULTIMAFABULA.quality.dual-resistance-bolt-ice.name', cost: 'ULTIMAFABULA.quality.dual-resistance-bolt-ice.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-bolt-ice.effect'},
  'dual-resistance-bolt-light': {name: 'ULTIMAFABULA.quality.dual-resistance-bolt-light.name', cost: 'ULTIMAFABULA.quality.dual-resistance-bolt-light.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-bolt-light.effect'},
  'dual-resistance-bolt-poison': {name: 'ULTIMAFABULA.quality.dual-resistance-bolt-poison.name', cost: 'ULTIMAFABULA.quality.dual-resistance-bolt-poison.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-bolt-poison.effect'},
  'dual-resistance-dark-earth': {name: 'ULTIMAFABULA.quality.dual-resistance-dark-earth.name', cost: 'ULTIMAFABULA.quality.dual-resistance-dark-earth.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-dark-earth.effect'},
  'dual-resistance-dark-fire': {name: 'ULTIMAFABULA.quality.dual-resistance-dark-fire.name', cost: 'ULTIMAFABULA.quality.dual-resistance-dark-fire.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-dark-fire.effect'},
  'dual-resistance-dark-ice': {name: 'ULTIMAFABULA.quality.dual-resistance-dark-ice.name', cost: 'ULTIMAFABULA.quality.dual-resistance-dark-ice.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-dark-ice.effect'},
  'dual-resistance-dark-light': {name: 'ULTIMAFABULA.quality.dual-resistance-dark-light.name', cost: 'ULTIMAFABULA.quality.dual-resistance-dark-light.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-dark-light.effect'},
  'dual-resistance-dark-poison': {name: 'ULTIMAFABULA.quality.dual-resistance-dark-poison.name', cost: 'ULTIMAFABULA.quality.dual-resistance-dark-poison.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-dark-poison.effect'},
  'dual-resistance-earth-fire': {name: 'ULTIMAFABULA.quality.dual-resistance-earth-fire.name', cost: 'ULTIMAFABULA.quality.dual-resistance-earth-fire.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-earth-fire.effect'},
  'dual-resistance-earth-ice': {name: 'ULTIMAFABULA.quality.dual-resistance-earth-ice.name', cost: 'ULTIMAFABULA.quality.dual-resistance-earth-ice.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-earth-ice.effect'},
  'dual-resistance-earth-light': {name: 'ULTIMAFABULA.quality.dual-resistance-earth-light.name', cost: 'ULTIMAFABULA.quality.dual-resistance-earth-light.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-earth-light.effect'},
  'dual-resistance-earth-poison': {name: 'ULTIMAFABULA.quality.dual-resistance-earth-poison.name', cost: 'ULTIMAFABULA.quality.dual-resistance-earth-poison.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-earth-poison.effect'},
  'dual-resistance-fire-ice': {name: 'ULTIMAFABULA.quality.dual-resistance-fire-ice.name', cost: 'ULTIMAFABULA.quality.dual-resistance-fire-ice.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-fire-ice.effect'},
  'dual-resistance-fire-light': {name: 'ULTIMAFABULA.quality.dual-resistance-fire-light.name', cost: 'ULTIMAFABULA.quality.dual-resistance-fire-light.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-fire-light.effect'},
  'dual-resistance-fire-poison': {name: 'ULTIMAFABULA.quality.dual-resistance-fire-poison.name', cost: 'ULTIMAFABULA.quality.dual-resistance-fire-poison.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-fire-poison.effect'},
  'dual-resistance-ice-light': {name: 'ULTIMAFABULA.quality.dual-resistance-ice-light.name', cost: 'ULTIMAFABULA.quality.dual-resistance-ice-light.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-ice-light.effect'},
  'dual-resistance-ice-poison': {name: 'ULTIMAFABULA.quality.dual-resistance-ice-poison.name', cost: 'ULTIMAFABULA.quality.dual-resistance-ice-poison.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-ice-poison.effect'},
  'dual-resistance-light-poison': {name: 'ULTIMAFABULA.quality.dual-resistance-light-poison.name', cost: 'ULTIMAFABULA.quality.dual-resistance-light-poison.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-light-poison.effect'},
  'swordbreaker': {name: 'ULTIMAFABULA.quality.swordbreaker.name', cost: 'ULTIMAFABULA.quality.swordbreaker.cost', effect: 'ULTIMAFABULA.quality.swordbreaker.effect'},
  'immunity-air': {name: 'ULTIMAFABULA.quality.immunity-air.name', cost: 'ULTIMAFABULA.quality.immunity-air.cost', effect: 'ULTIMAFABULA.quality.immunity-air.effect'},
  'immunity-bolt': {name: 'ULTIMAFABULA.quality.immunity-bolt.name', cost: 'ULTIMAFABULA.quality.immunity-bolt.cost', effect: 'ULTIMAFABULA.quality.immunity-bolt.effect'},
  'immunity-dark': {name: 'ULTIMAFABULA.quality.immunity-dark.name', cost: 'ULTIMAFABULA.quality.immunity-dark.cost', effect: 'ULTIMAFABULA.quality.immunity-dark.effect'},
  'immunity-earth': {name: 'ULTIMAFABULA.quality.immunity-earth.name', cost: 'ULTIMAFABULA.quality.immunity-earth.cost', effect: 'ULTIMAFABULA.quality.immunity-earth.effect'},
  'immunity-fire': {name: 'ULTIMAFABULA.quality.immunity-fire.name', cost: 'ULTIMAFABULA.quality.immunity-fire.cost', effect: 'ULTIMAFABULA.quality.immunity-fire.effect'},
  'immunity-ice': {name: 'ULTIMAFABULA.quality.immunity-ice.name', cost: 'ULTIMAFABULA.quality.immunity-ice.cost', effect: 'ULTIMAFABULA.quality.immunity-ice.effect'},
  'immunity-light': {name: 'ULTIMAFABULA.quality.immunity-light.name', cost: 'ULTIMAFABULA.quality.immunity-light.cost', effect: 'ULTIMAFABULA.quality.immunity-light.effect'},
  'immunity-poison': {name: 'ULTIMAFABULA.quality.immunity-poison.name', cost: 'ULTIMAFABULA.quality.immunity-poison.cost', effect: 'ULTIMAFABULA.quality.immunity-poison.effect'},
  'omnishield': {name: 'ULTIMAFABULA.quality.omnishield.name', cost: 'ULTIMAFABULA.quality.omnishield.cost', effect: 'ULTIMAFABULA.quality.omnishield.effect'},
  'perfect-health': {name: 'ULTIMAFABULA.quality.perfect-health.name', cost: 'ULTIMAFABULA.quality.perfect-health.cost', effect: 'ULTIMAFABULA.quality.perfect-health.effect'},
  'magical': {name: 'ULTIMAFABULA.quality.magical.name', cost: 'ULTIMAFABULA.quality.magical.cost', effect: 'ULTIMAFABULA.quality.magical.effect'},
  'hunter-beasts': {name: 'ULTIMAFABULA.quality.hunter-beasts.name', cost: 'ULTIMAFABULA.quality.hunter-beasts.cost', effect: 'ULTIMAFABULA.quality.hunter-beasts.effect'},
  'hunter-constructs': {name: 'ULTIMAFABULA.quality.hunter-constructs.name', cost: 'ULTIMAFABULA.quality.hunter-constructs.cost', effect: 'ULTIMAFABULA.quality.hunter-constructs.effect'},
  'hunter-demons': {name: 'ULTIMAFABULA.quality.hunter-demons.name', cost: 'ULTIMAFABULA.quality.hunter-demons.cost', effect: 'ULTIMAFABULA.quality.hunter-demons.effect'},
  'hunter-elementals': {name: 'ULTIMAFABULA.quality.hunter-elementals.name', cost: 'ULTIMAFABULA.quality.hunter-elementals.cost', effect: 'ULTIMAFABULA.quality.hunter-elementals.effect'},
  'hunter-humanoids': {name: 'ULTIMAFABULA.quality.hunter-humanoids.name', cost: 'ULTIMAFABULA.quality.hunter-humanoids.cost', effect: 'ULTIMAFABULA.quality.hunter-humanoids.effect'},
  'hunter-monsters': {name: 'ULTIMAFABULA.quality.hunter-monsters.name', cost: 'ULTIMAFABULA.quality.hunter-monsters.cost', effect: 'ULTIMAFABULA.quality.hunter-monsters.effect'},
  'hunter-plants': {name: 'ULTIMAFABULA.quality.hunter-plants.name', cost: 'ULTIMAFABULA.quality.hunter-plants.cost', effect: 'ULTIMAFABULA.quality.hunter-plants.effect'},
  'hunter-undeads': {name: 'ULTIMAFABULA.quality.hunter-undeads.name', cost: 'ULTIMAFABULA.quality.hunter-undeads.cost', effect: 'ULTIMAFABULA.quality.hunter-undeads.effect'},
  'piercing': {name: 'ULTIMAFABULA.quality.piercing.name', cost: 'ULTIMAFABULA.quality.piercing.cost', effect: 'ULTIMAFABULA.quality.piercing.effect'},
  'dual-hunter-beasts-constructs': {name: 'ULTIMAFABULA.quality.dual-hunter-beasts-constructs.name', cost: 'ULTIMAFABULA.quality.dual-hunter-beasts-constructs.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-beasts-constructs.effect'},
  'dual-hunter-beasts-demons': {name: 'ULTIMAFABULA.quality.dual-hunter-beasts-demons.name', cost: 'ULTIMAFABULA.quality.dual-hunter-beasts-demons.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-beasts-demons.effect'},
  'dual-hunter-beasts-elementals': {name: 'ULTIMAFABULA.quality.dual-hunter-beasts-elementals.name', cost: 'ULTIMAFABULA.quality.dual-hunter-beasts-elementals.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-beasts-elementals.effect'},
  'dual-hunter-beasts-humanoids': {name: 'ULTIMAFABULA.quality.dual-hunter-beasts-humanoids.name', cost: 'ULTIMAFABULA.quality.dual-hunter-beasts-humanoids.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-beasts-humanoids.effect'},
  'dual-hunter-beasts-monsters': {name: 'ULTIMAFABULA.quality.dual-hunter-beasts-monsters.name', cost: 'ULTIMAFABULA.quality.dual-hunter-beasts-monsters.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-beasts-monsters.effect'},
  'dual-hunter-beasts-plants': {name: 'ULTIMAFABULA.quality.dual-hunter-beasts-plants.name', cost: 'ULTIMAFABULA.quality.dual-hunter-beasts-plants.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-beasts-plants.effect'},
  'dual-hunter-beasts-undeads': {name: 'ULTIMAFABULA.quality.dual-hunter-beasts-undeads.name', cost: 'ULTIMAFABULA.quality.dual-hunter-beasts-undeads.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-beasts-undeads.effect'},
  'dual-hunter-constructs-demons': {name: 'ULTIMAFABULA.quality.dual-hunter-constructs-demons.name', cost: 'ULTIMAFABULA.quality.dual-hunter-constructs-demons.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-constructs-demons.effect'},
  'dual-hunter-constructs-elementals': {name: 'ULTIMAFABULA.quality.dual-hunter-constructs-elementals.name', cost: 'ULTIMAFABULA.quality.dual-hunter-constructs-elementals.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-constructs-elementals.effect'},
  'dual-hunter-constructs-humanoids': {name: 'ULTIMAFABULA.quality.dual-hunter-constructs-humanoids.name', cost: 'ULTIMAFABULA.quality.dual-hunter-constructs-humanoids.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-constructs-humanoids.effect'},
  'dual-hunter-constructs-monsters': {name: 'ULTIMAFABULA.quality.dual-hunter-constructs-monsters.name', cost: 'ULTIMAFABULA.quality.dual-hunter-constructs-monsters.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-constructs-monsters.effect'},
  'dual-hunter-constructs-plants': {name: 'ULTIMAFABULA.quality.dual-hunter-constructs-plants.name', cost: 'ULTIMAFABULA.quality.dual-hunter-constructs-plants.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-constructs-plants.effect'},
  'dual-hunter-constructs-undeads': {name: 'ULTIMAFABULA.quality.dual-hunter-constructs-undeads.name', cost: 'ULTIMAFABULA.quality.dual-hunter-constructs-undeads.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-constructs-undeads.effect'},
  'dual-hunter-demons-elementals': {name: 'ULTIMAFABULA.quality.dual-hunter-demons-elementals.name', cost: 'ULTIMAFABULA.quality.dual-hunter-demons-elementals.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-demons-elementals.effect'},
  'dual-hunter-demons-humanoids': {name: 'ULTIMAFABULA.quality.dual-hunter-demons-humanoids.name', cost: 'ULTIMAFABULA.quality.dual-hunter-demons-humanoids.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-demons-humanoids.effect'},
  'dual-hunter-demons-monsters': {name: 'ULTIMAFABULA.quality.dual-hunter-demons-monsters.name', cost: 'ULTIMAFABULA.quality.dual-hunter-demons-monsters.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-demons-monsters.effect'},
  'dual-hunter-demons-plants': {name: 'ULTIMAFABULA.quality.dual-hunter-demons-plants.name', cost: 'ULTIMAFABULA.quality.dual-hunter-demons-plants.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-demons-plants.effect'},
  'dual-hunter-demons-undeads': {name: 'ULTIMAFABULA.quality.dual-hunter-demons-undeads.name', cost: 'ULTIMAFABULA.quality.dual-hunter-demons-undeads.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-demons-undeads.effect'},
  'dual-hunter-elementals-humanoids': {name: 'ULTIMAFABULA.quality.dual-hunter-elementals-humanoids.name', cost: 'ULTIMAFABULA.quality.dual-hunter-elementals-humanoids.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-elementals-humanoids.effect'},
  'dual-hunter-elementals-monsters': {name: 'ULTIMAFABULA.quality.dual-hunter-elementals-monsters.name', cost: 'ULTIMAFABULA.quality.dual-hunter-elementals-monsters.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-elementals-monsters.effect'},
  'dual-hunter-elementals-plants': {name: 'ULTIMAFABULA.quality.dual-hunter-elementals-plants.name', cost: 'ULTIMAFABULA.quality.dual-hunter-elementals-plants.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-elementals-plants.effect'},
  'dual-hunter-elementals-undeads': {name: 'ULTIMAFABULA.quality.dual-hunter-elementals-undeads.name', cost: 'ULTIMAFABULA.quality.dual-hunter-elementals-undeads.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-elementals-undeads.effect'},
  'dual-hunter-humanoids-monsters': {name: 'ULTIMAFABULA.quality.dual-hunter-humanoids-monsters.name', cost: 'ULTIMAFABULA.quality.dual-hunter-humanoids-monsters.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-humanoids-monsters.effect'},
  'dual-hunter-humanoids-plants': {name: 'ULTIMAFABULA.quality.dual-hunter-humanoids-plants.name', cost: 'ULTIMAFABULA.quality.dual-hunter-humanoids-plants.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-humanoids-plants.effect'},
  'dual-hunter-humanoids-undeads': {name: 'ULTIMAFABULA.quality.dual-hunter-humanoids-undeads.name', cost: 'ULTIMAFABULA.quality.dual-hunter-humanoids-undeads.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-humanoids-undeads.effect'},
  'dual-hunter-monsters-plants': {name: 'ULTIMAFABULA.quality.dual-hunter-monsters-plants.name', cost: 'ULTIMAFABULA.quality.dual-hunter-monsters-plants.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-monsters-plants.effect'},
  'dual-hunter-monsters-undeads': {name: 'ULTIMAFABULA.quality.dual-hunter-monsters-undeads.name', cost: 'ULTIMAFABULA.quality.dual-hunter-monsters-undeads.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-monsters-undeads.effect'},
  'dual-hunter-plants-undeads': {name: 'ULTIMAFABULA.quality.dual-hunter-plants-undeads.name', cost: 'ULTIMAFABULA.quality.dual-hunter-plants-undeads.cost', effect: 'ULTIMAFABULA.quality.dual-hunter-plants-undeads.effect'},
  'multi': {name: 'ULTIMAFABULA.quality.multi.name', cost: 'ULTIMAFABULA.quality.multi.cost', effect: 'ULTIMAFABULA.quality.multi.effect'},
  'status-dazed': {name: 'ULTIMAFABULA.quality.status-dazed.name', cost: 'ULTIMAFABULA.quality.status-dazed.cost', effect: 'ULTIMAFABULA.quality.status-dazed.effect'},
  'status-shaken': {name: 'ULTIMAFABULA.quality.status-shaken.name', cost: 'ULTIMAFABULA.quality.status-shaken.cost', effect: 'ULTIMAFABULA.quality.status-shaken.effect'},
  'status-slow': {name: 'ULTIMAFABULA.quality.status-slow.name', cost: 'ULTIMAFABULA.quality.status-slow.cost', effect: 'ULTIMAFABULA.quality.status-slow.effect'},
  'status-weak': {name: 'ULTIMAFABULA.quality.status-weak.name', cost: 'ULTIMAFABULA.quality.status-weak.cost', effect: 'ULTIMAFABULA.quality.status-weak.effect'},
  'status-enraged': {name: 'ULTIMAFABULA.quality.status-enraged.name', cost: 'ULTIMAFABULA.quality.status-enraged.cost', effect: 'ULTIMAFABULA.quality.status-enraged.effect'},
  'status-poisoned': {name: 'ULTIMAFABULA.quality.status-poisoned.name', cost: 'ULTIMAFABULA.quality.status-poisoned.cost', effect: 'ULTIMAFABULA.quality.status-poisoned.effect'}
}

ULTIMAFABULA.armorQualities = {
  'no-quality': {name: 'No Qualities', cost: '', effect: ''},
  'antistatus-dazed': {name: 'ULTIMAFABULA.quality.antistatus-dazed.name', cost: 'ULTIMAFABULA.quality.antistatus-dazed.cost', effect: 'ULTIMAFABULA.quality.antistatus-dazed.effect'},
  'antistatus-enraged': {name: 'ULTIMAFABULA.quality.antistatus-enraged.name', cost: 'ULTIMAFABULA.quality.antistatus-enraged.cost', effect: 'ULTIMAFABULA.quality.antistatus-enraged.effect'},
  'antistatus-poisoned': {name: 'ULTIMAFABULA.quality.antistatus-poisoned.name', cost: 'ULTIMAFABULA.quality.antistatus-poisoned.cost', effect: 'ULTIMAFABULA.quality.antistatus-poisoned.effect'},
  'antistatus-shaken': {name: 'ULTIMAFABULA.quality.antistatus-shaken.name', cost: 'ULTIMAFABULA.quality.antistatus-shaken.cost', effect: 'ULTIMAFABULA.quality.antistatus-shaken.effect'},
  'antistatus-slow': {name: 'ULTIMAFABULA.quality.antistatus-slow.name', cost: 'ULTIMAFABULA.quality.antistatus-slow.cost', effect: 'ULTIMAFABULA.quality.antistatus-slow.effect'},
  'antistatus-weak': {name: 'ULTIMAFABULA.quality.antistatus-weak.name', cost: 'ULTIMAFABULA.quality.antistatus-weak.cost', effect: 'ULTIMAFABULA.quality.antistatus-weak.effect'},
  'resistance-air': {name: 'ULTIMAFABULA.quality.resistance-air.name', cost: 'ULTIMAFABULA.quality.resistance-air.cost', effect: 'ULTIMAFABULA.quality.resistance-air.effect'},
  'resistance-bolt': {name: 'ULTIMAFABULA.quality.resistance-bolt.name', cost: 'ULTIMAFABULA.quality.resistance-bolt.cost', effect: 'ULTIMAFABULA.quality.resistance-bolt.effect'},
  'resistance-dark': {name: 'ULTIMAFABULA.quality.resistance-dark.name', cost: 'ULTIMAFABULA.quality.resistance-dark.cost', effect: 'ULTIMAFABULA.quality.resistance-dark.effect'},
  'resistance-earth': {name: 'ULTIMAFABULA.quality.resistance-earth.name', cost: 'ULTIMAFABULA.quality.resistance-earth.cost', effect: 'ULTIMAFABULA.quality.resistance-earth.effect'},
  'resistance-fire': {name: 'ULTIMAFABULA.quality.resistance-fire.name', cost: 'ULTIMAFABULA.quality.resistance-fire.cost', effect: 'ULTIMAFABULA.quality.resistance-fire.effect'},
  'resistance-ice': {name: 'ULTIMAFABULA.quality.resistance-ice.name', cost: 'ULTIMAFABULA.quality.resistance-ice.cost', effect: 'ULTIMAFABULA.quality.resistance-ice.effect'},
  'resistance-light': {name: 'ULTIMAFABULA.quality.resistance-light.name', cost: 'ULTIMAFABULA.quality.resistance-light.cost', effect: 'ULTIMAFABULA.quality.resistance-light.effect'},
  'resistance-poison': {name: 'ULTIMAFABULA.quality.resistance-poison.name', cost: 'ULTIMAFABULA.quality.resistance-poison.cost', effect: 'ULTIMAFABULA.quality.resistance-poison.effect'},
  'dual-resistance-air-bolt': {name: 'ULTIMAFABULA.quality.dual-resistance-air-bolt.name', cost: 'ULTIMAFABULA.quality.dual-resistance-air-bolt.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-air-bolt.effect'},
  'dual-resistance-air-dark': {name: 'ULTIMAFABULA.quality.dual-resistance-air-dark.name', cost: 'ULTIMAFABULA.quality.dual-resistance-air-dark.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-air-dark.effect'},
  'dual-resistance-air-earth': {name: 'ULTIMAFABULA.quality.dual-resistance-air-earth.name', cost: 'ULTIMAFABULA.quality.dual-resistance-air-earth.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-air-earth.effect'},
  'dual-resistance-air-fire': {name: 'ULTIMAFABULA.quality.dual-resistance-air-fire.name', cost: 'ULTIMAFABULA.quality.dual-resistance-air-fire.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-air-fire.effect'},
  'dual-resistance-air-ice': {name: 'ULTIMAFABULA.quality.dual-resistance-air-ice.name', cost: 'ULTIMAFABULA.quality.dual-resistance-air-ice.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-air-ice.effect'},
  'dual-resistance-air-light': {name: 'ULTIMAFABULA.quality.dual-resistance-air-light.name', cost: 'ULTIMAFABULA.quality.dual-resistance-air-light.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-air-light.effect'},
  'dual-resistance-air-poison': {name: 'ULTIMAFABULA.quality.dual-resistance-air-poison.name', cost: 'ULTIMAFABULA.quality.dual-resistance-air-poison.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-air-poison.effect'},
  'dual-resistance-bolt-dark': {name: 'ULTIMAFABULA.quality.dual-resistance-bolt-dark.name', cost: 'ULTIMAFABULA.quality.dual-resistance-bolt-dark.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-bolt-dark.effect'},
  'dual-resistance-bolt-earth': {name: 'ULTIMAFABULA.quality.dual-resistance-bolt-earth.name', cost: 'ULTIMAFABULA.quality.dual-resistance-bolt-earth.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-bolt-earth.effect'},
  'dual-resistance-bolt-fire': {name: 'ULTIMAFABULA.quality.dual-resistance-bolt-fire.name', cost: 'ULTIMAFABULA.quality.dual-resistance-bolt-fire.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-bolt-fire.effect'},
  'dual-resistance-bolt-ice': {name: 'ULTIMAFABULA.quality.dual-resistance-bolt-ice.name', cost: 'ULTIMAFABULA.quality.dual-resistance-bolt-ice.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-bolt-ice.effect'},
  'dual-resistance-bolt-light': {name: 'ULTIMAFABULA.quality.dual-resistance-bolt-light.name', cost: 'ULTIMAFABULA.quality.dual-resistance-bolt-light.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-bolt-light.effect'},
  'dual-resistance-bolt-poison': {name: 'ULTIMAFABULA.quality.dual-resistance-bolt-poison.name', cost: 'ULTIMAFABULA.quality.dual-resistance-bolt-poison.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-bolt-poison.effect'},
  'dual-resistance-dark-earth': {name: 'ULTIMAFABULA.quality.dual-resistance-dark-earth.name', cost: 'ULTIMAFABULA.quality.dual-resistance-dark-earth.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-dark-earth.effect'},
  'dual-resistance-dark-fire': {name: 'ULTIMAFABULA.quality.dual-resistance-dark-fire.name', cost: 'ULTIMAFABULA.quality.dual-resistance-dark-fire.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-dark-fire.effect'},
  'dual-resistance-dark-ice': {name: 'ULTIMAFABULA.quality.dual-resistance-dark-ice.name', cost: 'ULTIMAFABULA.quality.dual-resistance-dark-ice.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-dark-ice.effect'},
  'dual-resistance-dark-light': {name: 'ULTIMAFABULA.quality.dual-resistance-dark-light.name', cost: 'ULTIMAFABULA.quality.dual-resistance-dark-light.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-dark-light.effect'},
  'dual-resistance-dark-poison': {name: 'ULTIMAFABULA.quality.dual-resistance-dark-poison.name', cost: 'ULTIMAFABULA.quality.dual-resistance-dark-poison.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-dark-poison.effect'},
  'dual-resistance-earth-fire': {name: 'ULTIMAFABULA.quality.dual-resistance-earth-fire.name', cost: 'ULTIMAFABULA.quality.dual-resistance-earth-fire.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-earth-fire.effect'},
  'dual-resistance-earth-ice': {name: 'ULTIMAFABULA.quality.dual-resistance-earth-ice.name', cost: 'ULTIMAFABULA.quality.dual-resistance-earth-ice.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-earth-ice.effect'},
  'dual-resistance-earth-light': {name: 'ULTIMAFABULA.quality.dual-resistance-earth-light.name', cost: 'ULTIMAFABULA.quality.dual-resistance-earth-light.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-earth-light.effect'},
  'dual-resistance-earth-poison': {name: 'ULTIMAFABULA.quality.dual-resistance-earth-poison.name', cost: 'ULTIMAFABULA.quality.dual-resistance-earth-poison.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-earth-poison.effect'},
  'dual-resistance-fire-ice': {name: 'ULTIMAFABULA.quality.dual-resistance-fire-ice.name', cost: 'ULTIMAFABULA.quality.dual-resistance-fire-ice.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-fire-ice.effect'},
  'dual-resistance-fire-light': {name: 'ULTIMAFABULA.quality.dual-resistance-fire-light.name', cost: 'ULTIMAFABULA.quality.dual-resistance-fire-light.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-fire-light.effect'},
  'dual-resistance-fire-poison': {name: 'ULTIMAFABULA.quality.dual-resistance-fire-poison.name', cost: 'ULTIMAFABULA.quality.dual-resistance-fire-poison.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-fire-poison.effect'},
  'dual-resistance-ice-light': {name: 'ULTIMAFABULA.quality.dual-resistance-ice-light.name', cost: 'ULTIMAFABULA.quality.dual-resistance-ice-light.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-ice-light.effect'},
  'dual-resistance-ice-poison': {name: 'ULTIMAFABULA.quality.dual-resistance-ice-poison.name', cost: 'ULTIMAFABULA.quality.dual-resistance-ice-poison.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-ice-poison.effect'},
  'dual-resistance-light-poison': {name: 'ULTIMAFABULA.quality.dual-resistance-light-poison.name', cost: 'ULTIMAFABULA.quality.dual-resistance-light-poison.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-light-poison.effect'},
  'swordbreaker': {name: 'ULTIMAFABULA.quality.swordbreaker.name', cost: 'ULTIMAFABULA.quality.swordbreaker.cost', effect: 'ULTIMAFABULA.quality.swordbreaker.effect'},
  'immunity-air': {name: 'ULTIMAFABULA.quality.immunity-air.name', cost: 'ULTIMAFABULA.quality.immunity-air.cost', effect: 'ULTIMAFABULA.quality.immunity-air.effect'},
  'immunity-bolt': {name: 'ULTIMAFABULA.quality.immunity-bolt.name', cost: 'ULTIMAFABULA.quality.immunity-bolt.cost', effect: 'ULTIMAFABULA.quality.immunity-bolt.effect'},
  'immunity-dark': {name: 'ULTIMAFABULA.quality.immunity-dark.name', cost: 'ULTIMAFABULA.quality.immunity-dark.cost', effect: 'ULTIMAFABULA.quality.immunity-dark.effect'},
  'immunity-earth': {name: 'ULTIMAFABULA.quality.immunity-earth.name', cost: 'ULTIMAFABULA.quality.immunity-earth.cost', effect: 'ULTIMAFABULA.quality.immunity-earth.effect'},
  'immunity-fire': {name: 'ULTIMAFABULA.quality.immunity-fire.name', cost: 'ULTIMAFABULA.quality.immunity-fire.cost', effect: 'ULTIMAFABULA.quality.immunity-fire.effect'},
  'immunity-ice': {name: 'ULTIMAFABULA.quality.immunity-ice.name', cost: 'ULTIMAFABULA.quality.immunity-ice.cost', effect: 'ULTIMAFABULA.quality.immunity-ice.effect'},
  'immunity-light': {name: 'ULTIMAFABULA.quality.immunity-light.name', cost: 'ULTIMAFABULA.quality.immunity-light.cost', effect: 'ULTIMAFABULA.quality.immunity-light.effect'},
  'immunity-poison': {name: 'ULTIMAFABULA.quality.immunity-poison.name', cost: 'ULTIMAFABULA.quality.immunity-poison.cost', effect: 'ULTIMAFABULA.quality.immunity-poison.effect'},
  'perfect-health': {name: 'ULTIMAFABULA.quality.perfect-health.name', cost: 'ULTIMAFABULA.quality.perfect-health.cost', effect: 'ULTIMAFABULA.quality.perfect-health.effect'},
  'initiative-up': {name: 'ULTIMAFABULA.quality.initiative-up.name', cost: 'ULTIMAFABULA.quality.initiative-up.cost', effect: 'ULTIMAFABULA.quality.initiative-up.effect'},
  'accuracy-up': {name: 'ULTIMAFABULA.quality.accuracy-up.name', cost: 'ULTIMAFABULA.quality.accuracy-up.cost', effect: 'ULTIMAFABULA.quality.accuracy-up.effect'},
  'magic-up': {name: 'ULTIMAFABULA.quality.magic-up.name', cost: 'ULTIMAFABULA.quality.magic-up.cost', effect: 'ULTIMAFABULA.quality.magic-up.effect'},
  'vitality-up': {name: 'ULTIMAFABULA.quality.vitality-up.name', cost: 'ULTIMAFABULA.quality.vitality-up.cost', effect: 'ULTIMAFABULA.quality.vitality-up.effect'},
  'healing-up': {name: 'ULTIMAFABULA.quality.healing-up.name', cost: 'ULTIMAFABULA.quality.healing-up.cost', effect: 'ULTIMAFABULA.quality.healing-up.effect'},
  'spell-up': {name: 'ULTIMAFABULA.quality.spell-up.name', cost: 'ULTIMAFABULA.quality.spell-up.cost', effect: 'ULTIMAFABULA.quality.spell-up.effect'},
  'weapon-up-melee': {name: 'ULTIMAFABULA.quality.weapon-up-melee.name', cost: 'ULTIMAFABULA.quality.weapon-up-melee.cost', effect: 'ULTIMAFABULA.quality.weapon-up-melee.effect'},
  'weapon-up-ranged': {name: 'ULTIMAFABULA.quality.weapon-up-ranged.name', cost: 'ULTIMAFABULA.quality.weapon-up-ranged.cost', effect: 'ULTIMAFABULA.quality.weapon-up-ranged.effect'}
}

ULTIMAFABULA.accessoryQualities = {
  'no-quality': {name: 'No Qualities', cost: '', effect: ''},
  'antistatus-dazed': {name: 'ULTIMAFABULA.quality.antistatus-dazed.name', cost: 'ULTIMAFABULA.quality.antistatus-dazed.cost', effect: 'ULTIMAFABULA.quality.antistatus-dazed.effect'},
  'antistatus-enraged': {name: 'ULTIMAFABULA.quality.antistatus-enraged.name', cost: 'ULTIMAFABULA.quality.antistatus-enraged.cost', effect: 'ULTIMAFABULA.quality.antistatus-enraged.effect'},
  'antistatus-poisoned': {name: 'ULTIMAFABULA.quality.antistatus-poisoned.name', cost: 'ULTIMAFABULA.quality.antistatus-poisoned.cost', effect: 'ULTIMAFABULA.quality.antistatus-poisoned.effect'},
  'antistatus-shaken': {name: 'ULTIMAFABULA.quality.antistatus-shaken.name', cost: 'ULTIMAFABULA.quality.antistatus-shaken.cost', effect: 'ULTIMAFABULA.quality.antistatus-shaken.effect'},
  'antistatus-slow': {name: 'ULTIMAFABULA.quality.antistatus-slow.name', cost: 'ULTIMAFABULA.quality.antistatus-slow.cost', effect: 'ULTIMAFABULA.quality.antistatus-slow.effect'},
  'antistatus-weak': {name: 'ULTIMAFABULA.quality.antistatus-weak.name', cost: 'ULTIMAFABULA.quality.antistatus-weak.cost', effect: 'ULTIMAFABULA.quality.antistatus-weak.effect'},
  'resistance-air': {name: 'ULTIMAFABULA.quality.resistance-air.name', cost: 'ULTIMAFABULA.quality.resistance-air.cost', effect: 'ULTIMAFABULA.quality.resistance-air.effect'},
  'resistance-bolt': {name: 'ULTIMAFABULA.quality.resistance-bolt.name', cost: 'ULTIMAFABULA.quality.resistance-bolt.cost', effect: 'ULTIMAFABULA.quality.resistance-bolt.effect'},
  'resistance-dark': {name: 'ULTIMAFABULA.quality.resistance-dark.name', cost: 'ULTIMAFABULA.quality.resistance-dark.cost', effect: 'ULTIMAFABULA.quality.resistance-dark.effect'},
  'resistance-earth': {name: 'ULTIMAFABULA.quality.resistance-earth.name', cost: 'ULTIMAFABULA.quality.resistance-earth.cost', effect: 'ULTIMAFABULA.quality.resistance-earth.effect'},
  'resistance-fire': {name: 'ULTIMAFABULA.quality.resistance-fire.name', cost: 'ULTIMAFABULA.quality.resistance-fire.cost', effect: 'ULTIMAFABULA.quality.resistance-fire.effect'},
  'resistance-ice': {name: 'ULTIMAFABULA.quality.resistance-ice.name', cost: 'ULTIMAFABULA.quality.resistance-ice.cost', effect: 'ULTIMAFABULA.quality.resistance-ice.effect'},
  'resistance-light': {name: 'ULTIMAFABULA.quality.resistance-light.name', cost: 'ULTIMAFABULA.quality.resistance-light.cost', effect: 'ULTIMAFABULA.quality.resistance-light.effect'},
  'resistance-poison': {name: 'ULTIMAFABULA.quality.resistance-poison.name', cost: 'ULTIMAFABULA.quality.resistance-poison.cost', effect: 'ULTIMAFABULA.quality.resistance-poison.effect'},
  'amulet': {name: 'ULTIMAFABULA.quality.amulet.name', cost: 'ULTIMAFABULA.quality.amulet.cost', effect: 'ULTIMAFABULA.quality.amulet.effect'},
  'bulwark': {name: 'ULTIMAFABULA.quality.bulwark.name', cost: 'ULTIMAFABULA.quality.bulwark.cost', effect: 'ULTIMAFABULA.quality.bulwark.effect'},
  'dual-resistance-air-bolt': {name: 'ULTIMAFABULA.quality.dual-resistance-air-bolt.name', cost: 'ULTIMAFABULA.quality.dual-resistance-air-bolt.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-air-bolt.effect'},
  'dual-resistance-air-dark': {name: 'ULTIMAFABULA.quality.dual-resistance-air-dark.name', cost: 'ULTIMAFABULA.quality.dual-resistance-air-dark.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-air-dark.effect'},
  'dual-resistance-air-earth': {name: 'ULTIMAFABULA.quality.dual-resistance-air-earth.name', cost: 'ULTIMAFABULA.quality.dual-resistance-air-earth.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-air-earth.effect'},
  'dual-resistance-air-fire': {name: 'ULTIMAFABULA.quality.dual-resistance-air-fire.name', cost: 'ULTIMAFABULA.quality.dual-resistance-air-fire.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-air-fire.effect'},
  'dual-resistance-air-ice': {name: 'ULTIMAFABULA.quality.dual-resistance-air-ice.name', cost: 'ULTIMAFABULA.quality.dual-resistance-air-ice.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-air-ice.effect'},
  'dual-resistance-air-light': {name: 'ULTIMAFABULA.quality.dual-resistance-air-light.name', cost: 'ULTIMAFABULA.quality.dual-resistance-air-light.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-air-light.effect'},
  'dual-resistance-air-poison': {name: 'ULTIMAFABULA.quality.dual-resistance-air-poison.name', cost: 'ULTIMAFABULA.quality.dual-resistance-air-poison.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-air-poison.effect'},
  'dual-resistance-bolt-dark': {name: 'ULTIMAFABULA.quality.dual-resistance-bolt-dark.name', cost: 'ULTIMAFABULA.quality.dual-resistance-bolt-dark.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-bolt-dark.effect'},
  'dual-resistance-bolt-earth': {name: 'ULTIMAFABULA.quality.dual-resistance-bolt-earth.name', cost: 'ULTIMAFABULA.quality.dual-resistance-bolt-earth.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-bolt-earth.effect'},
  'dual-resistance-bolt-fire': {name: 'ULTIMAFABULA.quality.dual-resistance-bolt-fire.name', cost: 'ULTIMAFABULA.quality.dual-resistance-bolt-fire.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-bolt-fire.effect'},
  'dual-resistance-bolt-ice': {name: 'ULTIMAFABULA.quality.dual-resistance-bolt-ice.name', cost: 'ULTIMAFABULA.quality.dual-resistance-bolt-ice.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-bolt-ice.effect'},
  'dual-resistance-bolt-light': {name: 'ULTIMAFABULA.quality.dual-resistance-bolt-light.name', cost: 'ULTIMAFABULA.quality.dual-resistance-bolt-light.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-bolt-light.effect'},
  'dual-resistance-bolt-poison': {name: 'ULTIMAFABULA.quality.dual-resistance-bolt-poison.name', cost: 'ULTIMAFABULA.quality.dual-resistance-bolt-poison.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-bolt-poison.effect'},
  'dual-resistance-dark-earth': {name: 'ULTIMAFABULA.quality.dual-resistance-dark-earth.name', cost: 'ULTIMAFABULA.quality.dual-resistance-dark-earth.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-dark-earth.effect'},
  'dual-resistance-dark-fire': {name: 'ULTIMAFABULA.quality.dual-resistance-dark-fire.name', cost: 'ULTIMAFABULA.quality.dual-resistance-dark-fire.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-dark-fire.effect'},
  'dual-resistance-dark-ice': {name: 'ULTIMAFABULA.quality.dual-resistance-dark-ice.name', cost: 'ULTIMAFABULA.quality.dual-resistance-dark-ice.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-dark-ice.effect'},
  'dual-resistance-dark-light': {name: 'ULTIMAFABULA.quality.dual-resistance-dark-light.name', cost: 'ULTIMAFABULA.quality.dual-resistance-dark-light.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-dark-light.effect'},
  'dual-resistance-dark-poison': {name: 'ULTIMAFABULA.quality.dual-resistance-dark-poison.name', cost: 'ULTIMAFABULA.quality.dual-resistance-dark-poison.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-dark-poison.effect'},
  'dual-resistance-earth-fire': {name: 'ULTIMAFABULA.quality.dual-resistance-earth-fire.name', cost: 'ULTIMAFABULA.quality.dual-resistance-earth-fire.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-earth-fire.effect'},
  'dual-resistance-earth-ice': {name: 'ULTIMAFABULA.quality.dual-resistance-earth-ice.name', cost: 'ULTIMAFABULA.quality.dual-resistance-earth-ice.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-earth-ice.effect'},
  'dual-resistance-earth-light': {name: 'ULTIMAFABULA.quality.dual-resistance-earth-light.name', cost: 'ULTIMAFABULA.quality.dual-resistance-earth-light.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-earth-light.effect'},
  'dual-resistance-earth-poison': {name: 'ULTIMAFABULA.quality.dual-resistance-earth-poison.name', cost: 'ULTIMAFABULA.quality.dual-resistance-earth-poison.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-earth-poison.effect'},
  'dual-resistance-fire-ice': {name: 'ULTIMAFABULA.quality.dual-resistance-fire-ice.name', cost: 'ULTIMAFABULA.quality.dual-resistance-fire-ice.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-fire-ice.effect'},
  'dual-resistance-fire-light': {name: 'ULTIMAFABULA.quality.dual-resistance-fire-light.name', cost: 'ULTIMAFABULA.quality.dual-resistance-fire-light.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-fire-light.effect'},
  'dual-resistance-fire-poison': {name: 'ULTIMAFABULA.quality.dual-resistance-fire-poison.name', cost: 'ULTIMAFABULA.quality.dual-resistance-fire-poison.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-fire-poison.effect'},
  'dual-resistance-ice-light': {name: 'ULTIMAFABULA.quality.dual-resistance-ice-light.name', cost: 'ULTIMAFABULA.quality.dual-resistance-ice-light.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-ice-light.effect'},
  'dual-resistance-ice-poison': {name: 'ULTIMAFABULA.quality.dual-resistance-ice-poison.name', cost: 'ULTIMAFABULA.quality.dual-resistance-ice-poison.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-ice-poison.effect'},
  'dual-resistance-light-poison': {name: 'ULTIMAFABULA.quality.dual-resistance-light-poison.name', cost: 'ULTIMAFABULA.quality.dual-resistance-light-poison.cost', effect: 'ULTIMAFABULA.quality.dual-resistance-light-poison.effect'},
  'swordbreaker': {name: 'ULTIMAFABULA.quality.swordbreaker.name', cost: 'ULTIMAFABULA.quality.swordbreaker.cost', effect: 'ULTIMAFABULA.quality.swordbreaker.effect'},
  'immunity-air': {name: 'ULTIMAFABULA.quality.immunity-air.name', cost: 'ULTIMAFABULA.quality.immunity-air.cost', effect: 'ULTIMAFABULA.quality.immunity-air.effect'},
  'immunity-bolt': {name: 'ULTIMAFABULA.quality.immunity-bolt.name', cost: 'ULTIMAFABULA.quality.immunity-bolt.cost', effect: 'ULTIMAFABULA.quality.immunity-bolt.effect'},
  'immunity-dark': {name: 'ULTIMAFABULA.quality.immunity-dark.name', cost: 'ULTIMAFABULA.quality.immunity-dark.cost', effect: 'ULTIMAFABULA.quality.immunity-dark.effect'},
  'immunity-earth': {name: 'ULTIMAFABULA.quality.immunity-earth.name', cost: 'ULTIMAFABULA.quality.immunity-earth.cost', effect: 'ULTIMAFABULA.quality.immunity-earth.effect'},
  'immunity-fire': {name: 'ULTIMAFABULA.quality.immunity-fire.name', cost: 'ULTIMAFABULA.quality.immunity-fire.cost', effect: 'ULTIMAFABULA.quality.immunity-fire.effect'},
  'immunity-ice': {name: 'ULTIMAFABULA.quality.immunity-ice.name', cost: 'ULTIMAFABULA.quality.immunity-ice.cost', effect: 'ULTIMAFABULA.quality.immunity-ice.effect'},
  'immunity-light': {name: 'ULTIMAFABULA.quality.immunity-light.name', cost: 'ULTIMAFABULA.quality.immunity-light.cost', effect: 'ULTIMAFABULA.quality.immunity-light.effect'},
  'immunity-poison': {name: 'ULTIMAFABULA.quality.immunity-poison.name', cost: 'ULTIMAFABULA.quality.immunity-poison.cost', effect: 'ULTIMAFABULA.quality.immunity-poison.effect'},
  'omnishield': {name: 'ULTIMAFABULA.quality.omnishield.name', cost: 'ULTIMAFABULA.quality.omnishield.cost', effect: 'ULTIMAFABULA.quality.omnishield.effect'},
  'perfect-health': {name: 'ULTIMAFABULA.quality.perfect-health.name', cost: 'ULTIMAFABULA.quality.perfect-health.cost', effect: 'ULTIMAFABULA.quality.perfect-health.effect'},
  'damage-change-air': {name: 'ULTIMAFABULA.quality.damage-change-air.name', cost: 'ULTIMAFABULA.quality.damage-change-air.cost', effect: 'ULTIMAFABULA.quality.damage-change-air.effect'},
  'damage-change-bolt': {name: 'ULTIMAFABULA.quality.damage-change-bolt.name', cost: 'ULTIMAFABULA.quality.damage-change-bolt.cost', effect: 'ULTIMAFABULA.quality.damage-change-bolt.effect'},
  'damage-change-dark': {name: 'ULTIMAFABULA.quality.damage-change-dark.name', cost: 'ULTIMAFABULA.quality.damage-change-dark.cost', effect: 'ULTIMAFABULA.quality.damage-change-dark.effect'},
  'damage-change-earth': {name: 'ULTIMAFABULA.quality.damage-change-earth.name', cost: 'ULTIMAFABULA.quality.damage-change-earth.cost', effect: 'ULTIMAFABULA.quality.damage-change-earth.effect'},
  'damage-change-fire': {name: 'ULTIMAFABULA.quality.damage-change-fire.name', cost: 'ULTIMAFABULA.quality.damage-change-fire.cost', effect: 'ULTIMAFABULA.quality.damage-change-fire.effect'},
  'damage-change-ice': {name: 'ULTIMAFABULA.quality.damage-change-ice.name', cost: 'ULTIMAFABULA.quality.damage-change-ice.cost', effect: 'ULTIMAFABULA.quality.damage-change-ice.effect'},
  'damage-change-light': {name: 'ULTIMAFABULA.quality.damage-change-light.name', cost: 'ULTIMAFABULA.quality.damage-change-light.cost', effect: 'ULTIMAFABULA.quality.damage-change-light.effect'},
  'damage-change-poison': {name: 'ULTIMAFABULA.quality.damage-change-poison.name', cost: 'ULTIMAFABULA.quality.damage-change-poison.cost', effect: 'ULTIMAFABULA.quality.damage-change-poison.effect'},
  'damage-change-physical': {name: 'ULTIMAFABULA.quality.damage-change-physical.name', cost: 'ULTIMAFABULA.quality.damage-change-physical.cost', effect: 'ULTIMAFABULA.quality.damage-change-physical.effect'},
  'initiative-up': {name: 'ULTIMAFABULA.quality.initiative-up.name', cost: 'ULTIMAFABULA.quality.initiative-up.cost', effect: 'ULTIMAFABULA.quality.initiative-up.effect'},
  'accuracy-up': {name: 'ULTIMAFABULA.quality.accuracy-up.name', cost: 'ULTIMAFABULA.quality.accuracy-up.cost', effect: 'ULTIMAFABULA.quality.accuracy-up.effect'},
  'magic-up': {name: 'ULTIMAFABULA.quality.magic-up.name', cost: 'ULTIMAFABULA.quality.magic-up.cost', effect: 'ULTIMAFABULA.quality.magic-up.effect'},
  'vitality-up': {name: 'ULTIMAFABULA.quality.vitality-up.name', cost: 'ULTIMAFABULA.quality.vitality-up.cost', effect: 'ULTIMAFABULA.quality.vitality-up.effect'},
  'healing-up': {name: 'ULTIMAFABULA.quality.healing-up.name', cost: 'ULTIMAFABULA.quality.healing-up.cost', effect: 'ULTIMAFABULA.quality.healing-up.effect'},
  'spell-up': {name: 'ULTIMAFABULA.quality.spell-up.name', cost: 'ULTIMAFABULA.quality.spell-up.cost', effect: 'ULTIMAFABULA.quality.spell-up.effect'},
  'weapon-up-melee': {name: 'ULTIMAFABULA.quality.weapon-up-melee.name', cost: 'ULTIMAFABULA.quality.weapon-up-melee.cost', effect: 'ULTIMAFABULA.quality.weapon-up-melee.effect'},
  'weapon-up-ranged': {name: 'ULTIMAFABULA.quality.weapon-up-ranged.name', cost: 'ULTIMAFABULA.quality.weapon-up-ranged.cost', effect: 'ULTIMAFABULA.quality.weapon-up-ranged.effect'}
}

ULTIMAFABULA.inventoryItems = {
  'elixir': {name: 'ULTIMAFABULA.inventoryItems.elixir.name', cost: 'ULTIMAFABULA.inventoryItems.elixir.cost', effect: 'ULTIMAFABULA.inventoryItems.elixir.effect'},
  'remedy': {name: 'ULTIMAFABULA.inventoryItems.remedy.name', cost: 'ULTIMAFABULA.inventoryItems.remedy.cost', effect: 'ULTIMAFABULA.inventoryItems.remedy.effect'},
  'tonic': {name: 'ULTIMAFABULA.inventoryItems.tonic.name', cost: 'ULTIMAFABULA.inventoryItems.tonic.cost', effect: 'ULTIMAFABULA.inventoryItems.tonic.effect'},
  'fire-elemental-shard': {name: 'ULTIMAFABULA.inventoryItems.fire-elemental-shard.name', cost: 'ULTIMAFABULA.inventoryItems.fire-elemental-shard.cost', effect: 'ULTIMAFABULA.inventoryItems.fire-elemental-shard.effect'},
  'air-elemental-shard': {name: 'ULTIMAFABULA.inventoryItems.air-elemental-shard.name', cost: 'ULTIMAFABULA.inventoryItems.air-elemental-shard.cost', effect: 'ULTIMAFABULA.inventoryItems.air-elemental-shard.effect'},
  'bolt-elemental-shard': {name: 'ULTIMAFABULA.inventoryItems.bolt-elemental-shard.name', cost: 'ULTIMAFABULA.inventoryItems.bolt-elemental-shard.cost', effect: 'ULTIMAFABULA.inventoryItems.bolt-elemental-shard.effect'},
  'earth-elemental-shard': {name: 'ULTIMAFABULA.inventoryItems.earth-elemental-shard.name', cost: 'ULTIMAFABULA.inventoryItems.earth-elemental-shard.cost', effect: 'ULTIMAFABULA.inventoryItems.earth-elemental-shard.effect'},
  'ice-elemental-shard': {name: 'ULTIMAFABULA.inventoryItems.ice-elemental-shard.name', cost: 'ULTIMAFABULA.inventoryItems.ice-elemental-shard.cost', effect: 'ULTIMAFABULA.inventoryItems.ice-elemental-shard.effect'},
  'magic-tent': {name: 'ULTIMAFABULA.inventoryItems.magic-tent.name', cost: 'ULTIMAFABULA.inventoryItems.magic-tent.cost', effect: 'ULTIMAFABULA.inventoryItems.magic-tent.effect'}
}
