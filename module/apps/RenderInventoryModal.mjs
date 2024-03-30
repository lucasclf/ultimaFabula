import { renderInventoryMessage } from "../helpers/actionsHelper/makeInventoryHelper.mjs";
import { localize } from "../helpers/localizeHelper.mjs";

export default class RenderInventory extends FormApplication {
	static get defaultOptions() {
		const options = super.defaultOptions;
		options.id = "inventory-modal";
		options.template = "systems/ultimaFabula/templates/actionModals/inventory-modal.html";
		options.height = "auto";
		options.width = 600;
		options.minimizable = true;
		options.title = localize(CONFIG.ULTIMAFABULA.modalActions.inventoryTitle);
		return options;
	}

	getData() {
		return super.getData()
	}

	async _updateObject(event, formData) {
		if(formData.selectedItem == undefined){
			return
		}

		const inventoryData = {
			actor: this.object.actor,
			selectedItem: formData.selectedItem
		}

		renderInventoryMessage(inventoryData);
	}
}

