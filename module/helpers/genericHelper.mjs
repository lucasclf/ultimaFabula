export function extractAttrDiceValue(attr){
    return attr.match(/\d+/)[0] || 6;
}

export function captalizeFirstLetter(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function captalizeText(text){
    return text.toUpperCase();
}

export function extractItem(items, type){
    return items.filter(obj => obj.type === type);
}

export function manipuleStudyCss(resultTotal, minResult, maxResult){   
    if(resultTotal < minResult || resultTotal > maxResult){
        return "study-active";
    }

    return "study-inactive";
}

export function recoverActorJobs(actor){

    return actor.items.filter(item => item.type === 'job');
}

export function recoverJob(jobList, jobId){
    const job = jobList.filter(item => item._id === jobId)[0];
    if(job != undefined){
        return job.name
    }
    
    return "No-Job"
}