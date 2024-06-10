import FabulaUltimaActorBase from "./base-actor.mjs";
import { decreaseAttr, recoverFreeBenefits, recoverTotalLevel, extractDiceValor } from "../helpers/utils.mjs";

export default class FabulaUltimaCharacter extends FabulaUltimaActorBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.resources = this._defineResourcesSchema(fields, requiredInteger);

    schema.defenses = this._defineDefensesSchema(fields, requiredInteger);

    schema.initiative = this._defineInitiativeSchema(fields);

    schema.attributes = this._defineAttributesSchema(fields);

    schema.jobs = this._defineJobsSchema(fields, requiredInteger);

    schema.conditions = this._defineConditionsSchema(fields);

    console.log(schema);
    
    return schema;
  }

  prepareDerivedData() {
    const benefitsBonus = recoverFreeBenefits(this.jobs);
    
    this._calculateAttributeRealValue();
    this._calculateResourcesValue(benefitsBonus);
    this._calculateProficiency(benefitsBonus);
    
    console.log(this)
  }

  getRollData() {
    const data = {};

    if (this.attributes) {
      for (let [k,v] of Object.entries(this.attributes)) {
        data[k] = foundry.utils.deepClone(v);
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
        level: new fields.NumberField({...requiredInteger, initial: 0, min: 0, max: 10}),
        caster: new fields.BooleanField({initial: CONFIG.FABULA_ULTIMA.jobs[job].caster}),
        martialProficiency: new fields.SchemaField({
          armor: new fields.BooleanField({initial: CONFIG.FABULA_ULTIMA.jobsMartialProficiency[job].armor}),
          shield: new fields.BooleanField({initial: CONFIG.FABULA_ULTIMA.jobsMartialProficiency[job].shield}),
          melee: new fields.BooleanField({initial: CONFIG.FABULA_ULTIMA.jobsMartialProficiency[job].melee}),
          ranged: new fields.BooleanField({initial: CONFIG.FABULA_ULTIMA.jobsMartialProficiency[job].ranged})
        }),
        jobsBenefits: new fields.SchemaField({
          manaBonus: new fields.NumberField({...requiredInteger, initial: CONFIG.FABULA_ULTIMA.jobsBenefits[job].mp}), 
          healthBonus: new fields.NumberField({...requiredInteger, initial: CONFIG.FABULA_ULTIMA.jobsBenefits[job].hp}),
          inventoryBonus: new fields.NumberField({...requiredInteger, initial: CONFIG.FABULA_ULTIMA.jobsBenefits[job].ip}), 
          canPerformRitual: new fields.BooleanField({initial: CONFIG.FABULA_ULTIMA.jobsBenefits[job].ritual}), 
          canInitiateProjects: new fields.BooleanField({initial: CONFIG.FABULA_ULTIMA.jobsBenefits[job].projects})
        })
      })
      if(obj[job].fields.caster){
        obj[job].casterAttr = new fields.StringField({initial: CONFIG.FABULA_ULTIMA.jobs[job].casterAttr})
      };
      return obj;
    }, {}));;
  }

  static _defineConditionsSchema(fields){
    return new fields.SchemaField(Object.keys(CONFIG.FABULA_ULTIMA.conditions).reduce((obj, condition) => {
      obj[condition] = new fields.BooleanField({initial: false});
      return obj;
    }, {}));
  }

  _calculateAttributeRealValue(){
    const trueConditions = [];
    for (const [key, value] of Object.entries(this.conditions)) {
      if (value === true) {
          trueConditions.push(...CONFIG.FABULA_ULTIMA.conditionsAttr[key]);
      }
    }

    for (const key in this.attributes) {   
      const counter = trueConditions.filter(attr => attr === key).length;
      this.attributes[key].value = decreaseAttr(this.attributes[key].base, counter);
      this.attributes[key].label = game.i18n.localize(CONFIG.FABULA_ULTIMA.attributes[key]) ?? key;
    }
  }

  _calculateResourcesValue(benefitsBonus){
    this.resources.level = recoverTotalLevel(this.jobs);

    this.resources.health.max = this.resources.level + (extractDiceValor(this.attributes.mig.base) * 5) + benefitsBonus.hp;
    this.resources.health.crises = this.resources.health.max/2;
    
    this.resources.mana.max = this.resources.level + (extractDiceValor(this.attributes.wlp.base) * 5) + benefitsBonus.mp;
    this.resources.inventory.max = 6 + benefitsBonus.ip;
  }

  _calculateProficiency(benefitsBonus){
    this.martialProficiency = benefitsBonus.martialProficiency;
  }
}