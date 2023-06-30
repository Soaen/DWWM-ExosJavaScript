let age = parseInt(prompt(`Quel est votre âge ?`))
let sexe = prompt(`Quel est votre sexe ? homme/femme`)

if(sexe === 'homme' && age > 20){
    console.log(`Tu payes des impots à Zorglub gros naze t'es pas à Malte !`);
}else if(sexe === 'femme' && age >= 18 && age <= 35){
    console.log(`Tu payes des impots à Zorglub gros naze t'es pas à Malte !`);

} else{
    console.log(`Tu payes pas d'impot à Zorglub gg t'es chaud`);
}