export function captalizeFirstLetter(text){
    console.log()
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function captalizeText(text){
    return text.toUpperCase();
}

export function captalizeFirstLetterOfWords(text){
    const words = text.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
    }

    const captalizedText = words.join(" ");

    return captalizedText
}