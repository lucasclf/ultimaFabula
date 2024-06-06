import FabulaUltimaActorBase from "./base-actor.mjs";

export default class FabulaUltimaCharacter extends FabulaUltimaActorBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.attributes = new fields.SchemaField({
      defenses: new fields.SchemaField({
        physical: new fields.SchemaField({
          value: new fields.NumberField({ ...requiredInteger, initial: 0 })
        }),
        magical: new fields.SchemaField({
          value: new fields.NumberField({ ...requiredInteger, initial: 1 })
        })
      }),
      initiative: new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 2 })
      })
    });

    // Iterate over ability names and create a new SchemaField for each.
    schema.abilities = new fields.SchemaField(Object.keys(CONFIG.FABULA_ULTIMA.abilities).reduce((obj, ability) => {
      obj[ability] = new fields.SchemaField({
        value: new fields.StringField(),
      });
      return obj;
    }, {}));

    return schema;
  }

  prepareDerivedData() {
    // Loop through ability scores, and add their modifiers to our sheet output.
    for (const key in this.abilities) {
      // Calculate the modifier using d20 rules.
      this.abilities[key].mod = Math.floor((this.abilities[key].value - 10) / 2);
      // Handle ability label localization.
      this.abilities[key].label = game.i18n.localize(CONFIG.FABULA_ULTIMA.abilities[key]) ?? key;
    }
  }

  getRollData() {
    const data = {};

    // Copy the ability scores to the top level, so that rolls can use
    // formulas like `@str.mod + 4`.
    if (this.abilities) {
      for (let [k,v] of Object.entries(this.abilities)) {
        data[k] = foundry.utils.deepClone(v);
      }
    }

    data.physicalDefense = this.attributes.defenses.physical.value;
    data.magicalDefense = this.attributes.defenses.physical.value;
    data.initiative = this.attributes.initiative.value;

    return data
  }
}