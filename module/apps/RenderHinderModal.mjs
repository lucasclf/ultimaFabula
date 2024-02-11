import { renderHinderMessage } from "../helpers/actionsHelper/makeHinderHelper.mjs";

export default class RenderHinder extends FormApplication {
	static get defaultOptions() {
		const options = super.defaultOptions;
		options.id = "hinder-modal";
		options.template = "systems/ultimaFabula/templates/actionModals/hinder-modal.html";
		options.height = "auto";
		options.width = 600;
		options.minimizable = true;
		options.title = "Hinder action."
		return options;
	}

	getData() {
		return super.getData()
	}

	async _updateObject(event, formData) {
		const hinderData = {
			actor: this.object.actor,
			accuracyFirst: {
				name: formData.accuracyFirst,
				value: this.object.attributes[formData.accuracyFirst]
			},
			accuracySecond: {
				name: formData.accuracySecond,
				value: this.object.attributes[formData.accuracySecond]
			},
			accuracyMod: formData.accuracyMod || 0,
			condition: formData.condition
		}

		renderHinderMessage(hinderData);
	}
}

