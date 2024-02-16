
import { mountAttack } from "./actionsHelper/makeAttackHelper.mjs";
import { mountGuard } from "./actionsHelper/makeGuardHelper.mjs";
import { mountHinder } from "./actionsHelper/makeHinderHelper.mjs";
import { mountObjective } from "./actionsHelper/makeObjectiveHelper.mjs";
import { mountStudy } from "./actionsHelper/makeStudyHelper.mjs";
import { mountOther} from "./actionsHelper/makeOtherHelper.mjs";
import { mountRitual } from "./actionsHelper/makeRitualHelper.mjs";

export async function makeAction(event, actor){
    console.log("CQN | MAKE ACTION!")

    const element = event.currentTarget;
    const dataset = element.dataset;
    const actionType = dataset.action;

    console.log

    switch(actionType){
        case "attack":
            mountAttack(actor);
            break;
        case "equipment":
            //TODO criar ação
            //TODO abrir janela para manusear os equipamentos
            // mountAttack(actor);
            break;
        case "guard":
            mountGuard(actor);
            break;
        case "hinder":
            mountHinder(actor);
            break;
        case "objective":
            mountObjective(actor);
            break;
        case "spell":
            //TODO criar ação
            //TODO abrir janela para escolha das spells e lançar ela no chat
            // mountAttack(actor);
            break;
        case "study":
            mountStudy(actor);
            break;
        case "skill":
            //TODO criar ação
            //TODO abre a janela de escolha de skills e lança ela no chat
            // mountAttack(actor);
            break;
        case "other":
            mountOther(actor);
            break;
        case "ritual":
            mountRitual(actor);
            break;
    }
}
