import {
  onManageActiveEffect,
  prepareActiveEffectCategories,
} from '../helpers/effects.mjs';
import { recoverLevel, recoverTotalFreeBenefits } from '../helpers/jobHelper.mjs';
import { extractDiceValor } from '../helpers/utils.mjs';
import { equipGear } from '../helpers/utils/gearHelper.mjs';
import { recoverItemType } from '../helpers/utils/itemHelper.mjs';

/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
export class FabulaUltimaActorSheet extends ActorSheet {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ['fabula-ultima', 'sheet', 'actor'],
      width: 600,
      height: 600,
      tabs: [
        {
          navSelector: '.sheet-tabs',
          contentSelector: '.sheet-body',
          initial: 'gears',
        },
      ],
    });
  }

  /** @override */
  get template() {
    return `systems/fabula-ultima/templates/actor/actor-${this.actor.type}-sheet.hbs`;
  }

  /* -------------------------------------------- */

  /** @override */
  async getData() {
    // Retrieve the data structure from the base sheet. You can inspect or log
    // the context variable to see the structure, but some key properties for
    // sheets are the actor object, the data object, whether or not it's
    // editable, the items array, and the effects array.
    const context = super.getData();

    // Use a safe clone of the actor data for further operations.
    const actorData = this.document.toPlainObject();

    // Add the actor's data to context.data for easier access, as well as flags.
    context.system = actorData.system;
    context.flags = actorData.flags;

    // Adding a pointer to CONFIG.FABULA_ULTIMA
    context.config = CONFIG.FABULA_ULTIMA;

    // Prepare character data and items.
    if (actorData.type == 'character') {
      this._prepareItems(context);
      this._prepareCharacterData(context);
    }

    // Prepare NPC data and items.
    if (actorData.type == 'npc') {
      this._prepareItems(context);
    }

    // Enrich biography info for display
    // Enrichment turns text like `[[/r 1d20]]` into buttons
    context.enrichedBiography = await TextEditor.enrichHTML(
      this.actor.system.biography,
      {
        // Whether to show secret blocks in the finished html
        secrets: this.document.isOwner,
        // Necessary in v11, can be removed in v12
        async: true,
        // Data to fill in for inline rolls
        rollData: this.actor.getRollData(),
        // Relative UUID resolution
        relativeTo: this.actor,
      }
    );

    // Prepare active effects
    context.effects = prepareActiveEffectCategories(
      // A generator that returns all effects stored on the actor
      // as well as any items
      this.actor.allApplicableEffects()
    );

    return context;
  }

  /**
   * Character-specific context modifications
   *
   * @param {object} context The context object to mutate
   */
  _prepareCharacterData(context) {
    // This is where you can enrich character-specific editor fields
    // or setup anything else that's specific to this type
    let updateData = {};
    updateData[`system.resources`] = this._prepareResources(context);
    updateData[`system.martialProficiency`] = this._prepareMartialProficiency(context);

    this.actor.update(updateData)
  }

  /**
   * Organize and classify Items for Actor sheets.
   *
   * @param {object} context The context object to mutate
   */
  _prepareItems(context) {
    // Initialize containers.
    const gear = [];
    const jobs = [];
    const weapons = [];
    const shields = [];
    const armors = [];
    const accessories = [];
    const spells = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
    };

    // Iterate through items, allocating to containers
    for (let i of context.items) {
      i.img = i.img || Item.DEFAULT_ICON;
      // Append to gear.
      if (i.type === 'item') {
        gear.push(i);
      }
      // Append to jobs.
      else if (i.type === 'job') {
        jobs.push(i);
      }
      // Append to weapons.
      else if (i.type === 'weapon'){
        weapons.push(i)
      }
      // Append to weapons.
      else if (i.type === 'shield'){
        shields.push(i)
      }
      // Append to weapons.
      else if (i.type === 'armor'){
        armors.push(i)
      }
      // Append to weapons.
      else if (i.type === 'accessory'){
        accessories.push(i)
      }
      // Append to spells.
      else if (i.type === 'spell') {
        if (i.system.spellLevel != undefined) {
          spells[i.system.spellLevel].push(i);
        }
      }
    }

    // Assign and return
    context.gear = gear;
    context.jobs = jobs;
    context.spells = spells;
    context.weapons = weapons;
    context.shields = shields;
    context.armors = armors;
    context.accessories = accessories;

  }

  /* -------------------------------------------- */

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Render the item sheet for viewing/editing prior to the editable check.
    html.on('click', '.item-edit', (ev) => {
      const li = $(ev.currentTarget).parents('.item-job').length? $(ev.currentTarget).parents('.item-job') : $(ev.currentTarget).parents('.item');
      const item = this.actor.items.get(li.data('itemId'));
      item.sheet.render(true);
    });
    
    // -------------------------------------------------------------
    // Altera valor do job
    html.on('click', '.job-edit', async (ev) => {
      const operator = ev.currentTarget.value;
      const jobId = ev.currentTarget.dataset.job;

      const job = this.actor.items.get(jobId)
      const newLevel = operator === "+"? job.system.level + 1 : job.system.level - 1;
      await job.update({ [`system.level`]: newLevel })
    })

    // -------------------------------------------------------------
    // Equipa um equipamento
    html.on('click', '.gear-equip', async (ev) => {
      const gearSlot = ev.currentTarget.dataset.slotType;
      const gearId = ev.currentTarget.dataset.itemId;
      const newGear = this.actor.items.get(gearId);

      const updateData = await equipGear(newGear, gearSlot, this.actor);

      await this.actor.update(updateData);

    })
    // Everything below here is only needed if the sheet is editable
    if (!this.isEditable) return;

    // Add Inventory Item
    html.on('click', '.item-create', this._onItemCreate.bind(this));

    // Delete Inventory Item
    html.on('click', '.item-delete', (ev) => {
      const li = $(ev.currentTarget).parents('.item');
      const item = this.actor.items.get(li.data('itemId'));
      item.delete();
      li.slideUp(200, () => this.render(false));
    });

    // Active Effect management
    html.on('click', '.effect-control', (ev) => {
      const row = ev.currentTarget.closest('li');
      const document =
        row.dataset.parentId === this.actor.id
          ? this.actor
          : this.actor.items.get(row.dataset.parentId);
      onManageActiveEffect(ev, document);
    });

    // Rollable abilities.
    html.on('click', '.rollable', this._onRoll.bind(this));

    // Hidden container.
    html.on('click', '.hidden-job-button', (ev) => {

      const hiddenJobButton = ev.currentTarget;
      const jobContainer = hiddenJobButton.closest('.job-header').nextElementSibling;
      if(jobContainer.classList.contains('hidden-container')){
        jobContainer.classList.remove('hidden-container');
        hiddenJobButton.textContent = '>'
      } else {
        jobContainer.classList.add('hidden-container');
        hiddenJobButton.textContent = '<'
      }

    })

    html.on('click', '.hidden-gear-button', (ev) => {

      const hiddenGearButton = ev.currentTarget;
      const gearData = hiddenGearButton.dataset.gear;

      this.actor.update({'system.preferencesFlags.sheetFlags.gearTabFlag': gearData})
    })

    // Drag events for macros.
    if (this.actor.isOwner) {
      let handler = (ev) => this._onDragStart(ev);
      html.find('li.item').each((i, li) => {
        if (li.classList.contains('inventory-header')) return;
        li.setAttribute('draggable', true);
        li.addEventListener('dragstart', handler, false);
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
      system: data,
    };
    // Remove the type from the dataset since it's in the itemData.type prop.
    delete itemData.system['type'];

    // Finally, create the item!
    return await Item.create(itemData, { parent: this.actor });
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
      let label = dataset.label ? `[ability] ${dataset.label}` : '';
      let roll = new Roll(dataset.roll, this.actor.getRollData());
      roll.toMessage({
        speaker: ChatMessage.getSpeaker({ actor: this.actor }),
        flavor: label,
        rollMode: game.settings.get('core', 'rollMode'),
      });
      return roll;
    }
  }

  _prepareResources(context){
    let jobs = recoverItemType(context.items, "job");

    const benefitsBonus = recoverTotalFreeBenefits(jobs);
    const totalLevel = recoverLevel(jobs);
    const healthMax = this._calcMaxAttribute(totalLevel, this.actor.system.attributes.mig.base, benefitsBonus.hp);
    const manaMax = this._calcMaxAttribute(totalLevel, this.actor.system.attributes.wlp.base, benefitsBonus.mp);
    const inventoryMax = this._calcMaxAttribute(6, "d0", benefitsBonus.ip);

    const resources = {
      "level": totalLevel,
      "health.max": healthMax,
      "health.crises": healthMax/2,
      "mana.max": manaMax,
      "inventory.max": inventoryMax
    }

    return resources
  }

  _prepareMartialProficiency(context){
    let jobs = recoverItemType(context.items, "job");
    const benefitsBonus = recoverTotalFreeBenefits(jobs);

    const martialProficiency = {
      "armor": benefitsBonus.martialProficiency.armor,
      "ranged": benefitsBonus.martialProficiency.ranged,
      "melee": benefitsBonus.martialProficiency.melee,
      "shield": benefitsBonus.martialProficiency.shield
    }

    return martialProficiency;
  }

  _calcMaxAttribute(level, attr, bonus){
    return level + (extractDiceValor(attr) * 5) + bonus;
  }
}
