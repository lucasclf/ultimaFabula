// Import document classes.
import { ultimaFabulaActor } from "./documents/actor.mjs";
import { ultimaFabulaItem } from "./documents/item.mjs";
// Import sheet classes.
import { ultimaFabulaActorSheet } from "./sheets/actor-sheet.mjs";
import { ultimaFabulaItemSheet } from "./sheets/item-sheet.mjs";
// Import helper/utility classes and constants.
import { preloadHandlebarsTemplates } from "./helpers/templates.mjs";
import { ULTIMAFABULA } from "./helpers/config.mjs";
import { captalizeFirstLetter, captalizeText, extractAttrDiceValue, manipuleStudyCss, recoverActorJobs, recoverJob } from "./helpers/genericHelper.mjs";
import { recoverQualityInfo } from "./helpers/qualitiesHelper.mjs";
import { shouldDisableStatusCheck } from "./helpers/statusHelper.mjs";
import { toogleGearButton } from "./helpers/equipment.mjs";
import RenderAttack from "./apps/RenderAttackModal.mjs";

/* -------------------------------------------- */
/*  Init Hook                                   */
/* -------------------------------------------- */

Hooks.once('init', async function() {

  // Add utility classes to the global game object so that they're more easily
  // accessible in global contexts.
  game.ultimaFabula = {
    applications: {
      MakeAttack: RenderAttack
    },
    ultimaFabulaActor,
    ultimaFabulaItem,
    rollItemMacro
  };

  // Add custom constants for configuration.
  CONFIG.ULTIMAFABULA = ULTIMAFABULA;

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "@initiative + @attributes.actual.insight + @attributes.actual.dexterity",
    decimals: 2
  };

  // Define custom Document classes
  CONFIG.Actor.documentClass = ultimaFabulaActor;
  CONFIG.Item.documentClass = ultimaFabulaItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("ultimaFabula", ultimaFabulaActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("ultimaFabula", ultimaFabulaItemSheet, { makeDefault: true });

  // Preload Handlebars templates.
  return preloadHandlebarsTemplates();
});

/* -------------------------------------------- */
/*  Handlebars Helpers                          */
/* -------------------------------------------- */

// If you need to add Handlebars helpers, here are a few useful examples:
Handlebars.registerHelper('concat', function() {
  var outStr = '';
  for (var arg in arguments) {
    if (typeof arguments[arg] != 'object') {
      outStr += arguments[arg];
    }
  }
  return outStr;
});

Handlebars.registerHelper('toLowerCase', function(str) {
  return str.toLowerCase();
});

Handlebars.registerHelper('getAbbreviation', function(attr){
  return ULTIMAFABULA.attributesAbbreviation[attr] || "";
})

Handlebars.registerHelper('getTotalValue', function(firstValue, secondValue){
  return firstValue + secondValue;
})

Handlebars.registerHelper('getAttributeValue', function(attribute, charAttributes){
  
  return charAttributes[attribute];
})

Handlebars.registerHelper('getAttrDiceValue', function(attr){

  return extractAttrDiceValue(attr);
})

Handlebars.registerHelper('recoverQualityInfo', function(itemType, infoType, quality){

  return recoverQualityInfo(itemType, infoType, quality);
})

Handlebars.registerHelper('shouldDisableStatusCheck', function(statusType, char, options){

  if(shouldDisableStatusCheck(statusType, char)){
    return options.fn(this);
  }
  return "";
})

Handlebars.registerHelper('toogleGearButton', function(actor, item){
  return toogleGearButton(actor, item)
})

Handlebars.registerHelper('manipuleStudyCss', function(resultTotal, minResult, maxResult) {
  return manipuleStudyCss(resultTotal, minResult, maxResult);
});

Handlebars.registerHelper('recoverActorJobs', function(actor){
  return recoverActorJobs(actor);
})

Handlebars.registerHelper('recoverJob', function(jobList, jobId){
  
  return recoverJob(jobList, jobId);
})

Handlebars.registerHelper('captalizeText', function(text){
  return captalizeText(text);
})

Handlebars.registerHelper('captalizeFirstLetter',function(text){
  return captalizeFirstLetter(text);
})


Handlebars.registerHelper('console', function(item){

  console.log("CQN || CONSOLE")

  console.log("ITEM")
  console.log(item)
})




/* -------------------------------------------- */
/*  Ready Hook                                  */
/* -------------------------------------------- */

Hooks.once("ready", async function() {
  // Wait to register hotbar drop hook on ready so that modules could register earlier if they want to
  Hooks.on("hotbarDrop", (bar, data, slot) => createItemMacro(data, slot));
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
  if (data.type !== "Item") return;
  if (!("data" in data)) return ui.notifications.warn("You can only create macro buttons for owned Items");
  const item = data.data;

  // Create the macro command
  const command = `game.ultimaFabula.rollItemMacro("${item.name}");`;
  let macro = game.macros.find(m => (m.name === item.name) && (m.command === command));
  if (!macro) {
    macro = await Macro.create({
      name: item.name,
      type: "script",
      img: item.img,
      command: command,
      flags: { "ultimaFabula.itemMacro": true }
    });
  }
  game.user.assignHotbarMacro(macro, slot);
  return false;
}

/**
 * Create a Macro from an Item drop.
 * Get an existing item macro if one exists, otherwise create a new one.
 * @param {string} itemName
 * @return {Promise}
 */
function rollItemMacro(itemName) {
  const speaker = ChatMessage.getSpeaker();
  let actor;
  if (speaker.token) actor = game.actors.tokens[speaker.token];
  if (!actor) actor = game.actors.get(speaker.actor);
  const item = actor ? actor.items.find(i => i.name === itemName) : null;
  if (!item) return ui.notifications.warn(`Your controlled Actor does not have an item named ${itemName}`);

  // Trigger the item roll
  return item.roll();
}