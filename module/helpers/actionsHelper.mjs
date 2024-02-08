
import { mountAttack } from "./makeAttackHelper.mjs";

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
            mountAttack(actor);
            break;
        case "guard":
            mountAttack(actor);
            break;
        case "hinder":
            mountAttack(actor);
            break;
        case "spell":
            mountAttack(actor);
            break;
        case "study":
            mountAttack(actor);
            break;
        case "skill":
            mountAttack(actor);
            break;
        case "other":
            mountAttack(actor);
            break;
        case "ritual":
            mountAttack(actor);
            break;
    }
}
