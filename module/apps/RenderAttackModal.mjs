import { renderAttackMessage } from "../helpers/makeAttackHelper.mjs";

export default class RenderAttack extends FormApplication {
	static get defaultOptions() {
		const options = super.defaultOptions;
		options.id = "attack-modal";
		options.template = "systems/ultimaFabula/templates/actionModals/attack-modal.html";
		options.height = "auto";
		options.width = 600;
		options.minimizable = true;
		options.title = "Attack action."
		return options;
	}

	getData() {
		let data = super.getData()
		return data
	}

	async _updateObject(event, formData) {
		
		if(formData.weapon === "bothHands"){
			
			this.object.mainHand.damage = this._calcDamageWithBothWeapons(this.object.mainHand);
			this.object.offHand.damage = this._calcDamageWithBothWeapons(this.object.offHand);

			renderAttackMessage(this.object.mainHand);
			renderAttackMessage(this.object.offHand);		
		} else {
			renderAttackMessage(this.object[formData.weapon]);
		}

	}

	_calcDamageWithBothWeapons(weapon){
		const highRoll = weapon.diceRoll.dice.reduce((max, dice) => {
			return (max.results[0].result > dice.results[0].result) ? max : dice;
		}).results[0].result;
	
		const newDamage = weapon.damage - highRoll;
		return newDamage >= 0 ? newDamage : 0;
	}
}

