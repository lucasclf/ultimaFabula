import FabulaUltimaItemBase from "../base-item.mjs";

export default class FabulaUltimaJob extends FabulaUltimaItemBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredField = {required: true, nullable: false};
    const requiredInteger = { ...requiredField, integer: true };
    const schema = super.defineSchema();

    schema.casterBenefits = new fields.SchemaField({
      caster: new fields.BooleanField({...requiredField, initial: false}),
      ritual: new fields.BooleanField({...requiredField, initial: false}),
      attribute: new fields.StringField({ initial: "ins"})
    });

    schema.jobBenefits = new fields.SchemaField({
      healthPoints: new fields.NumberField({...requiredInteger, min: 0, initial: 0, min: 0}),
      manaPoints: new fields.NumberField({...requiredInteger, initial: 0, min: 0}),
      inventoryPoints: new fields.NumberField({...requiredInteger, initial: 0, min: 0})
    });

    schema.project = new fields.BooleanField({...requiredField, initial: false});

    schema.martialBenefits = new fields.SchemaField({
      armor: new fields.BooleanField({...requiredField, initial: false}), 
      shield: new fields.BooleanField({...requiredField, initial: false}), 
      ranged: new fields.BooleanField({...requiredField, initial: false}),
      melee: new fields.BooleanField({...requiredField, initial: false})
    });

    schema.level = new fields.NumberField({...requiredInteger, initial: 0, min: 0, max: 10});

    return schema;
  }

  prepareDerivedData() {
  }
}