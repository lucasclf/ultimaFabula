import FabulaUltimaItemBase from "../base-item.mjs";

export default class FabulaUltimaWeapon extends FabulaUltimaItemBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.cost = new fields.NumberField({...requiredInteger, initial: 0, min: 0});

    schema.quality = new fields.StringField({ initial: CONFIG.FABULA_ULTIMA.enums.weaponQualities.NO_QUALITY});

    schema.qualifications = new fields.SchemaField({
      weaponGrip: new fields.StringField({ initial: CONFIG.FABULA_ULTIMA.enums.weaponGrip.ONE_HAND}),
      weaponType: new fields.StringField({ initial: CONFIG.FABULA_ULTIMA.enums.weaponType.MELEE}),
      weaponCategory: new fields.StringField({ initial: CONFIG.FABULA_ULTIMA.enums.weaponCategory.ARCANE})
    });

    schema.attack = new fields.SchemaField({
      attr: new fields.SchemaField({
        firstAttr: new fields.StringField({ initial: CONFIG.FABULA_ULTIMA.enums.attributes.MIG}),
        secondAttr: new fields.StringField({ initial: CONFIG.FABULA_ULTIMA.enums.attributes.MIG}),
      }),
      atkBonus: new fields.NumberField({...requiredInteger, initial: 0})
    });

    schema.damage = new fields.SchemaField({
      damageBonus: new fields.NumberField({...requiredInteger, initial: 0}),
      type: new fields.StringField({ initial: CONFIG.FABULA_ULTIMA.enums.weaponDamageType.PHYSICAL})
    });

    return schema;
  }

  prepareDerivedData() {
    // Build the formula dynamically using string interpolation
    const roll = this.roll;

    this.formula = ``
  }
}


