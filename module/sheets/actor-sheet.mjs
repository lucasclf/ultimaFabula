import { onManageActiveEffect, prepareActiveEffectCategories } from "../helpers/effects.mjs";
import { equipGear } from "../helpers/equipment.mjs";
import { makeAction } from "../helpers/actions.mjs";
import { calcLevel, calcMp, calcHp, calcIp, calcCrisis } from "../helpers/calculateAttr.mjs";
import { mountBenefit } from "../helpers/mountBenefits.mjs";
import { mountSkill } from "../helpers/mountSkillBonus.mjs";


/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
export class ultimaFabulaActorSheet extends ActorSheet {

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["ultimaFabula", "sheet", "actor"],
      template: "systems/ultimaFabula/templates/actor/actor-character-sheet.html",
      width: 600,
      height: 600,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "gears" }]
    });
  }

  /** @override */
  get template() {
    return `systems/ultimaFabula/templates/actor/actor-${this.actor.type}-sheet.html`;
  }

  /* -------------------------------------------- */

  /** @override */
  getData() {
    // Retrieve the data structure from the base sheet. You can inspect or log
    // the context variable to see the structure, but some key properties for
    // sheets are the actor object, the data object, whether or not it's
    // editable, the items array, and the effects array.
    const context = super.getData();

    // Use a safe clone of the actor data for further operations.
    const actorData = this.actor.toObject(false);

    context.config = CONFIG.ULTIMAFABULA;

    // Add the actor's data to context.data for easier access, as well as flags.
    context.data = actorData.system;
    context.flags = actorData.flags;

    // Prepare character data and items.
    if (actorData.type == 'character') {
      this._prepareItems(context);
      this._prepareCharacterData(context);
    }

    // Prepare NPC data and items.
    if (actorData.type == 'npc') {
      this._prepareItems(context);
    }

    // Add roll data for TinyMCE editors.
    context.rollData = context.actor.getRollData();

    // Prepare active effects
    context.effects = prepareActiveEffectCategories(this.actor.effects);

    return context;
  }

  /**
   * Organize and classify Items for Character sheets.
   *
   * @param {Object} actorData The actor to prepare.
   *
   * @return {undefined}
   */
  _prepareCharacterData(context) {
  }

  /**
   * Organize and classify Items for Character sheets.
   *
   * @param {Object} actorData The actor to prepare.
   *
   * @return {undefined}
   */
  _prepareItems(context) {
    // Initialize containers.
    
    const weapon = [];
    const defensive = [];
    const accessory = [];
    const job = [];
    const skill = [];
    const spell = [];
    const arcana = [];
    let level = 0;
    let hpMax = 0;
    let crisis = 0;
    let mpMax = 0;
    let ipMax = 0;
    let benefits = null;


    // Iterate through items, allocating to containers
    for (let i of context.items) {
      i.img = i.img || DEFAULT_TOKEN;
      // Append to gear.
      if(i.type === 'weapon') {
        weapon.push(i);
      }
      if(i.type === 'defensive') {
        defensive.push(i);
      }
      if(i.type === 'accessory') {
        accessory.push(i);
      }
      if(i.type === 'job'){
        job.push(i);
      }
      if(i.type === 'skill'){
        skill.push(i);
      }
      if(i.type === 'spell'){
        spell.push(i);

        spell.sort((a, b) => {
          const jobRelationA = String(a.system.jobRelation).toUpperCase();
          const jobRelationB = String(b.system.jobRelation).toUpperCase();
        
          if (jobRelationA < jobRelationB) {
            return -1;
          }
          if (jobRelationA > jobRelationB) {
            return 1;
          }
          return 0;
        });

      }
      if(i.type === 'arcana'){
        arcana.push(i);
      }
    }

    benefits = mountBenefit(context.data.benefitsBonus, job);
    mountSkill(context.data.skillBonus, skill);

    level = calcLevel(job);
    hpMax = calcHp(level, context.data.attributes.might, job, context.data.skillBonus.hp);
    crisis = calcCrisis(hpMax);
    mpMax = calcMp(level, context.data.attributes.willpower, job, context.data.skillBonus.mp);
    ipMax = calcIp(job);


    // Assign and return
    context.weapon = weapon;
    context.defensive = defensive;
    context.accessory = accessory;
    context.job = job;
    context.skill = skill;
    context.spell = spell;
    context.arcana = arcana;
    context.data.level = level;
    context.data.hp.max = hpMax;
    context.data.hp.crisis = crisis;
    context.data.mp.max = mpMax;
    context.data.ip.max = ipMax;
  }

  /* -------------------------------------------- */

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Render the item sheet for viewing/editing prior to the editable check.
    html.find('.item-edit').click(ev => {
      const li = $(ev.currentTarget).parents(".item");
      const item = this.actor.items.get(li.data("itemId"));
      item.sheet.render(true);
    });

    // -------------------------------------------------------------
    // Everything below here is only needed if the sheet is editable
    if (!this.isEditable) return;

    // Add Inventory Item
    html.find('.item-create').click(this._onItemCreate.bind(this));

    html.find('.item-equip').click(ev => {
      equipGear(ev, this.actor)
    });

    html.find('.action-choice').click(ev => {
      makeAction(ev, this.actor)
    })

    // Delete Inventory Item
    html.find('.item-delete').click(ev => {
      const li = $(ev.currentTarget).parents(".item");
      const item = this.actor.items.get(li.data("itemId"));
      item.delete();
      li.slideUp(200, () => this.render(false));
    });

    // Active Effect management
    html.find(".effect-control").click(ev => onManageActiveEffect(ev, this.actor));

    // Rollable abilities.
    html.find('.rollable').click(this._onRoll.bind(this));

    // Drag events for macros.
    if (this.actor.owner) {
      let handler = ev => this._onDragStart(ev);
      html.find('li.item').each((i, li) => {
        if (li.classList.contains("inventory-header")) return;
        li.setAttribute("draggable", true);
        li.addEventListener("dragstart", handler, false);
      });
    }
  }

  /**
   * Handle creating a new Owned Item for the actor using initial data defined in the HTML dataset
   * @param {Event} event   The originating click event
   * @private
   */
  async _onItemCreate(event) {
    event.preventDefault();
    const header = event.currentTarget;
    // Get the type of item to create.
    const type = header.dataset.type;
    // Grab any data associated with this control.
    const data = duplicate(header.dataset);
    // Initialize a default name.
    const name = `New ${type.capitalize()}`;
    // Prepare the item object.
    const itemData = {
      name: name,
      type: type,
      data: data
    };
    // Remove the type from the dataset since it's in the itemData.type prop.
    delete itemData.data["type"];

    // Finally, create the item!
    return await Item.create(itemData, {parent: this.actor});
  }

  /**
   * Handle clickable rolls.
   * @param {Event} event   The originating click event
   * @private
   */
  _onRoll(event) {
    event.preventDefault();
    const element = event.currentTarget;
    const dataset = element.dataset;

    // Handle item rolls.
    if (dataset.rollType) {
      if (dataset.rollType == 'item') {
        const itemId = element.closest('.item').dataset.itemId;
        const item = this.actor.items.get(itemId);
        if (item) return item.roll();
      }
    }
    // Handle rolls that supply the formula directly.
    if (dataset.roll) {
      return this._roll(dataset);
    }
  }

  _roll(dataset){
    let label = dataset.label ? `${dataset.label}` : '';
    let roll = new Roll(dataset.roll, this.actor.getRollData());

    roll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      flavor: label,
      rollMode: game.settings.get('core', 'rollMode'),
    });

    return roll
  }
}
