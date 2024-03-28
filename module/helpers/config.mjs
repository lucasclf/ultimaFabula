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
  'freeBenefits': 'ULTIMAFABULA.ui.freeBenefits'
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
  'no-quality': {name: 'No Qualities', cost: 0, effect: ''},
  'antistatus-dazed': {name: 'Antistatus(Dazed)', cost: 500, effect: 'You are immune to dazed status effect.'},
  'antistatus-enraged': {name: 'Antistatus(Enraged)', cost: 500, effect: 'You are immune to enraged status effect.'},
  'antistatus-poisoned': {name: 'Antistatus(Poisoned)', cost: 500, effect: 'You are immune to poisoned status effect.'},
  'antistatus-shaken': {name: 'Antistatus(Shaken)', cost: 500, effect: 'You are immune to shaken status effect.'},
  'antistatus-slow': {name: 'Antistatus(Slow)', cost: 500, effect: 'You are immune to slow status effect.'},
  'antistatus-weak': {name: 'Antistatus(Weak)', cost: 500, effect: 'You are immune to weak status effect.'},
  'resistance-air': {name: 'Resistance(Air)', cost: 700, effect: 'You have Resistance to air damage.'},
  'resistance-bolt': {name: 'Resistance(Bolt)', cost: 700, effect: 'You have Resistance to bolt damage.'},
  'resistance-dark': {name: 'Resistance(Dark)', cost: 700, effect: 'You have Resistance to dark damage.'},
  'resistance-earth': {name: 'Resistance(Earth)', cost: 700, effect: 'You have Resistance to earth damage.'},
  'resistance-fire': {name: 'Resistance(Fire)', cost: 700, effect: 'You have Resistance to fire damage.'},
  'resistance-ice': {name: 'Resistance(Ice)', cost: 700, effect: 'You have Resistance to ice damage.'},
  'resistance-light': {name: 'Resistance(Light)', cost: 700, effect: 'You have Resistance to light damage.'},
  'resistance-poison': {name: 'Resistance(Poison)', cost: 700, effect: 'You have Resistance to poison damage.'},
  'amulet': {name: 'Amulet', cost: 800, effect: 'You gain a +1 bonus to Magic Defense.'},
  'bulwark': {name: 'Bulwark', cost: 800, effect: 'You gain a +1 bonus to Defense.'},
  'dual-resistance-air-bolt': {name: 'Dual Resistance(Air/Bolt)', cost: 1000, effect: 'You have Resistance to Air and Bolt damage.'},
  'dual-resistance-air-dark': {name: 'Dual Resistance(Air/Dark)', cost: 1000, effect: 'You have Resistance to Air and Dark damage.'},
  'dual-resistance-air-earth': {name: 'Dual Resistance(Air/Earth)', cost: 1000, effect: 'You have Resistance to Air and Earth damage.'},
  'dual-resistance-air-fire': {name: 'Dual Resistance(Air/Fire)', cost: 1000, effect: 'You have Resistance to Air and Fire damage.'},
  'dual-resistance-air-ice': {name: 'Dual Resistance(Air/Ice)', cost: 1000, effect: 'You have Resistance to Air and Ice damage.'},
  'dual-resistance-air-light': {name: 'Dual Resistance(Air/Light)', cost: 1000, effect: 'You have Resistance to Air and Light damage.'},
  'dual-resistance-air-poison': {name: 'Dual Resistance(Air/Poison)', cost: 1000, effect: 'You have Resistance to Air and Poison damage.'},
  'dual-resistance-bolt-dark': {name: 'Dual Resistance(Bolt/Dark)', cost: 1000, effect: 'You have Resistance to Bolt and Dark damage.'},
  'dual-resistance-bolt-earth': {name: 'Dual Resistance(Bolt/Earth)', cost: 1000, effect: 'You have Resistance to Bolt and Earth damage.'},
  'dual-resistance-bolt-fire': {name: 'Dual Resistance(Bolt/Fire)', cost: 1000, effect: 'You have Resistance to Bolt and Fire damage.'},
  'dual-resistance-bolt-ice': {name: 'Dual Resistance(Bolt/Ice)', cost: 1000, effect: 'You have Resistance to Bolt and Ice damage.'},
  'dual-resistance-bolt-light': {name: 'Dual Resistance(Bolt/Light)', cost: 1000, effect: 'You have Resistance to Bolt and Light damage.'},
  'dual-resistance-bolt-poison': {name: 'Dual Resistance(Bolt/Poison)', cost: 1000, effect: 'You have Resistance to Bolt and Poison damage.'},
  'dual-resistance-dark-earth': {name: 'Dual Resistance(Dark/Earth)', cost: 1000, effect: 'You have Resistance to Dark and Earth damage.'},
  'dual-resistance-dark-fire': {name: 'Dual Resistance(Dark/Fire)', cost: 1000, effect: 'You have Resistance to Dark and Fire damage.'},
  'dual-resistance-dark-ice': {name: 'Dual Resistance(Dark/Ice)', cost: 1000, effect: 'You have Resistance to Dark and Ice damage.'},
  'dual-resistance-dark-light': {name: 'Dual Resistance(Dark/Light)', cost: 1000, effect: 'You have Resistance to Dark and Light damage.'},
  'dual-resistance-dark-poison': {name: 'Dual Resistance(Dark/Poison)', cost: 1000, effect: 'You have Resistance to Dark and Poison damage.'},
  'dual-resistance-earth-fire': {name: 'Dual Resistance(Earth/Fire)', cost: 1000, effect: 'You have Resistance to Earth and Fire damage.'},
  'dual-resistance-earth-ice': {name: 'Dual Resistance(Earth/Ice)', cost: 1000, effect: 'You have Resistance to Earth and Ice damage.'},
  'dual-resistance-earth-light': {name: 'Dual Resistance(Earth/Light)', cost: 1000, effect: 'You have Resistance to Earth and Light damage.'},
  'dual-resistance-earth-poison': {name: 'Dual Resistance(Earth/Poison)', cost: 1000, effect: 'You have Resistance to Earth and Poison damage.'},
  'dual-resistance-fire-ice': {name: 'Dual Resistance(Fire/Ice)', cost: 1000, effect: 'You have Resistance to Fire and Ice damage.'},
  'dual-resistance-fire-light': {name: 'Dual Resistance(Fire/Light)', cost: 1000, effect: 'You have Resistance to Fire and Light damage.'},
  'dual-resistance-fire-poison': {name: 'Dual Resistance(Fire/Poison)', cost: 1000, effect: 'You have Resistance to Fire and Poison damage.'},
  'dual-resistance-ice-light': {name: 'Dual Resistance(Ice/Light)', cost: 1000, effect: 'You have Resistance to Ice and Light damage.'},
  'dual-resistance-ice-poison': {name: 'Dual Resistance(Ice/Poison)', cost: 1000, effect: 'You have Resistance to Ice and Poison damage.'},
  'dual-resistance-light-poison': {name: 'Dual Resistance(Light/Poison)', cost: 1000, effect: 'You have Resistance to Light and Poison damage.'},
  'swordbreaker': {name: 'Swordbreaker', cost: 1000, effect: 'You have Resistance to physical damage.'},
  'immunity-air': {name: 'Immunity Air', cost: 1500, effect: 'You have Immunity to Air damage.'},
  'immunity-bolt': {name: 'Immunity Bolt', cost: 1500, effect: 'You have Immunity to Bolt damage.'},
  'immunity-dark': {name: 'Immunity Dark', cost: 1500, effect: 'You have Immunity to Dark damage.'},
  'immunity-earth': {name: 'Immunity Earth', cost: 1500, effect: 'You have Immunity to Earth damage.'},
  'immunity-fire': {name: 'Immunity Fire', cost: 1500, effect: 'You have Immunity to Fire damage.'},
  'immunity-ice': {name: 'Immunity Ice', cost: 1500, effect: 'You have Immunity to Ice damage.'},
  'immunity-light': {name: 'Immunity Light', cost: 1500, effect: 'You have Immunity to Light damage.'},
  'immunity-poison': {name: 'Immunity Poison', cost: 1500, effect: 'You have Immunity to Poison damage.'},
  'omnishield': {name: 'Omnishield', cost: 2000, effect: 'You gain a +1 bonus to Defense and Magic Defense.'},
  'perfect-health': {name: 'Perfect Health', cost: 2000, effect: 'You are immune to all status effects.'},
  'magical': {name: 'Magical', cost: 100, effect: 'The weapon targets Magic Defense instead of Defense.'},
  'hunter-beasts': {name: 'Hunter Beasts', cost: 300, effect: 'The weapon deals 5 extra damage to Beasts.'},
  'hunter-constructs': {name: 'Hunter Constructs', cost: 300, effect: 'The weapon deals 5 extra damage to Constructs.'},
  'hunter-demons': {name: 'Hunter Demons', cost: 300, effect: 'The weapon deals 5 extra damage to Demons.'},
  'hunter-elementals': {name: 'Hunter Elementals', cost: 300, effect: 'The weapon deals 5 extra damage to Elementals.'},
  'hunter-humanoids': {name: 'Hunter Humanoids', cost: 300, effect: 'The weapon deals 5 extra damage to Humanoids.'},
  'hunter-monsters': {name: 'Hunter Monsters', cost: 300, effect: 'The weapon deals 5 extra damage to Monsters.'},
  'hunter-plants': {name: 'Hunter Plants', cost: 300, effect: 'The weapon deals 5 extra damage to Plants.'},
  'hunter-undeads': {name: 'Hunter Undeads', cost: 300, effect: 'The weapon deals 5 extra damage to Undeads.'},
  'piercing': {name: 'Piercing', cost: 400, effect: 'Damage dealt by the weapon ignores Resistances.'},
  'dual-hunter-beasts-constructs': {name: 'Dual Hunter(Beasts/Constructs)', cost: 500, effect: 'The weapon deals 5 extra damage to Beasts and Constructs.'},
  'dual-hunter-beasts-demons': {name: 'Dual Hunter(Beasts/Demons)', cost: 500, effect: 'The weapon deals 5 extra damage to Beasts and Demons.'},
  'dual-hunter-beasts-elementals': {name: 'Dual Hunter(Beasts/Elementals)', cost: 500, effect: 'The weapon deals 5 extra damage to Beasts and Elementals.'},
  'dual-hunter-beasts-humanoids': {name: 'Dual Hunter(Beasts/Humanoids)', cost: 500, effect: 'The weapon deals 5 extra damage to Beasts and Humanoids.'},
  'dual-hunter-beasts-monsters': {name: 'Dual Hunter(Beasts/Monsters)', cost: 500, effect: 'The weapon deals 5 extra damage to Beasts and Monsters.'},
  'dual-hunter-beasts-plants': {name: 'Dual Hunter(Beasts/Plants)', cost: 500, effect: 'The weapon deals 5 extra damage to Beasts and Plants.'},
  'dual-hunter-beasts-undeads': {name: 'Dual Hunter(Beasts/Undeads)', cost: 500, effect: 'The weapon deals 5 extra damage to Beasts and Undeads.'},
  'dual-hunter-constructs-demons': {name: 'Dual Hunter(Constructs/Demons)', cost: 500, effect: 'The weapon deals 5 extra damage to Constructs and Demons.'},
  'dual-hunter-constructs-elementals': {name: 'Dual Hunter(Constructs/Elementals)', cost: 500, effect: 'The weapon deals 5 extra damage to Constructs and Elementals.'},
  'dual-hunter-constructs-humanoids': {name: 'Dual Hunter(Constructs/Humanoids)', cost: 500, effect: 'The weapon deals 5 extra damage to Constructs and Humanoids.'},
  'dual-hunter-constructs-monsters': {name: 'Dual Hunter(Constructs/Monsters)', cost: 500, effect: 'The weapon deals 5 extra damage to Constructs and Monsters.'},
  'dual-hunter-constructs-plants': {name: 'Dual Hunter(Constructs/Plants)', cost: 500, effect: 'The weapon deals 5 extra damage to Constructs and Plants.'},
  'dual-hunter-constructs-undeads': {name: 'Dual Hunter(Constructs/Undeads)', cost: 500, effect: 'The weapon deals 5 extra damage to Constructs and Undeads.'},
  'dual-hunter-demons-elementals': {name: 'Dual Hunter(Demons/Elementals)', cost: 500, effect: 'The weapon deals 5 extra damage to Demons and Elementals.'},
  'dual-hunter-demons-humanoids': {name: 'Dual Hunter(Demons/Humanoids)', cost: 500, effect: 'The weapon deals 5 extra damage to Demons and Humanoids.'},
  'dual-hunter-demons-monsters': {name: 'Dual Hunter(Demons/Monsters)', cost: 500, effect: 'The weapon deals 5 extra damage to Demons and Monsters.'},
  'dual-hunter-demons-plants': {name: 'Dual Hunter(Demons/Plants)', cost: 500, effect: 'The weapon deals 5 extra damage to Demons and Plants.'},
  'dual-hunter-demons-undeads': {name: 'Dual Hunter(Demons/Undeads)', cost: 500, effect: 'The weapon deals 5 extra damage to Demons and Undeads.'},
  'dual-hunter-elementals-humanoids': {name: 'Dual Hunter(Elementals/Humanoids)', cost: 500, effect: 'The weapon deals 5 extra damage to Elementals and Humanoids.'},
  'dual-hunter-elementals-monsters': {name: 'Dual Hunter(Elementals/Monsters)', cost: 500, effect: 'The weapon deals 5 extra damage to Elementals and Monsters.'},
  'dual-hunter-elementals-plants': {name: 'Dual Hunter(Elementals/Plants)', cost: 500, effect: 'The weapon deals 5 extra damage to Elementals and Plants.'},
  'dual-hunter-elementals-undeads': {name: 'Dual Hunter(Elementals/Undeads)', cost: 500, effect: 'The weapon deals 5 extra damage to Elementals and Undeads.'},
  'dual-hunter-humanoids-monsters': {name: 'Dual Hunter(Humanoids/Monsters)', cost: 500, effect: 'The weapon deals 5 extra damage to Humanoids and Monsters.'},
  'dual-hunter-humanoids-plants': {name: 'Dual Hunter(Humanoids/Plants)', cost: 500, effect: 'The weapon deals 5 extra damage to Humanoids and Plants.'},
  'dual-hunter-humanoids-undeads': {name: 'Dual Hunter(Humanoids/Undeads)', cost: 500, effect: 'The weapon deals 5 extra damage to Humanoids and Undeads.'},
  'dual-hunter-monsters-plants': {name: 'Dual Hunter(Monsters/Plants)', cost: 500, effect: 'The weapon deals 5 extra damage to Monsters and Plants.'},
  'dual-hunter-monsters-undeads': {name: 'Dual Hunter(Monsters/Undeads)', cost: 500, effect: 'The weapon deals 5 extra damage to Monsters and Undeads.'},
  'dual-hunter-plants-undeads': {name: 'Dual Hunter(Plants/Undeads)', cost: 500, effect: 'The weapon deals 5 extra damage to Plants and Undeads.'},
  'multi': {name: 'Multi', cost: 1000, effect: 'Attacks with the weapon have multi (2).'},
  'status-dazed': {name: 'Status Dazed', cost: 1500, effect: 'Each target hit by the weapon suffers dazed.'},
  'status-shaken': {name: 'Status Shaken', cost: 1500, effect: 'Each target hit by the weapon suffers shaken.'},
  'status-slow': {name: 'Status Slow', cost: 1500, effect: 'Each target hit by the weapon suffers slow.'},
  'status-weak': {name: 'Status Weak', cost: 1500, effect: 'Each target hit by the weapon suffers weak.'},
  'status-enraged': {name: 'Status Enraged', cost: 2000, effect: 'Each target hit by the weapon suffers enraged.'},
  'status-poisoned': {name: 'Status Poisoned', cost: 2000, effect: 'Each target hit by the weapon suffers poisoned).'}
}

ULTIMAFABULA.armorQualities = {
  'no-quality': {name: 'No Qualities', cost: 0, effect: ''},
  'antistatus-dazed': {name: 'Antistatus(Dazed)', cost: 500, effect: 'You are immune to dazed status effect.'},
  'antistatus-enraged': {name: 'Antistatus(Enraged)', cost: 500, effect: 'You are immune to enraged status effect.'},
  'antistatus-poisoned': {name: 'Antistatus(Poisoned)', cost: 500, effect: 'You are immune to poisoned status effect.'},
  'antistatus-shaken': {name: 'Antistatus(Shaken)', cost: 500, effect: 'You are immune to shaken status effect.'},
  'antistatus-slow': {name: 'Antistatus(Slow)', cost: 500, effect: 'You are immune to slow status effect.'},
  'antistatus-weak': {name: 'Antistatus(Weak)', cost: 500, effect: 'You are immune to weak status effect.'},
  'resistance-air': {name: 'Resistance(Air)', cost: 700, effect: 'You have Resistance to air damage type.'},
  'resistance-bolt': {name: 'Resistance(Bolt)', cost: 700, effect: 'You have Resistance to bolt damage type.'},
  'resistance-dark': {name: 'Resistance(Dark)', cost: 700, effect: 'You have Resistance to dark damage type.'},
  'resistance-earth': {name: 'Resistance(Earth)', cost: 700, effect: 'You have Resistance to earth damage type.'},
  'resistance-fire': {name: 'Resistance(Fire)', cost: 700, effect: 'You have Resistance to fire damage type.'},
  'resistance-ice': {name: 'Resistance(Ice)', cost: 700, effect: 'You have Resistance to ice damage type.'},
  'resistance-light': {name: 'Resistance(Light)', cost: 700, effect: 'You have Resistance to light damage type.'},
  'resistance-poison': {name: 'Resistance(Poison)', cost: 700, effect: 'You have Resistance to poison damage type.'},
  'dual-resistance-air-bolt': {name: 'Dual Resistance(Air/Bolt)', cost: 1000, effect: 'You have Resistance to Air and Bolt damage.'},
  'dual-resistance-air-dark': {name: 'Dual Resistance(Air/Dark)', cost: 1000, effect: 'You have Resistance to Air and Dark damage.'},
  'dual-resistance-air-earth': {name: 'Dual Resistance(Air/Earth)', cost: 1000, effect: 'You have Resistance to Air and Earth damage.'},
  'dual-resistance-air-fire': {name: 'Dual Resistance(Air/Fire)', cost: 1000, effect: 'You have Resistance to Air and Fire damage.'},
  'dual-resistance-air-ice': {name: 'Dual Resistance(Air/Ice)', cost: 1000, effect: 'You have Resistance to Air and Ice damage.'},
  'dual-resistance-air-light': {name: 'Dual Resistance(Air/Light)', cost: 1000, effect: 'You have Resistance to Air and Light damage.'},
  'dual-resistance-air-poison': {name: 'Dual Resistance(Air/Poison)', cost: 1000, effect: 'You have Resistance to Air and Poison damage.'},
  'dual-resistance-bolt-dark': {name: 'Dual Resistance(Bolt/Dark)', cost: 1000, effect: 'You have Resistance to Bolt and Dark damage.'},
  'dual-resistance-bolt-earth': {name: 'Dual Resistance(Bolt/Earth)', cost: 1000, effect: 'You have Resistance to Bolt and Earth damage.'},
  'dual-resistance-bolt-fire': {name: 'Dual Resistance(Bolt/Fire)', cost: 1000, effect: 'You have Resistance to Bolt and Fire damage.'},
  'dual-resistance-bolt-ice': {name: 'Dual Resistance(Bolt/Ice)', cost: 1000, effect: 'You have Resistance to Bolt and Ice damage.'},
  'dual-resistance-bolt-light': {name: 'Dual Resistance(Bolt/Light)', cost: 1000, effect: 'You have Resistance to Bolt and Light damage.'},
  'dual-resistance-bolt-poison': {name: 'Dual Resistance(Bolt/Poison)', cost: 1000, effect: 'You have Resistance to Bolt and Poison damage.'},
  'dual-resistance-dark-earth': {name: 'Dual Resistance(Dark/Earth)', cost: 1000, effect: 'You have Resistance to Dark and Earth damage.'},
  'dual-resistance-dark-fire': {name: 'Dual Resistance(Dark/Fire)', cost: 1000, effect: 'You have Resistance to Dark and Fire damage.'},
  'dual-resistance-dark-ice': {name: 'Dual Resistance(Dark/Ice)', cost: 1000, effect: 'You have Resistance to Dark and Ice damage.'},
  'dual-resistance-dark-light': {name: 'Dual Resistance(Dark/Light)', cost: 1000, effect: 'You have Resistance to Dark and Light damage.'},
  'dual-resistance-dark-poison': {name: 'Dual Resistance(Dark/Poison)', cost: 1000, effect: 'You have Resistance to Dark and Poison damage.'},
  'dual-resistance-earth-fire': {name: 'Dual Resistance(Earth/Fire)', cost: 1000, effect: 'You have Resistance to Earth and Fire damage.'},
  'dual-resistance-earth-ice': {name: 'Dual Resistance(Earth/Ice)', cost: 1000, effect: 'You have Resistance to Earth and Ice damage.'},
  'dual-resistance-earth-light': {name: 'Dual Resistance(Earth/Light)', cost: 1000, effect: 'You have Resistance to Earth and Light damage.'},
  'dual-resistance-earth-poison': {name: 'Dual Resistance(Earth/Poison)', cost: 1000, effect: 'You have Resistance to Earth and Poison damage.'},
  'dual-resistance-fire-ice': {name: 'Dual Resistance(Fire/Ice)', cost: 1000, effect: 'You have Resistance to Fire and Ice damage.'},
  'dual-resistance-fire-light': {name: 'Dual Resistance(Fire/Light)', cost: 1000, effect: 'You have Resistance to Fire and Light damage.'},
  'dual-resistance-fire-poison': {name: 'Dual Resistance(Fire/Poison)', cost: 1000, effect: 'You have Resistance to Fire and Poison damage.'},
  'dual-resistance-ice-light': {name: 'Dual Resistance(Ice/Light)', cost: 1000, effect: 'You have Resistance to Ice and Light damage.'},
  'dual-resistance-ice-poison': {name: 'Dual Resistance(Ice/Poison)', cost: 1000, effect: 'You have Resistance to Ice and Poison damage.'},
  'dual-resistance-light-poison': {name: 'Dual Resistance(Light/Poison)', cost: 1000, effect: 'You have Resistance to Light and Poison damage.'},
  'swordbreaker': {name: 'Swordbreaker', cost: 1000, effect: 'You have Resistance to physical damage.'},
  'immunity-air': {name: 'Immunity Air', cost: 1500, effect: 'You have Immunity to Air damage.'},
  'immunity-bolt': {name: 'Immunity Bolt', cost: 1500, effect: 'You have Immunity to Bolt damage.'},
  'immunity-dark': {name: 'Immunity Dark', cost: 1500, effect: 'You have Immunity to Dark damage.'},
  'immunity-earth': {name: 'Immunity Earth', cost: 1500, effect: 'You have Immunity to Earth damage.'},
  'immunity-fire': {name: 'Immunity Fire', cost: 1500, effect: 'You have Immunity to Fire damage.'},
  'immunity-ice': {name: 'Immunity Ice', cost: 1500, effect: 'You have Immunity to Ice damage.'},
  'immunity-light': {name: 'Immunity Light', cost: 1500, effect: 'You have Immunity to Light damage.'},
  'immunity-poison': {name: 'Immunity Poison', cost: 1500, effect: 'You have Immunity to Poison damage.'},
  'perfect-health': {name: 'Perfect Health', cost: 2000, effect: 'You are immune to all status effects.'},
  'initiative-up': {name: 'Initiative Up', cost: 500, effect: 'You gain a +4 bonus to your Initiative modifier.'},
  'accuracy-up': {name: 'Accuracy Up', cost: 1000, effect: 'You gain a +1 bonus to your Accuracy Checks.'},
  'magic-up': {name: 'Magic Up', cost: 1000, effect: 'You gain a +1 bonus to your Magic Checks.'},
  'vitality-up': {name: 'Vitality Up', cost: 1000, effect: 'When you recover HP, you recover 5 extra HP.'},
  'healing-up': {name: 'Healing Up', cost: 1500, effect: 'Spells you cast that whose effects restore Hit Points will restore 5 extra Hit Points.'},
  'spell-up': {name: 'Spell Up', cost: 2000, effect: 'Spells you cast deal 5 extra damage.'},
  'weapon-up-melee': {name: 'Weapon Up Melee', cost: 2000, effect: 'Your attacks with melee weapons deal 5 extra damage.'},
  'weapon-up-ranged': {name: 'Weapon Up Ranged', cost: 2000, effect: 'Your attacks with ranged weapons deal 5 extra damage.'}
}

ULTIMAFABULA.accessoryQualities = {
  'no-quality': {name: 'No Qualities', cost: 0, effect: ''},
  'antistatus-dazed': {name: 'Antistatus(Dazed)', cost: 500, effect: 'You are immune to dazed status effect.'},
  'antistatus-enraged': {name: 'Antistatus(Enraged)', cost: 500, effect: 'You are immune to enraged status effect.'},
  'antistatus-poisoned': {name: 'Antistatus(Poisoned)', cost: 500, effect: 'You are immune to poisoned status effect.'},
  'antistatus-shaken': {name: 'Antistatus(Shaken)', cost: 500, effect: 'You are immune to shaken status effect.'},
  'antistatus-slow': {name: 'Antistatus(Slow)', cost: 500, effect: 'You are immune to slow status effect.'},
  'antistatus-weak': {name: 'Antistatus(Weak)', cost: 500, effect: 'You are immune to weak status effect.'},
  'resistance-air': {name: 'Resistance(Air)', cost: 700, effect: 'You have Resistance to air damage type.'},
  'resistance-bolt': {name: 'Resistance(Bolt)', cost: 700, effect: 'You have Resistance to bolt damage type.'},
  'resistance-dark': {name: 'Resistance(Dark)', cost: 700, effect: 'You have Resistance to dark damage type.'},
  'resistance-earth': {name: 'Resistance(Earth)', cost: 700, effect: 'You have Resistance to earth damage type.'},
  'resistance-fire': {name: 'Resistance(Fire)', cost: 700, effect: 'You have Resistance to fire damage type.'},
  'resistance-ice': {name: 'Resistance(Ice)', cost: 700, effect: 'You have Resistance to ice damage type.'},
  'resistance-light': {name: 'Resistance(Light)', cost: 700, effect: 'You have Resistance to light damage type.'},
  'resistance-poison': {name: 'Resistance(Poison)', cost: 700, effect: 'You have Resistance to poison damage type.'},
  'amulet': {name: 'Amulet', cost: 800, effect: 'You gain a +1 bonus to Magic Defense.'},
  'bulwark': {name: 'Bulwark', cost: 800, effect: 'You gain a +1 bonus to Defense.'},
  'dual-resistance-air-bolt': {name: 'Dual Resistance(Air/Bolt)', cost: 1000, effect: 'You have Resistance to Air and Bolt damage.'},
  'dual-resistance-air-dark': {name: 'Dual Resistance(Air/Dark)', cost: 1000, effect: 'You have Resistance to Air and Dark damage.'},
  'dual-resistance-air-earth': {name: 'Dual Resistance(Air/Earth)', cost: 1000, effect: 'You have Resistance to Air and Earth damage.'},
  'dual-resistance-air-fire': {name: 'Dual Resistance(Air/Fire)', cost: 1000, effect: 'You have Resistance to Air and Fire damage.'},
  'dual-resistance-air-ice': {name: 'Dual Resistance(Air/Ice)', cost: 1000, effect: 'You have Resistance to Air and Ice damage.'},
  'dual-resistance-air-light': {name: 'Dual Resistance(Air/Light)', cost: 1000, effect: 'You have Resistance to Air and Light damage.'},
  'dual-resistance-air-poison': {name: 'Dual Resistance(Air/Poison)', cost: 1000, effect: 'You have Resistance to Air and Poison damage.'},
  'dual-resistance-bolt-dark': {name: 'Dual Resistance(Bolt/Dark)', cost: 1000, effect: 'You have Resistance to Bolt and Dark damage.'},
  'dual-resistance-bolt-earth': {name: 'Dual Resistance(Bolt/Earth)', cost: 1000, effect: 'You have Resistance to Bolt and Earth damage.'},
  'dual-resistance-bolt-fire': {name: 'Dual Resistance(Bolt/Fire)', cost: 1000, effect: 'You have Resistance to Bolt and Fire damage.'},
  'dual-resistance-bolt-ice': {name: 'Dual Resistance(Bolt/Ice)', cost: 1000, effect: 'You have Resistance to Bolt and Ice damage.'},
  'dual-resistance-bolt-light': {name: 'Dual Resistance(Bolt/Light)', cost: 1000, effect: 'You have Resistance to Bolt and Light damage.'},
  'dual-resistance-bolt-poison': {name: 'Dual Resistance(Bolt/Poison)', cost: 1000, effect: 'You have Resistance to Bolt and Poison damage.'},
  'dual-resistance-dark-earth': {name: 'Dual Resistance(Dark/Earth)', cost: 1000, effect: 'You have Resistance to Dark and Earth damage.'},
  'dual-resistance-dark-fire': {name: 'Dual Resistance(Dark/Fire)', cost: 1000, effect: 'You have Resistance to Dark and Fire damage.'},
  'dual-resistance-dark-ice': {name: 'Dual Resistance(Dark/Ice)', cost: 1000, effect: 'You have Resistance to Dark and Ice damage.'},
  'dual-resistance-dark-light': {name: 'Dual Resistance(Dark/Light)', cost: 1000, effect: 'You have Resistance to Dark and Light damage.'},
  'dual-resistance-dark-poison': {name: 'Dual Resistance(Dark/Poison)', cost: 1000, effect: 'You have Resistance to Dark and Poison damage.'},
  'dual-resistance-earth-fire': {name: 'Dual Resistance(Earth/Fire)', cost: 1000, effect: 'You have Resistance to Earth and Fire damage.'},
  'dual-resistance-earth-ice': {name: 'Dual Resistance(Earth/Ice)', cost: 1000, effect: 'You have Resistance to Earth and Ice damage.'},
  'dual-resistance-earth-light': {name: 'Dual Resistance(Earth/Light)', cost: 1000, effect: 'You have Resistance to Earth and Light damage.'},
  'dual-resistance-earth-poison': {name: 'Dual Resistance(Earth/Poison)', cost: 1000, effect: 'You have Resistance to Earth and Poison damage.'},
  'dual-resistance-fire-ice': {name: 'Dual Resistance(Fire/Ice)', cost: 1000, effect: 'You have Resistance to Fire and Ice damage.'},
  'dual-resistance-fire-light': {name: 'Dual Resistance(Fire/Light)', cost: 1000, effect: 'You have Resistance to Fire and Light damage.'},
  'dual-resistance-fire-poison': {name: 'Dual Resistance(Fire/Poison)', cost: 1000, effect: 'You have Resistance to Fire and Poison damage.'},
  'dual-resistance-ice-light': {name: 'Dual Resistance(Ice/Light)', cost: 1000, effect: 'You have Resistance to Ice and Light damage.'},
  'dual-resistance-ice-poison': {name: 'Dual Resistance(Ice/Poison)', cost: 1000, effect: 'You have Resistance to Ice and Poison damage.'},
  'dual-resistance-light-poison': {name: 'Dual Resistance(Light/Poison)', cost: 1000, effect: 'You have Resistance to Light and Poison damage.'},
  'swordbreaker': {name: 'Swordbreaker', cost: 1000, effect: 'You have Resistance to physical damage.'},
  'immunity-air': {name: 'Immunity Air', cost: 1500, effect: 'You have Immunity to Air damage.'},
  'immunity-bolt': {name: 'Immunity Bolt', cost: 1500, effect: 'You have Immunity to Bolt damage.'},
  'immunity-dark': {name: 'Immunity Dark', cost: 1500, effect: 'You have Immunity to Dark damage.'},
  'immunity-earth': {name: 'Immunity Earth', cost: 1500, effect: 'You have Immunity to Earth damage.'},
  'immunity-fire': {name: 'Immunity Fire', cost: 1500, effect: 'You have Immunity to Fire damage.'},
  'immunity-ice': {name: 'Immunity Ice', cost: 1500, effect: 'You have Immunity to Ice damage.'},
  'immunity-light': {name: 'Immunity Light', cost: 1500, effect: 'You have Immunity to Light damage.'},
  'immunity-poison': {name: 'Immunity Poison', cost: 1500, effect: 'You have Immunity to Poison damage.'},
  'omnishield': {name: 'Omnishield', cost: 2000, effect: 'You gain a +1 bonus to Defense and Magic Defense.'},
  'perfect-health': {name: 'Perfect Health', cost: 2000, effect: 'You are immune to all status effects.'},
  'damage-change-air': {name: 'Damage Change(Air)', cost: 300, effect: 'All damage dealt by your weapons, spells, and Skills becomes of a Air type.'},
  'damage-change-bolt': {name: 'Damage Change(Bolt)', cost: 300, effect: 'All damage dealt by your weapons, spells, and Skills becomes of a Bolt type.'},
  'damage-change-dark': {name: 'Damage Change(Dark)', cost: 300, effect: 'All damage dealt by your weapons, spells, and Skills becomes of a Dark type.'},
  'damage-change-earth': {name: 'Damage Change(Earth)', cost: 300, effect: 'All damage dealt by your weapons, spells, and Skills becomes of a Earth type.'},
  'damage-change-fire': {name: 'Damage Change(Fire)', cost: 300, effect: 'All damage dealt by your weapons, spells, and Skills becomes of a Fire type.'},
  'damage-change-ice': {name: 'Damage Change(Ice)', cost: 300, effect: 'All damage dealt by your weapons, spells, and Skills becomes of a Ice type.'},
  'damage-change-light': {name: 'Damage Change(Light)', cost: 300, effect: 'All damage dealt by your weapons, spells, and Skills becomes of a Light type.'},
  'damage-change-poison': {name: 'Damage Change(Poison)', cost: 300, effect: 'All damage dealt by your weapons, spells, and Skills becomes of a Poison type.'},
  'damage-change-physical': {name: 'Damage Change(Physical)', cost: 300, effect: 'All damage dealt by your weapons, spells, and Skills becomes of a Physical type.'},
  'initiative-up': {name: 'Initiative Up', cost: 500, effect: 'If you have this item equipped at the start of a conflict, you gain a +4 bonus to your Initiative modifier.'},
  'accuracy-up': {name: 'Accuracy Up', cost: 1000, effect: 'You gain a +1 bonus to your Accuracy Checks.'},
  'magic-up': {name: 'Magic Up', cost: 1000, effect: 'You gain a +1 bonus to your Magic Checks.'},
  'vitality-up': {name: 'Vitality Up', cost: 1000, effect: 'Whenever you recover Hit Points, you recover 5 extra Hit Points.'},
  'healing-up': {name: 'Healing Up', cost: 1500, effect: 'Spells you cast whose effect restores Hit Points will restore 5 extra Hit Points.'},
  'spell-up': {name: 'Spell Up', cost: 2000, effect: 'Spells you cast deal 5 extra damage.'},
  'weapon-up-melee': {name: 'Weapon Up Melee', cost: 2000, effect: 'Your attacks with melee weapons deal 5 extra damage.'},
  'weapon-up-ranged': {name: 'Weapon Up Ranged', cost: 2000, effect: 'Your attacks with ranged weapons deal 5 extra damage.'}
}

ULTIMAFABULA.inventoryItems = {
  'elixir': {name: 'Elixir', cost: '3', effect: 'Recovers 50 MP from a creature.'},
  'remedy': {name: 'Remedy', cost: '3', effect: 'Recovers 50 HP from a creature.'},
  'tonic': {name: 'Tonic', cost: '2', effect: 'Recovers a creature from an status.'},
  'fire-elemental-shard': {name: 'Fire Elemental Shard', cost: '2', effect: 'Deals 10 fire damage to a creature.'},
  'air-elemental-shard': {name: 'Air Elemental Shard', cost: '2', effect: 'Deals 10 air damage to a creature.'},
  'bolt-elemental-shard': {name: 'Bolt Elemental Shard', cost: '2', effect: 'Deals 10 bolt damage to a creature.'},
  'earth-elemental-shard': {name: 'Earth Elemental Shard', cost: '2', effect: 'Deals 10 earth damage to a creature.'},
  'ice-elemental-shard': {name: 'Ice Elemental Shard', cost: '2', effect: 'Deals 10 ice damage to a creature.'},
  'magic-tent': {name: 'Magic Tent', cost: '4', effect: 'Allows an entire group to rest in a wild area.'}
}
