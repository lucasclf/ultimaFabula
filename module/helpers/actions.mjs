
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
    }
}
