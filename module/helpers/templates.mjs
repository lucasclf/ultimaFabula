/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    // Actor partials.
    'systems/fabula-ultima/templates/actor/parts/powers/actor-abilities.hbs',
    'systems/fabula-ultima/templates/actor/parts/actor-attributes.hbs',
    'systems/fabula-ultima/templates/actor/parts/actor-gears.hbs',
    'systems/fabula-ultima/templates/actor/parts/gears/actor-gears-weapons.hbs',
    'systems/fabula-ultima/templates/actor/parts/gears/actor-gears-accessories.hbs',
    'systems/fabula-ultima/templates/actor/parts/gears/actor-gears-armors.hbs',
    'systems/fabula-ultima/templates/actor/parts/actor-jobs.hbs',
    'systems/fabula-ultima/templates/actor/parts/jobs/actor-jobs-job.hbs',
    'systems/fabula-ultima/templates/actor/parts/actor-spells.hbs',
    'systems/fabula-ultima/templates/actor/parts/actor-actions.hbs',
    'systems/fabula-ultima/templates/actor/parts/actor-abilities-select.hbs',
    // Item partials
    'systems/fabula-ultima/templates/item/parts/item-effects.hbs',
  ]);
};
