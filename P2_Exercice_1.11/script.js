let tabNb = []
let totalPrice = 0;
let saisie = 1;
let nbEntree = 1;
let paidPrice = 0;
let monnaie = 0;

do{
    saisie = parseInt(prompt(`Écrivez le prix n°${nbEntree}. Entrez un 0 quand vous souhaitez finir.`))
    nbEntree++
    if (saisie != 0)
        tabNb.push(saisie)
}while(saisie != 0)

tabNb.forEach(e =>{
    totalPrice = totalPrice + e
})

console.log(`Le prix total est de ${totalPrice}€ Votre monnaie va vous être rendu.`);

do{
    paidPrice = parseInt(prompt(`Vous devez payé ${totalPrice}. Entrez la somme donnée.`))
}while (paidPrice < totalPrice)

monnaie = paidPrice - totalPrice

while(monnaie >= 10){
    console.log("10 Euros");
    monnaie = monnaie - 10
}
while(monnaie >= 5){
    console.log("5 Euros");
    monnaie = monnaie - 5
}
while(monnaie >= 2){

    console.log("2 Euros");
    monnaie = monnaie - 2
}
while(monnaie >= 1){
    console.log("1 Euros");
    monnaie = monnaie - 1
}