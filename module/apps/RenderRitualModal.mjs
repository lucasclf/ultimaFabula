import { renderRitualMessage } from "../helpers/actionsHelper/makeRitualHelper.mjs";

export default class RenderRitual extends FormApplication {
	static get defaultOptions() {
		const options = super.defaultOptions;
		options.id = "attack-modal";
		options.template = "systems/ultimaFabula/templates/actionModals/ritual-modal.html";
		options.height = "auto";
		options.width = 600;
		options.minimizable = true;
		options.title = "Ritual action.";
		return options;
	}

	getData() {
		return super.getData()
	}

	async _updateObject(event, formData) {
		const selectedJob = this.object.jobs[formData.selectedJob];

		const ritualData = {
			actor: this.object.actor,
			selectedJob: selectedJob,
			attrFirst: {
				value: this.object.attributes[selectedJob.system.magicAttr]
			},
			attrSecond: {
				value: this.object.attributes[selectedJob.system.magicSecondAttr]
			},
			attrMod: formData.attributeMod || 0
		}

		renderRitualMessage(ritualData);
	}
}

