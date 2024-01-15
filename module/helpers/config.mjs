export const ULTIMAFABULA = {};

// Define constants here, such as:
ULTIMAFABULA.foobar = {
  'bas': 'ULTIMAFABULA.bas',
  'bar': 'ULTIMAFABULA.bar'
};

ULTIMAFABULA.elementType = {
  'physical': 'physical', 
  'air': 'air', 
  'bolt': 'bolt', 
  'dark': 'dark', 
  'earth': 'earth', 
  'fire': 'fire', 
  'ice': 'ice', 
  'light': 'light', 
  'poison': 'poison'
}

ULTIMAFABULA.weaponType = {
  'sword': 'sword',
  'axe': 'axe'
}

ULTIMAFABULA.gripType = {
  'one-handed': 'One-handed',
  'two-handed': 'Two-handed'
}

ULTIMAFABULA.attackType = {
  'ranged': 'ranged',
  'melee': 'melee'
}

ULTIMAFABULA.attributeDice = {
  'd6': 'd6',
  'd8': 'd8',
  'd10': 'd10',
  'd12': 'd12'
}

ULTIMAFABULA.attributes = {
  'might': 'might',
  'dexterity': 'dexterity',
  'insight': 'insight',
  'willpower': 'willpower'
}

ULTIMAFABULA.attributesAbbreviation = {
  'might': 'MIG',
  'dexterity': 'DEX',
  'insight': 'INS',
  'willpower': 'WLP'
}

ULTIMAFABULA.defeniveItemType = {
  'armor': 'armor',
  'shield': 'shield'
}

ULTIMAFABULA.spellDuration = {
  'instantaneous': 'inst',
  'scene': 'scene'
}

ULTIMAFABULA.spellTarget = {
  'one-equip': '1 equip',
  'three-creatures': '3 creatures',
  'one-creature': '1 creature',
  'special': 'special',
  'self': 'self',
  'one-equiped-weapon': '1 equiped weapon',
  'one-weapon': '1 weapon'
}

ULTIMAFABULA.weaponQualities = {
  'no-quality': {name: 'No Qualities', cost: 0, effect: ''},
  'antistatus': {name: 'Antistatus', cost: 500, effect: 'You are immune to a single status effect.'},
  'resistance': {name: 'Resistance', cost: 700, effect: 'You have Resistance to a single damage type (not physical damage).'},
  'amulet': {name: 'Amulet', cost: 800, effect: 'You gain a +1 bonus to Magic Defense.'},
  'bulwark': {name: 'Bulwark', cost: 800, effect: 'You gain a +1 bonus to Defense.'},
  'dual-resistance': {name: 'Dual Resistance', cost: 1000, effect: 'You have Resistance to two damage types (not physical damage).'},
  'swordbreaker': {name: 'Swordbreaker', cost: 1000, effect: 'You have Resistance to physical damage.'},
  'immunity': {name: 'Immunity', cost: 1500, effect: 'You have Immunity to a single damage type (not physical damage).'},
  'omnishield': {name: 'Omnishield', cost: 2000, effect: 'You gain a +1 bonus to Defense and Magic Defense.'},
  'perfect-health': {name: 'Perfect Health', cost: 2000, effect: 'You are immune to all status effects.'},
  'magical': {name: 'Magical', cost: 100, effect: 'The weapon targets Magic Defense instead of Defense.'},
  'hunter': {name: 'Hunter', cost: 300, effect: 'The weapon deals 5 extra damage to creatures of a particular Species.'},
  'piercing': {name: 'Piercing', cost: 400, effect: 'Damage dealt by the weapon ignores Resistances.'},
  'dual-hunter': {name: 'Dual Hunter', cost: 500, effect: 'The weapon deals 5 extra damage to creatures belonging to one of two particular Species.'},
  'multi': {name: 'Multi', cost: 1000, effect: 'Attacks with the weapon have multi (2).'},
  'status': {name: 'Status', cost: 1500, effect: 'Each target hit by the weapon suffers (choose one: dazed, shaken, slow, weak).'},
  'status-plus': {name: 'Status Plus', cost: 2000, effect: 'Each target hit by the weapon suffers (choose one: enraged, poisoned).'}
}