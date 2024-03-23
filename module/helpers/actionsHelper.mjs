
import { mountAttack } from "./actionsHelper/makeAttackHelper.mjs";
import { mountGuard } from "./actionsHelper/makeGuardHelper.mjs";
import { mountHinder } from "./actionsHelper/makeHinderHelper.mjs";
import { mountObjective } from "./actionsHelper/makeObjectiveHelper.mjs";
import { mountStudy } from "./actionsHelper/makeStudyHelper.mjs";
import { mountOther} from "./actionsHelper/makeOtherHelper.mjs";
import { mountRitual } from "./actionsHelper/makeRitualHelper.mjs";
import { mountEquipment } from "./actionsHelper/makeEquipmentHelper.mjs";
import { mountSpell } from "./actionsHelper/makeSpellHelper.mjs";
import { mountInventory } from "./actionsHelper/makeInventoryHelper.mjs";
import { mountSkill } from "./actionsHelper/makeSkillHelper.mjs";

export async function makeAction(event, actor){
    console.log("CQN | MAKE ACTION!")

    const element = event.currentTarget;
    const dataset = element.dataset;
    const actionType = dataset.action;

    switch(actionType){
        case "attack":
            mountAttack(actor);
            break;
        case "equipment":
            mountEquipment(actor);
            break;
        case "guard":
            mountGuard(actor);
            break;
        case "hinder":
            mountHinder(actor);
            break;
        case "inventory":
            mountInventory(actor);
            break;
        case "objective":
            mountObjective(actor);
            break;
        case "spell":
            mountSpell(actor);
            break;
        case "study":
            mountStudy(actor);
            break;
        case "skill":
            mountSkill(actor);
            break;
        case "other":
            mountOther(actor);
            break;
        case "ritual":
            mountRitual(actor);
            break;
    }
}
