import FabulaUltimaDefenseGearBase from "../../base-defense-gear.mjs";

export default class FabulaUltimaArmor extends FabulaUltimaDefenseGearBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    
    schema.attr = new fields.SchemaField({
      defense: new fields.StringField({initial: CONFIG.FABULA_ULTIMA.enums.attributes.MIG}),
      magicDefense: new fields.StringField({initial: CONFIG.FABULA_ULTIMA.enums.attributes.MIG})
    })

    schema.initiative = new fields.NumberField({...requiredInteger, initial: 0});
    return schema;
  }

  prepareDerivedData() {
    // Build the formula dynamically using string interpolation
    const roll = this.roll;

    this.formula = ``
  }
}


