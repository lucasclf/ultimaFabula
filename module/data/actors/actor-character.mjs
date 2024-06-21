import FabulaUltimaActorBase from "../base-actor.mjs";
import { decreaseAttr, recoverAttrLoweredByCondition } from "../../helpers/utils.mjs";

export default class FabulaUltimaCharacter extends FabulaUltimaActorBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.resources = this._defineResourcesSchema(fields, requiredInteger);
    schema.defenses = this._defineDefensesSchema(fields, requiredInteger);
    schema.initiative = this._defineInitiativeSchema(fields);
    schema.attributes = this._defineAttributesSchema(fields);
    schema.conditions = this._defineConditionsSchema(fields);
    schema.background = this._defineBackgroundSchema(fields);
    schema.resistances = this._defineResistancesSchema(fields);
    schema.martialProficiency = this._defineProficiencySchema(fields)
    schema.gears = this._defineGearsSchema(fields);
    schema.preferencesFlags = this._definePreferencesSchema(fields);
    
    return schema;
  }

  prepareDerivedData() {
    
    this._calculateAttributeRealValue();

  }

  getRollData() {
    const data = {};

    if (this.attributes) {
      for (let [k,v] of Object.entries(this.attributes)) {
        data[k] = foundry.utils.deepClone(v.value);
      }
    }

    data.physicalDefense = this.defenses.physical.value;
    data.magicalDefense = this.defenses.physical.value;
    data.initiative = this.initiative.value;

    return data
  }

  static _defineResourcesSchema(fields, requiredInteger){
    return new fields.SchemaField({
      health: new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
        max:  new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
        crises:  new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 })
      }),
      mana: new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
        max:  new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 })
      }),
      inventory: new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }),
        max:  new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 })
      }),
      fabula: new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 })
      }),
      zenit: new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 })
      }),
      level: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 })
    })
  }

  static _defineDefensesSchema(fields, requiredInteger){
    return new fields.SchemaField({
      physical: new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 0 })
      }),
      magical: new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 0 })
      })
  });
  }

  static _defineInitiativeSchema(fields, requiredInteger){
    return new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 0 })
    })
  }

  static _defineAttributesSchema(fields){
    return new fields.SchemaField(Object.keys(CONFIG.FABULA_ULTIMA.attributes).reduce((obj, attribute) => {
      obj[attribute] = new fields.SchemaField({
        base: new fields.StringField({initial: 'd6'})
      });
      return obj;
    }, {}));
  }

  static _defineConditionsSchema(fields){
    return new fields.SchemaField(Object.keys(CONFIG.FABULA_ULTIMA.conditions).reduce((obj, condition) => {
      obj[condition] = new fields.BooleanField({initial: false});
      return obj;
    }, {}));
  }

  static _defineBackgroundSchema(fields){
    return new fields.SchemaField({
      identity: new fields.StringField({}),
      theme: new fields.StringField({}),
      origin: new fields.StringField({}),
      bonds: new fields.SchemaField({
        firstBond: this._defineBondSchema(fields),
        secondBond: this._defineBondSchema(fields),
        thirdBond: this._defineBondSchema(fields),
        fourthBond: this._defineBondSchema(fields),
        fifthBond: this._defineBondSchema(fields),
        sixthBond: this._defineBondSchema(fields)
      })
    })
  }

  static _defineBondSchema(fields){
    return new foundry.data.fields.SchemaField({
      target: new fields.StringField({}),
      respect: new foundry.data.fields.SchemaField({
        admiration: new fields.BooleanField({initial: false}),
        inferiority: new fields.BooleanField({initial: false})
      }),
      confiability:  new foundry.data.fields.SchemaField({
        loyalty: new fields.BooleanField({initial: false}),
        mistrust: new fields.BooleanField({initial: false})
      }),
      love:  new foundry.data.fields.SchemaField({
        affection: new fields.BooleanField({initial: false}),
        hatred: new fields.BooleanField({initial: false})
      })
    })
  }

  static _defineResistancesSchema(fields){
    return new fields.SchemaField(Object.keys(CONFIG.FABULA_ULTIMA.resistancesName).reduce((obj, attribute) => {
      obj[attribute] = new fields.StringField({initial: CONFIG.FABULA_ULTIMA.resistancesType.normal});
      return obj;
    }, {}));
  }

  static _defineProficiencySchema(fields){
    return new fields.SchemaField({
      armor: new fields.BooleanField({initial: false}),
      shield: new fields.BooleanField({initial: false}),
      melee: new fields.BooleanField({initial: false}),
      ranged: new fields.BooleanField({initial: false})
    })
  }

  static _defineGearsSchema(fields){
    return new fields.SchemaField({
      mainHand: new fields.SchemaField({
        gearType: new fields.StringField({blank: true}),
        gearId: new fields.StringField({blank: true}),
        gearQuality: new fields.StringField({blankl: true})
      }),
      offHand:  new fields.SchemaField({
        gearType: new fields.StringField({blank: true}),
        gearId: new fields.StringField({blank: true}),
        gearQuality: new fields.StringField({blankl: true})
      }),
      armor: new fields.SchemaField({
        gearId: new fields.StringField({blank: true}),
        gearQuality: new fields.StringField({blankl: true})
      }),
      accessory: new fields.SchemaField({
        gearId: new fields.StringField({blank: true}),
        gearQuality: new fields.StringField({blankl: true})
      })
    })
  }

  static _definePreferencesSchema(fields){
    return new fields.SchemaField({
      sheetFlags: new fields.SchemaField({
        gearTabFlag: new fields.StringField({ initial:"hands"}),
        jobTabFlag: new fields.StringField({ initial: "trained"}),
        ability: new fields.StringField({ initial: "nobody"})
      })
    })
  }

  _calculateAttributeRealValue(){
    const attrLowered = recoverAttrLoweredByCondition(this.conditions);

    for (const key in this.attributes) {   
      const counter = attrLowered.filter(attr => attr === key).length;
      this.attributes[key].value = decreaseAttr(this.attributes[key].base, counter);
      this.attributes[key].label = game.i18n.localize(CONFIG.FABULA_ULTIMA.attributes[key]) ?? key;
    }
  }
}