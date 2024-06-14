import FabulaUltimaItemBase from "./base-item.mjs";

export default class FabulaUltimaJob extends FabulaUltimaItemBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredField = {required: true, nullable: false};
    const requiredInteger = { ...requiredField, integer: true };
    const schema = super.defineSchema();

    schema.caster = new fields.SchemaField({
      isCaster: new fields.BooleanField({...requiredField, initial: false}),
      canMakeRitual: new fields.BooleanField({...requiredField, initial: false}),
      attrBase: new fields.StringField({ initial: ins})
    });

    schema.jobBenefits = new fields.SchemaField({
      health: new fields.NumberField({...requiredInteger, initial: 0}),
      mana: new fields.NumberField({...requiredInteger, initial: 0}),
      inventory: new fields.NumberField({...requiredInteger, initial: 0})
    });

    schema.project = new fields.BooleanField({...requiredField, initial: false});

    schema.martial = new fields.SchemaField({
      armor: new fields.BooleanField({...requiredField, initial: false}), 
      shield: new fields.BooleanField({...requiredField, initial: false}), 
      ranged: new fields.BooleanField({...requiredField, initial: false}),
      melee: new fields.BooleanField({...requiredField, initial: false})
    });

    schema.level = new fields.NumberField({...requiredInteger, initial: 0});

    return schema;
  }

  prepareDerivedData() {
    // Build the formula dynamically using string interpolation
    const roll = this.roll;

    this.formula = `${roll.diceNum}${roll.diceSize}${roll.diceBonus}`
  }
}