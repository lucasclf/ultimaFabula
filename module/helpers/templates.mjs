/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
 export const preloadHandlebarsTemplates = async function() {
  return loadTemplates([

    // Actor partials.
    "systems/ultimaFabula/templates/actor/parts/actor-jobs.html",
    "systems/ultimaFabula/templates/actor/parts/actor-gears.html",
    "systems/ultimaFabula/templates/actor/parts/actor-spells.html",
    "systems/ultimaFabula/templates/actor/parts/actor-skills.html",
    "systems/ultimaFabula/templates/actor/parts/actor-actions.html",
    "systems/ultimaFabula/templates/actor/parts/actor-attributes.html",
  ]);
};
