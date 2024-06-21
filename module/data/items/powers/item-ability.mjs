import FabulaUltimaItemBase from "../../base-item.mjs";

export default class FabulaUltimaAbility extends FabulaUltimaItemBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredField = { required: true, nullable: false };
    const requiredInteger = { ...requiredField, integer: true };
    const schema = super.defineSchema();

    schema.level = new fields.SchemaField({
      actual: new fields.NumberField({ ...requiredInteger, initial: 0}),
      max: new fields.NumberField({ ...requiredInteger, initial: 1})
    });

    schema.rollInfo = new fields.SchemaField({
      method: new fields.StringField({ initial: CONFIG.FABULA_ULTIMA.enums.rollMethods.ability.NOBODY }),
      attr: new fields.SchemaField({
        firstAttr: new fields.StringField({ initial: CONFIG.FABULA_ULTIMA.enums.attributes.MIG }),
        secondAttr: new fields.StringField({ initial: CONFIG.FABULA_ULTIMA.enums.attributes.MIG })
      }),
      attrBonus: new fields.NumberField({ ...requiredInteger, initial: 1 }),
      levelBonus: new fields.NumberField({ ...requiredInteger, initial: 1 }),
      free: new fields.StringField({ blank: true })
    });

    schema.job = new fields.StringField({ blank: true });

    return schema;
  }

  prepareDerivedData() {
  }
}