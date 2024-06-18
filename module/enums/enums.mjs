/**
 * Enum for common colors.
 * @readonly
 * @enum {{name: string}}
 */
export const enums = Object.freeze({
  attributes: {
    DEX: "dex",
    INS: "ins",
    WLP: "wlp",
    MIG: "mig"
  },
  weaponGrip: {
    ONE_HAND: "one_hand",
    TWO_HAND: "two_hand"
  },
  weaponType: {
    RANGED: "ranged",
    MELEE: "melee"
  },
  weaponCategory: {
    DAGGER: "dagger",
    ARCANE: "arcane",
    BRAWLER: "brawler",
    SWORD: "sword",
    SPEAR: "spear",
    FLAIL: "flail",
    HEAVY: "heavy",
    BOW: "bow",
    FIREARM: "firearm",
    THROW: "throw"
  },
  weaponQualities: {
    NO_QUALITY: "no_quality",
    ANTISTATUS_DAZED: "antistatus_dazed",
    ANTISTATUS_ENRAGED: "antistatus_enraged",
    ANTISTATUS_POISONED: "antistatus_poisoned",
    ANTISTATUS_SHAKEN: "antistatus_shaken",
    ANTISTATUS_SLOW: "antistatus_slow",
    ANTISTATUS_WEAK: "antistatus_weak",
    RESISTANCE_AIR: "resistance_air",
    RESISTANCE_BOLT: "resistance_bolt",
    RESISTANCE_DARK: "resistance_dark",
    RESISTANCE_EARTH: "resistance_earth",
    RESISTANCE_FIRE: "resistance_fire",
    RESISTANCE_ICE: "resistance_ice",
    RESISTANCE_LIGHT: "resistance_light",
    RESISTANCE_POISON: "resistance_poison",
    AMULET: "amulet",
    BULWARK: "bulwark",
    DUAL_RESISTANCE_AIR_BOLT: "dual_resistance_air_bolt",
    DUAL_RESISTANCE_AIR_DARK: "dual_resistance_air_dark",
    DUAL_RESISTANCE_AIR_EARTH: "dual_resistance_air_earth",
    DUAL_RESISTANCE_AIR_FIRE: "dual_resistance_air_fire",
    DUAL_RESISTANCE_AIR_ICE: "dual_resistance_air_ice",
    DUAL_RESISTANCE_AIR_LIGHT: "dual_resistance_air_light",
    DUAL_RESISTANCE_AIR_POISON: "dual_resistance_air_poison",
    DUAL_RESISTANCE_BOLT_DARK: "dual_resistance_bolt_dark",
    DUAL_RESISTANCE_BOLT_EARTH: "dual_resistance_bolt_earth",
    DUAL_RESISTANCE_BOLT_FIRE: "dual_resistance_bolt_fire",
    DUAL_RESISTANCE_BOLT_ICE: "dual_resistance_bolt_ice",
    DUAL_RESISTANCE_BOLT_LIGHT: "dual_resistance_bolt_light",
    DUAL_RESISTANCE_BOLT_POISON: "dual_resistance_bolt_poison",
    DUAL_RESISTANCE_DARK_EARTH: "dual_resistance_dark_earth",
    DUAL_RESISTANCE_DARK_FIRE: "dual_resistance_dark_fire",
    DUAL_RESISTANCE_DARK_ICE: "dual_resistance_dark_ice",
    DUAL_RESISTANCE_DARK_LIGHT: "dual_resistance_dark_light",
    DUAL_RESISTANCE_DARK_POISON: "dual_resistance_dark_poison",
    DUAL_RESISTANCE_EARTH_FIRE: "dual_resistance_earth_fire",
    DUAL_RESISTANCE_EARTH_ICE: "dual_resistance_earth_ice",
    DUAL_RESISTANCE_EARTH_LIGHT: "dual_resistance_earth_light",
    DUAL_RESISTANCE_EARTH_POISON: "dual_resistance_earth_poison",
    DUAL_RESISTANCE_FIRE_ICE: "dual_resistance_fire_ice",
    DUAL_RESISTANCE_FIRE_LIGHT: "dual_resistance_fire_light",
    DUAL_RESISTANCE_FIRE_POISON: "dual_resistance_fire_poison",
    DUAL_RESISTANCE_ICE_LIGHT: "dual_resistance_ice_light",
    DUAL_RESISTANCE_ICE_POISON: "dual_resistance_ice_poison",
    DUAL_RESISTANCE_LIGHT_POISON: "dual_resistance_light_poison",
    SWORDBREAKER: "swordbreaker",
    IMMUNITY_AIR: "immunity_air",
    IMMUNITY_BOLT: "immunity_bolt",
    IMMUNITY_DARK: "immunity_dark",
    IMMUNITY_EARTH: "immunity_earth",
    IMMUNITY_FIRE: "immunity_fire",
    IMMUNITY_ICE: "immunity_ice",
    IMMUNITY_LIGHT: "immunity_light",
    IMMUNITY_POISON: "immunity_poison",
    OMNISHIELD: "omnishield",
    PERFECT_HEALTH: "perfect_health",
    MAGICAL: "magical",
    HUNTER_BEASTS: "hunter_beasts",
    HUNTER_CONSTRUCTS: "hunter_constructs",
    HUNTER_DEMONS: "hunter_demons",
    HUNTER_ELEMENTALS: "hunter_elementals",
    HUNTER_HUMANOIDS: "hunter_humanoids",
    HUNTER_MONSTERS: "hunter_monsters",
    HUNTER_PLANTS: "hunter_plants",
    HUNTER_UNDEADS: "hunter_undeads",
    PIERCING: "piercing",
    DUAL_HUNTER_BEASTS_CONSTRUCTS: "dual_hunter_beasts_constructs",
    DUAL_HUNTER_BEASTS_DEMONS: "dual_hunter_beasts_demons",
    DUAL_HUNTER_BEASTS_ELEMENTALS: "dual_hunter_beasts_elementals",
    DUAL_HUNTER_BEASTS_HUMANOIDS: "dual_hunter_beasts_humanoids",
    DUAL_HUNTER_BEASTS_MONSTERS: "dual_hunter_beasts_monsters",
    DUAL_HUNTER_BEASTS_PLANTS: "dual_hunter_beasts_plants",
    DUAL_HUNTER_BEASTS_UNDEADS: "dual_hunter_beasts_undeads",
    DUAL_HUNTER_CONSTRUCTS_DEMONS: "dual_hunter_constructs_demons",
    DUAL_HUNTER_CONSTRUCTS_ELEMENTALS: "dual_hunter_constructs_elementals",
    DUAL_HUNTER_CONSTRUCTS_HUMANOIDS: "dual_hunter_constructs_humanoids",
    DUAL_HUNTER_CONSTRUCTS_MONSTERS: "dual_hunter_constructs_monsters",
    DUAL_HUNTER_CONSTRUCTS_PLANTS: "dual_hunter_constructs_plants",
    DUAL_HUNTER_CONSTRUCTS_UNDEADS: "dual_hunter_constructs_undeads",
    DUAL_HUNTER_DEMONS_ELEMENTALS: "dual_hunter_demons_elementals",
    DUAL_HUNTER_DEMONS_HUMANOIDS: "dual_hunter_demons_humanoids",
    DUAL_HUNTER_DEMONS_MONSTERS: "dual_hunter_demons_monsters",
    DUAL_HUNTER_DEMONS_PLANTS: "dual_hunter_demons_plants",
    DUAL_HUNTER_DEMONS_UNDEADS: "dual_hunter_demons_undeads",
    DUAL_HUNTER_ELEMENTALS_HUMANOIDS: "dual_hunter_elementals_humanoids",
    DUAL_HUNTER_ELEMENTALS_MONSTERS: "dual_hunter_elementals_monsters",
    DUAL_HUNTER_ELEMENTALS_PLANTS: "dual_hunter_elementals_plants",
    DUAL_HUNTER_ELEMENTALS_UNDEADS: "dual_hunter_elementals_undeads",
    DUAL_HUNTER_HUMANOIDS_MONSTERS: "dual_hunter_humanoids_monsters",
    DUAL_HUNTER_HUMANOIDS_PLANTS: "dual_hunter_humanoids_plants",
    DUAL_HUNTER_HUMANOIDS_UNDEADS: "dual_hunter_humanoids_undeads",
    DUAL_HUNTER_MONSTERS_PLANTS: "dual_hunter_monsters_plants",
    DUAL_HUNTER_MONSTERS_UNDEADS: "dual_hunter_monsters_undeads", 
    DUAL_HUNTER_PLANTS_UNDEADS: "dual_hunter_plants_undeads",
    MULTI: "multi",
    STATUS_DAZED: "status_dazed",
    STATUS_SHAKEN: "status_shaken",
    STATUS_SLOW: "status_slow",
    STATUS_WEAK: "status_weak",
    STATUS_ENRAGED: "status_enraged",
    STATUS_POISONED: "status_poisoned"
  },
  weaponDamageType: {
    PHYSICAL: "physical", 
    AIR: "air", 
    BOLT: "bolt", 
    DARK: "dark", 
    EARTH: "earth", 
    FIRE: "fire", 
    ICE: "ice", 
    LIGHT: "light", 
    POISON: "poison"
  }
});