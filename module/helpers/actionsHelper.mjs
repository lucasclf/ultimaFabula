
import { mountAttack } from "./actionsHelper/makeAttackHelper.mjs";
import { mountGuard } from "./actionsHelper/makeGuardHelper.mjs";
import { mountHinder } from "./actionsHelper/makeHinderHelper.mjs";
import { mountObjective } from "./actionsHelper/makeObjectiveHelper.mjs";

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
            //TODO criar ação
            //TODO abre a janela para escolha de atributos e bonus.
            // mountAttack(actor);
            break;
        case "skill":
            //TODO criar ação
            //TODO abre a janela de escolha de skills e lança ela no chat
            // mountAttack(actor);
            break;
        case "other":
            //TODO criar ação
            //TODO joga no chat o texto de outros
            // mountAttack(actor);
            break;
        case "ritual":
            //TODO criar ação
            //TODO abre a janela para escolher a job que irá executar o ritual e roda o teste padrão, joga o texto de ritual no chat
            // mountAttack(actor);
            break;
    }
}
