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
  von: 'FABULA_ULTIMA.Attributes.Wlp.long',
};

FABULA_ULTIMA.abilityAbbreviations = {
  dex: 'FABULA_ULTIMA.Attributes.Dex.abbr',
  ins: 'FABULA_ULTIMA.Attributes.Ins.abbr',
  mig: 'FABULA_ULTIMA.Attributes.Mig.abbr',
  von: 'FABULA_ULTIMA.Attributes.Wlp.abbr'
};

FABULA_ULTIMA.defenses = {
  physical: 'FABULA_ULTIMA.Defenses.physical.name',
  magical: 'FABULA_ULTIMA.Defenses.magical.name'
};

FABULA_ULTIMA.initiative = 'FABULA_ULTIMA.initiative.name';

//Utilitários

FABULA_ULTIMA.attributeDice = {
  'd6': 'D6',
  'd8': 'D8',
  'd10': 'D10',
  'd12': 'D12'
};