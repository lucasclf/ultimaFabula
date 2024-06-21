// Import document classes.
import { FabulaUltimaActor } from './documents/actor.mjs';
import { FabulaUltimaItem } from './documents/item.mjs';
// Import sheet classes.
import { FabulaUltimaActorSheet } from './sheets/actor-sheet.mjs';
import { FabulaUltimaItemSheet } from './sheets/item-sheet.mjs';
// Import helper/utility classes and constants.
import { preloadHandlebarsTemplates } from './helpers/templates.mjs';
import { FABULA_ULTIMA } from './helpers/config.mjs';
// Import DataModel classes
import * as models from './data/_module.mjs';
import { insertIconIfAttrLowered } from './helpers/characterSheetHelper.mjs';
import { captalizeFirstLetter, captalizeFirstLetterOfWords, captalizeText } from './helpers/stringHelper.mjs';
import { groupJobs, hasJobsType, recoverFreeBenefits, recoverJobQuantity } from './helpers/jobHelper.mjs';
import { hasProficiency } from './helpers/utils/proficiencyHelper.mjs';
import { recoverQualityInfo, recoverQualityName } from './helpers/utils/qualityHelper.mjs';
import { isEquiped, recoverAccuracyWeapon, recoverDefense } from './helpers/utils/gearHelper.mjs';

/* -------------------------------------------- */
/*  Init Hook                                   */
/* -------------------------------------------- */

Hooks.once('init', function () {
  // Add utility classes to the global game object so that they're more easily
  // accessible in global contexts.
  game.fabulaultima = {
    FabulaUltimaActor,
    FabulaUltimaItem,
    rollItemMacro,
  };

  // Add custom constants for configuration.
  CONFIG.FABULA_ULTIMA = FABULA_ULTIMA;

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: '1d20 + @abilities.dex.mod',
    decimals: 2,
  };

  // Define custom Document and DataModel classes
  CONFIG.Actor.documentClass = FabulaUltimaActor;

  // Note that you don't need to declare a DataModel
  // for the base actor/item classes - they are included
  // with the Character/NPC as part of super.defineSchema()
  CONFIG.Actor.dataModels = {
    character: models.FabulaUltimaCharacter,
    npc: models.FabulaUltimaNPC
  }
  CONFIG.Item.documentClass = FabulaUltimaItem;
  CONFIG.Item.dataModels = {
    item: models.FabulaUltimaItem,
    job: models.FabulaUltimaJob,
    weapon: models.FabulaUltimaWeapon,
    armor: models.FabulaUltimaArmor,
    shield: models.FabulaUltimaShield,
    accessory: models.FabulaUltimaAccessory,
    ability: models.FabulaUltimaAbility,
    spell: models.FabulaUltimaSpell
  }

  // Active Effects are never copied to the Actor,
  // but will still apply to the Actor from within the Item
  // if the transfer property on the Active Effect is true.
  CONFIG.ActiveEffect.legacyTransferral = false;

  // Register sheet application classes
  Actors.unregisterSheet('core', ActorSheet);
  Actors.registerSheet('fabula-ultima', FabulaUltimaActorSheet, {
    makeDefault: true,
    label: 'FABULA_ULTIMA.SheetLabels.Actor',
  });
  Items.unregisterSheet('core', ItemSheet);
  Items.registerSheet('fabula-ultima', FabulaUltimaItemSheet, {
    makeDefault: true,
    label: 'FABULA_ULTIMA.SheetLabels.Item',
  });

  // Preload Handlebars templates.
  return preloadHandlebarsTemplates();
});

/* -------------------------------------------- */
/*  Handlebars Helpers                          */
/* -------------------------------------------- */

// If you need to add Handlebars helpers, here is a useful example:
Handlebars.registerHelper('toLowerCase', function (str) {
  return str.toLowerCase();
});

Handlebars.registerHelper('console', function (obj) {
  console.log(obj);
});

Handlebars.registerHelper('literal', function(value) {
  return new Handlebars.SafeString(value);
});

Handlebars.registerHelper('insertIconIfAttrLowered', function(attr, conditions) {
  return insertIconIfAttrLowered(attr, conditions);
});

Handlebars.registerHelper('captalizeFirstLetter', function(text) {
  return captalizeFirstLetter(text);
});

Handlebars.registerHelper('captalizeText', function(text) {
  return captalizeText(text);
});

Handlebars.registerHelper('captalizeFirstLetterOfWords', function(text) {
  return captalizeFirstLetterOfWords(text);
});

Handlebars.registerHelper('recoverFreeBenefits', function(job) {
  return recoverFreeBenefits(job);
});

Handlebars.registerHelper('hasJobsType', function(jobs, jobType,options){

  if(hasJobsType(jobs, jobType)){
    return options.fn(this);
  }

  return;
})

Handlebars.registerHelper('groupJobs', function(jobs, groupType){
  return groupJobs(jobs, groupType);
})


Handlebars.registerHelper('recoverJobQuantity', function(jobs, jobType){

  return recoverJobQuantity(jobs, jobType);
})

Handlebars.registerHelper('hasProficiency', function(proficiencies) {
  return hasProficiency(proficiencies);
});

Handlebars.registerHelper('recoverQualityName', function(qualityName) {
  return recoverQualityName(qualityName);
});

Handlebars.registerHelper('recoverQualityInfo', function(qualityName) {
  return recoverQualityInfo(qualityName);
});

Handlebars.registerHelper('recoverAccuracyWeapon', function(weapon) {
  return recoverAccuracyWeapon(weapon);
  
});

Handlebars.registerHelper('isEquiped', function(gearId, actorGearId) {
  return isEquiped(gearId, actorGearId);
})

Handlebars.registerHelper('recoverDefense', function(defenseGear, defenseType) {
  return recoverDefense(defenseGear, defenseType);
})


/* -------------------------------------------- */
/*  Ready Hook                                  */
/* -------------------------------------------- */

Hooks.once('ready', function () {
  // Wait to register hotbar drop hook on ready so that modules could register earlier if they want to
  Hooks.on('hotbarDrop', (bar, data, slot) => createItemMacro(data, slot));
});

/* -------------------------------------------- */
/*  Hotbar Macros                               */
/* -------------------------------------------- */

/**
 * Create a Macro from an Item drop.
 * Get an existing item macro if one exists, otherwise create a new one.
 * @param {Object} data     The dropped data
 * @param {number} slot     The hotbar slot to use
 * @returns {Promise}
 */
async function createItemMacro(data, slot) {
  // First, determine if this is a valid owned item.
  if (data.type !== 'Item') return;
  if (!data.uuid.includes('Actor.') && !data.uuid.includes('Token.')) {
    return ui.notifications.warn(
      'You can only create macro buttons for owned Items'
    );
  }
  // If it is, retrieve it based on the uuid.
  const item = await Item.fromDropData(data);

  // Create the macro command using the uuid.
  const command = `game.fabulaultima.rollItemMacro("${data.uuid}");`;
  let macro = game.macros.find(
    (m) => m.name === item.name && m.command === command
  );
  if (!macro) {
    macro = await Macro.create({
      name: item.name,
      type: 'script',
      img: item.img,
      command: command,
      flags: { 'fabula-ultima.itemMacro': true },
    });
  }
  game.user.assignHotbarMacro(macro, slot);
  return false;
}

/**
 * Create a Macro from an Item drop.
 * Get an existing item macro if one exists, otherwise create a new one.
 * @param {string} itemUuid
 */
function rollItemMacro(itemUuid) {
  // Reconstruct the drop data so that we can load the item.
  const dropData = {
    type: 'Item',
    uuid: itemUuid,
  };
  // Load the item from the uuid.
  Item.fromDropData(dropData).then((item) => {
    // Determine if the item loaded and if it's an owned item.
    if (!item || !item.parent) {
      const itemName = item?.name ?? itemUuid;
      return ui.notifications.warn(
        `Could not find item ${itemName}. You may need to delete and recreate this macro.`
      );
    }

    // Trigger the item roll
    item.roll();
  });
}
