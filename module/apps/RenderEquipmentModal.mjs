import { updateEquipment } from "../helpers/actionsHelper/makeEquipmentHelper.mjs";

export default class RenderEquipment extends FormApplication {
	static get defaultOptions() {
		const options = super.defaultOptions;
		options.id = "equipment-change-modal";
		options.template = "systems/ultimaFabula/templates/actionModals/equipment-modal.html";
		options.height = "auto";
		options.width = 600;
		options.minimizable = true;
		options.title = "Equipment action."
		return options;
	}

	getData() {
		let data = super.getData()

		return data
	}

	async _updateObject(event, formData) {

		const updateData = {
			actor: this.object.actor,
			newGear: formData,
			equipedGear: this.object.equipedGear
		}

		updateEquipment(updateData);
	}
}

