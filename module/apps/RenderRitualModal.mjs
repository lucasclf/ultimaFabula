import { renderRitualMessage } from "../helpers/actionsHelper/makeRitualHelper.mjs";
import { localize } from "../helpers/localizeHelper.mjs";

export default class RenderRitual extends FormApplication {
	static get defaultOptions() {
		const options = super.defaultOptions;
		options.id = "attack-modal";
		options.template = "systems/ultimaFabula/templates/actionModals/ritual-modal.html";
		options.height = "auto";
		options.width = 600;
		options.minimizable = true;
		options.title = localize(CONFIG.ULTIMAFABULA.modalActions.ritualTitle);
		return options;
	}

	getData() {
		return super.getData()
	}

	async _updateObject(event, formData) {
		const selectedJob = this.object.jobs[formData.selectedSkill];
		const selectedSkill = this.object.skills[formData.selectedSkill];

		const ritualData = {
			actor: this.object.actor,
			selectedSkill: selectedSkill.ritualName,
			attrFirst: {
				value: this.object.attributes[selectedSkill.magicAttr]
			},
			attrSecond: {
				value: this.object.attributes[selectedSkill.magicSecondAttr]
			},
			attrMod: formData.attributeMod || 0
		}

		renderRitualMessage(ritualData);
	}
}

