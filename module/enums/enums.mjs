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
    ONE_HAND: "one-hand",
    TWO_HAND: "two-hand"
  },
  weaponType: {
    ranged: "ranged",
    melee: "melee"
  },
  weaponCategory: {
    dagger: "dagger",
    arcane: "arcane",
    brawler: "brawler",
    sword: "sword",
    spear: "spear",
    flail: "flail",
    heavy: "heavy",
    bow: "bow",
    firearm: "firearm",
    throw: "throw"
  },
  weaponQualities: {
    NO_QUALITY: "no-quality"
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