import FabulaUltimaActorBase from "./base-actor.mjs";
import { decreaseAttr, extractDiceValor, recoverAttrLoweredByCondition } from "../helpers/utils.mjs";
import { recoverFreeBenefits, recoverTotalLevel } from "../helpers/jobHelper.mjs";
import { recoverTotalFreeBenefits } from "../helpers/jobHelper.mjs"; 

export default class FabulaUltimaCharacter extends FabulaUltimaActorBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.resources = this._defineResourcesSchema(fields, requiredInteger);
    schema.defenses = this._defineDefensesSchema(fields, requiredInteger);
    schema.initiative = this._defineInitiativeSchema(fields);
    schema.attributes = this._defineAttributesSchema(fields);
    schema.joobs = this._defineJobsSchema(fields, requiredInteger);
    schema.conditions = this._defineConditionsSchema(fields);
    schema.background = this._defineBackgroundSchema(fields);
    schema.resistances = this._defineResistancesSchema(fields);

    console.log(schema);

    return schema;
  }

  prepareDerivedData() {
    const benefitsBonus = recoverTotalFreeBenefits(this.joobs);

    this._calculateAttributeRealValue();
    this._calculateResourcesValue(benefitsBonus);
    this._calculateProficiency(benefitsBonus);
    console.log(this)
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
        value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 })
      }),
      mana: new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 })
      }),
      inventory: new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 })
      }),
      fabula: new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 })
      }),
      zenit: new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 })
      })
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

  static _defineJobsSchema(fields, requiredInteger) {
    return new fields.SchemaField(Object.keys(CONFIG.FABULA_ULTIMA.jobs).reduce((obj, job) => {
      obj[job] = new fields.SchemaField({
        label: new fields.StringField({initial: CONFIG.FABULA_ULTIMA.jobs[job].name}),
        level: new fields.NumberField({...requiredInteger, initial: 0, min: 0, max: 10}),
        caster: new fields.BooleanField({initial: CONFIG.FABULA_ULTIMA.jobs[job].caster}),
        martialProficiency: this._defineMartialProficiencySchema(fields, job),
        jobsBenefits: this._defineJobsBenefits(fields, requiredInteger, job),
        casterAttr: this._defineJobsCasterAttrSchame(fields, job)
      })
      
      return obj;
    }, {}));;
  }

  static _defineMartialProficiencySchema(fields, job){
    return new fields.SchemaField({
      armor: new fields.BooleanField({initial: CONFIG.FABULA_ULTIMA.jobsMartialProficiency[job].armor}),
      shield: new fields.BooleanField({initial: CONFIG.FABULA_ULTIMA.jobsMartialProficiency[job].shield}),
      melee: new fields.BooleanField({initial: CONFIG.FABULA_ULTIMA.jobsMartialProficiency[job].melee}),
      ranged: new fields.BooleanField({initial: CONFIG.FABULA_ULTIMA.jobsMartialProficiency[job].ranged})
    });
  }

  static _defineJobsBenefits(fields, requiredInteger, job){
    return new fields.SchemaField({
      manaBonus: new fields.NumberField({...requiredInteger, initial: CONFIG.FABULA_ULTIMA.jobsBenefits[job].mp}), 
      healthBonus: new fields.NumberField({...requiredInteger, initial: CONFIG.FABULA_ULTIMA.jobsBenefits[job].hp}),
      inventoryBonus: new fields.NumberField({...requiredInteger, initial: CONFIG.FABULA_ULTIMA.jobsBenefits[job].ip}), 
      canPerformRitual: new fields.BooleanField({initial: CONFIG.FABULA_ULTIMA.jobsBenefits[job].ritual}), 
      canInitiateProjects: new fields.BooleanField({initial: CONFIG.FABULA_ULTIMA.jobsBenefits[job].projects})
    })
  }

  static _defineJobsCasterAttrSchame(fields, job){
    if(CONFIG.FABULA_ULTIMA.jobs[job].caster == true){
      return new fields.StringField({required: false, nullable: true, initial: CONFIG.FABULA_ULTIMA.jobs[job].casterAttr})
    }
    else{
      return new fields.StringField({required: false, nullable: true, initial: null});
    }
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

  _calculateAttributeRealValue(){
    const attrLowered = recoverAttrLoweredByCondition(this.conditions);

    for (const key in this.attributes) {   
      const counter = attrLowered.filter(attr => attr === key).length;
      this.attributes[key].value = decreaseAttr(this.attributes[key].base, counter);
      this.attributes[key].label = game.i18n.localize(CONFIG.FABULA_ULTIMA.attributes[key]) ?? key;
    }
  }

  _calculateResourcesValue(benefitsBonus){
    this.resources.level = recoverTotalLevel(this.joobs);

    this.resources.health.max = this.resources.level + (extractDiceValor(this.attributes.mig.base) * 5) + benefitsBonus.hp;
    this.resources.health.crises = this.resources.health.max/2;
    
    this.resources.mana.max = this.resources.level + (extractDiceValor(this.attributes.wlp.base) * 5) + benefitsBonus.mp;
    this.resources.inventory.max = 6 + benefitsBonus.ip;
  }

  _calculateProficiency(benefitsBonus){
    this.martialProficiency = benefitsBonus.martialProficiency;
  }

}