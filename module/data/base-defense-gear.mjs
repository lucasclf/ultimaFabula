import FabulaUltimaGearBase from "./base-gear.mjs";

export default class FabulaUltimaDefenseGearBase extends FabulaUltimaGearBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.bonus = new fields.SchemaField({
      defense: new fields.NumberField({...requiredInteger, initial: 0}),
      magicDefense: new fields.NumberField({...requiredInteger, initial: 0})
    })

    return schema;
  }

}