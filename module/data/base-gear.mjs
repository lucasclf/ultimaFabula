import FabulaUltimaItemBase from "./base-item.mjs";

export default class FabulaUltimaGearBase extends FabulaUltimaItemBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.description = new fields.StringField({ required: true, blank: true });

    schema.cost = new fields.NumberField({...requiredInteger, initial: 0, min: 0});
    schema.quality = new fields.StringField({ initial: CONFIG.FABULA_ULTIMA.enums.weaponQualities.NO_QUALITY});
    
    schema.martial = new fields.BooleanField({initial: false});

    return schema;
  }

}