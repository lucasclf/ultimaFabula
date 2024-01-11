/**
 * Extend the basic Item with some very simple modifications.
 * @extends {Item}
 */
export class ultimaFabulaItem extends Item {
  /**
   * Augment the basic Item data model with additional dynamic data.
   */
  prepareData() {
    // As with the actor class, items are documents that can have their data
    // preparation methods overridden (such as prepareBaseData()).
    super.prepareData();
  }

  /**
   * Prepare a data object which is passed to any Roll formulas which are created related to this Item
   * @private
   */
   getRollData() {
    // If present, return the actor's roll data.
    if ( !this.actor ) return null;
    const rollData = this.actor.getRollData();
    rollData.item = foundry.utils.deepClone(this.data.data);

    return rollData;
  }

  /**
   * Handle clickable rolls.
   * @param {Event} event   The originating click event
   * @private
   */
  async roll() {
  
    const item = this.data;
    const actor = this.actor;
    this.data.data.formula = this._defineRoll(item, actor);
    
    // Initialize chat data.
    const speaker = ChatMessage.getSpeaker({ actor: this.actor });
    const rollMode = game.settings.get('core', 'rollMode');
    const label = `[${item.type}] ${item.name}`;

    // If there's no roll data, send a chat message.
    if (!this.data.data.formula) {
      console.log(this.data)
      ChatMessage.create({
        speaker: speaker,
        rollMode: rollMode,
        flavor: label,
        content: item.data.description ?? ''
      });
    }
    // Otherwise, create a roll and send a chat message from it.
    else {
      // Retrieve roll data.
      const rollData = this.getRollData();

      // Invoke the roll and submit it to chat.
      const roll = new Roll(rollData.item.formula, rollData);
      // If you need to store the value first, uncomment the next line.
      // let result = await roll.roll({async: true});
      roll.toMessage({
        speaker: speaker,
        rollMode: rollMode,
        flavor: label,
      });
      return roll;
    }
  }

  _defineRoll(item, actor){
    if(item.type == "weapon"){
      let accuracyFirst = item.system.accuracyFirst;
      let accuracySecond = item.system.accuracySecond;
      let accuracyMod = item.system.accuracyMod;

      let actorAccuracyFirst = actor.system.attributes[accuracyFirst];
      let actorAccuracySecond = actor.system.attributes[accuracySecond];

      return `${actorAccuracyFirst} + ${actorAccuracySecond} + ${accuracyMod}`
    }

    return;
  }
}
