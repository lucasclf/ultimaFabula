import FabulaUltimaActorBase from "./base-actor.mjs";

export default class FabulaUltimaCharacter extends FabulaUltimaActorBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.defenses = new fields.SchemaField({
        physical: new fields.SchemaField({
          value: new fields.NumberField({ ...requiredInteger, initial: 0 })
        }),
        magical: new fields.SchemaField({
          value: new fields.NumberField({ ...requiredInteger, initial: 1 })
        })
    });

    schema.initiative = new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 2 })
    })

    // Iterate over attribute names and create a new SchemaField for each.
    schema.attributes = new fields.SchemaField(Object.keys(CONFIG.FABULA_ULTIMA.attributes).reduce((obj, attribute) => {
      obj[attribute] = new fields.SchemaField({
        value: new fields.StringField(),
      });
      return obj;
    }, {}));

    return schema;
  }

  prepareDerivedData() {
    // Loop through attribute scores, and add their modifiers to our sheet output.
    for (const key in this.attributes) {
      // Calculate the modifier using d20 rules.
      this.attributes[key].mod = Math.floor((this.attribute[key].value - 10) / 2);
      // Handle ability label localization.
      this.attributes[key].label = game.i18n.localize(CONFIG.FABULA_ULTIMA.attributes[key]) ?? key;
    }
  }

  getRollData() {
    const data = {};

    // Copy the ability scores to the top level, so that rolls can use
    // formulas like `@str.mod + 4`.
    if (this.attributes) {
      for (let [k,v] of Object.entries(this.attributes)) {
        data[k] = foundry.utils.deepClone(v);
      }
    }

    data.physicalDefense = this.defenses.physical.value;
    data.magicalDefense = this.defenses.physical.value;
    data.initiative = this.initiative.value;

    return data
  }
}