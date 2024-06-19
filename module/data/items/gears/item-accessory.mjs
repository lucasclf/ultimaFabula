import FabulaUltimaGearBase from "../../base-gear.mjs";

export default class FabulaUltimaAccessory extends FabulaUltimaGearBase {

  static defineSchema() {

    const schema = super.defineSchema();

    return schema;
  }

  prepareDerivedData() {
    // Build the formula dynamically using string interpolation
    const roll = this.roll;

    this.formula = ``
  }
}


