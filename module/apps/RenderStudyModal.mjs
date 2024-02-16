import { renderStudyMessage } from "../helpers/actionsHelper/makeStudyHelper.mjs";

export default class RenderObjective extends FormApplication {
	static get defaultOptions() {
		const options = super.defaultOptions;
		options.id = "attack-modal";
		options.template = "systems/ultimaFabula/templates/actionModals/study-modal.html";
		options.height = "auto";
		options.width = 600;
		options.minimizable = true;
		options.title = "Study action."
		return options;
	}

	getData() {
		return super.getData()
	}

	async _updateObject(event, formData) {
		const studyData = {
			actor: this.object.actor,
			attributeFirst: {
				name: formData.attributeFirst,
				value: this.object.attributes[formData.attributeFirst]
			},
			attributeSecond: {
				name: formData.attributeSecond,
				value: this.object.attributes[formData.attributeSecond]
			},
			attributeMod: formData.attributeMod || 0
		}

		renderStudyMessage(studyData);
	}
}

