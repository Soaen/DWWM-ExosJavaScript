const number = parseInt(prompt("Quel chiffre souhaite tu avoir la table de multiplication ?"))
let tabNb = [];
let nbTotal = 0;
let calcul = " ";

for (let i = 1; i <= number; i++) {
    nbTotal = nbTotal + i
    if(i < number){
        calcul = calcul + i + " + "
    } else{
        calcul = calcul + i
    }
}

console.log(`La somme de${calcul} = ${nbTotal}` );