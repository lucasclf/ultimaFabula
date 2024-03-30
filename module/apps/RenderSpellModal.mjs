import { mountMessageData } from "../helpers/actionsHelper/makeSpellHelper.mjs";
import { localize } from "../helpers/localizeHelper.mjs";

export default class RenderSpell extends FormApplication {
	static get defaultOptions() {
		const options = super.defaultOptions;
		options.id = "spell-modal";
		options.template = "systems/ultimaFabula/templates/actionModals/spell-modal.html";

		options.width = 600;
		options.minimizable = true;
		options.resizable = true;
		options.title = localize(CONFIG.ULTIMAFABULA.modalActions.spellTitle);
		return options;
	}

	getData() {
		return super.getData()
	}

	async _updateObject(event, formData) {
		if(formData.spell == undefined){
			console.log("CQN | Spell not chosen!")
			return;
		}

		const selectedSpell = this._recoverSpell(formData.spell, this.object.spells)
		
		mountMessageData(this.object.actor, selectedSpell);
	}

	_recoverSpell(spellId, spellList){

		for (let key in spellList) {
			if (spellList.hasOwnProperty(key)) {
			  let spell = spellList[key].find(spell => spell._id === spellId);
			  if (spell) {
				return spell;
			  }
			}
		 }
	}
}

