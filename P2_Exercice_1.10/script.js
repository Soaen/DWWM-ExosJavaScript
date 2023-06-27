let tabNb = []
let biggerNb = 0;
let biggerIndex = 0;
let saisie = 1;
let nbEntree = 1;

do{
    saisie = prompt(`Écrivez le chiffre n°${nbEntree}. Entrez un 0 quand vous souhaitez finir.`)
    nbEntree++
    if (saisie != 0)
        tabNb.push(saisie)
}while(saisie != 0)


tabNb.forEach(e =>{
    biggerNb = e
})

for (let n = 0; n < tabNb.length; n++) {
    if(tabNb[n] > biggerNb){
        biggerNb = tabNb[n];
        biggerIndex = n
    }
    
}

console.log(`Le chiffre le plus grand est ${biggerNb} il a été rentrée en position n°${biggerIndex + 1}`);