import { mountMessageData } from "../helpers/actionsHelper/makeSkillHelper.mjs";

export default class RenderSkill extends FormApplication {
	static get defaultOptions() {
		const options = super.defaultOptions;
		options.id = "skill-modal";
		options.template = "systems/ultimaFabula/templates/actionModals/skill-modal.html";

		options.width = 600;
		options.minimizable = true;
		options.resizable = true;
		options.title = "Skill action."
		return options;
	}

	getData() {
		return super.getData()
	}

	async _updateObject(event, formData) {
		if(formData.skill == undefined){
			console.log("CQN | Skill not chosen!")
			return;
		}

		const selectedSkill = this._recoverSkill(formData.skill, this.object.skills)
		
		mountMessageData(this.object.actor, selectedSkill);
	}

	_recoverSkill(skillId, skillList){
		for (let key in skillList) {
			if (skillList.hasOwnProperty(key)) {
				let skill = skillList[key].find(skill => skill._id === skillId);
				if (skill) {
					return skill;
				}
			}
		}
	}
}

