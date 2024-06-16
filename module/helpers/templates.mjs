/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    // Actor partials.
    'systems/fabula-ultima/templates/actor/parts/actor-abilities.hbs',
    'systems/fabula-ultima/templates/actor/parts/actor-attributes.hbs',
    'systems/fabula-ultima/templates/actor/parts/actor-gears.hbs',
    'systems/fabula-ultima/templates/actor/parts/actor-jobs.hbs',
    'systems/fabula-ultima/templates/actor/parts/actor-spells.hbs',
    'systems/fabula-ultima/templates/actor/parts/actor-actions.hbs',
    // Item partials
    'systems/fabula-ultima/templates/item/parts/item-effects.hbs',
  ]);
};
