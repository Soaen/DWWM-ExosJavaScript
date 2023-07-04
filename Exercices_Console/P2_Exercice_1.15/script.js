let tab = []
let moyenne = 0.0;

for (let i = 0; i < 9; i++) {
    tab[i] = parseFloat(prompt(`Entrez la note n° ${i +1}.`))
}

tab.forEach(e => {
    moyenne = moyenne + e
})

moyenne = moyenne / tab.length

console.log(tab);

console.log(`La moyenne de l'élève est ${moyenne}`);