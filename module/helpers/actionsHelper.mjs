
import { mountAttack } from "./actionsHelper/makeAttackHelper.mjs";
import { mountGuard } from "./actionsHelper/makeGuardHelper.mjs";

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
            //TODO criar ação
            //TODO abrir janela para manusear os equipamentos
            // mountAttack(actor);
            break;
        case "guard":
            //TODO criar ação
            //TODO lançar texto do guard
            mountGuard(actor);
            break;
        case "hinder":
            //TODO criar ação
            //TODO Abrir uma janela para escolha de atributos e bonus, mais rolagem e escolher a condição a ser inflingida
            mountAttack(actor);
            break;
        case "objective":
            //TODO criar ação
            //TODO Abrir uma janela para escolha de atributos e bonus, mais rolagem
            // mountAttack(actor);
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
