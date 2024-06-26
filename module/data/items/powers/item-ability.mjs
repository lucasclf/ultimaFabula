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

    schema.booleanBonus = new fields.SchemaField({
      dualShield: new fields.BooleanField({ initial: false}),
      castArcana: new fields.BooleanField({ initial: false}),
      gadgets: new fields.BooleanField({ initial: false}),
      gravePoints: new fields.BooleanField({ initial: false})
    })
    
    schema.heroicBooleanBonus = new fields.SchemaField({
      ambiambidexterity: new fields.BooleanField({ initial: false}),
      health: new fields.BooleanField({ initial: false}),
      mana: new fields.BooleanField({ initial: false}),
      inventory: new fields.BooleanField({ initial: false}),
      powerGrip: new fields.BooleanField({ initial: false}),
      powerShoot: new fields.BooleanField({ initial: false}),
      powerStrike: new fields.BooleanField({ initial: false}),
      powerSpell: new fields.BooleanField({ initial: false}),
      vanguardCard: new fields.BooleanField({ initial: false})
    })

    schema.gadgetsInfo = new fields.SchemaField({
      alchemy: new fields.StringField({ initial: CONFIG.FABULA_ULTIMA.enums.utils.NONE}),
      infusions: new fields.StringField({ initial: CONFIG.FABULA_ULTIMA.enums.utils.NONE}),
      magitech: new fields.StringField({ initial: CONFIG.FABULA_ULTIMA.enums.utils.NONE})
    })

    schema.selectBonus = new fields.SchemaField({
      conditionImmunity: new fields.StringField({ initial: CONFIG.FABULA_ULTIMA.enums.utils.NONE})
    })

    schema.numericalBonus = new fields.SchemaField({
    })

    schema.heroicRequirements = new fields.SchemaField({
      job: new fields.StringField({ required: true, blank: true }),
      skill: new fields.StringField({ required: true, blank: true })
    })

    schema.job = new fields.StringField({ blank: true });

    return schema;
  }

  prepareDerivedData() {
  }
}