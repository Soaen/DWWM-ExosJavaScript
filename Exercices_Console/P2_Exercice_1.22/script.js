let nbPrompt = parseInt(prompt(`Entrez un chiffre entre 1 et 10 non compris !`))
let randomNb = Math.floor(Math.random() * 10)
let nbTry = 1

while (randomNb != nbPrompt) {
    if(nbPrompt < 10 && nbPrompt > 0){
        console.log(randomNb > nbPrompt ? `Essaie n° ${nbTry} résultat: ${randomNb} \nPlus petit !` : `Essaie n° ${nbTry} résultat: ${randomNb} \nPlus grand !`);
        randomNb = Math.floor(Math.random() * 10)
    }else{
        console.log(`Le chiffre entrer n'est pas valide !`);
        nbPrompt = parseInt(prompt(`Entrez un chiffre entre 1 et 10 non compris !`))
    }
}

console.log(`Le chiffre ${randomNb} a été trouver !`);