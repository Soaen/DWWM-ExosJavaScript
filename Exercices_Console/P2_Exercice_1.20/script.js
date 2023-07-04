let tabNotes = []
let userValue;
let nbGrandesNotes = 0
let moyenne

for (let i = 0; i < 13; i++) {
    userValue = parseInt(prompt("Entrez un nombre"))
    tabNotes.push(userValue)
}

let somme = 0;

for (let i = 0; i < tabNotes.length; i++) {
    somme += tabNotes[i];
}

moyenne = somme / tabNotes.length

for (let i = 0; i < tabNotes.length; i++) {
    if (tabNotes[i] > moyenne) {
        nbGrandesNotes++;
    }
    
}

console.log("Le nombre de notes supérieures a la moyenne est de " + nbGrandesNotes);