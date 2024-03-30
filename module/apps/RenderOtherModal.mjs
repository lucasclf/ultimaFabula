import { renderOtherMessage } from "../helpers/actionsHelper/makeOtherHelper.mjs";
import { localize } from "../helpers/localizeHelper.mjs";

export default class RenderObjective extends FormApplication {
	static get defaultOptions() {
		const options = super.defaultOptions;
		options.id = "other-modal";
		options.template = "systems/ultimaFabula/templates/actionModals/other-modal.html";
		options.height = "auto";
		options.width = 600;
		options.minimizable = true;
		options.title = localize(CONFIG.ULTIMAFABULA.modalActions.otherTitle);
		return options;
	}

	getData() {
		return super.getData()
	}

	async _updateObject(event, formData) {
		const otherData = {
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

		renderOtherMessage(otherData);
	}
}

