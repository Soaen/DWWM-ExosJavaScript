let number = parseInt(prompt('Entrez un nombre compris entre 10 et 20'));

do{

    number = prompt(number > 20 ? "Plus petit !" : "Plus grand !");

}while(!(number >= 10 && number <= 20))

console.log("Le nombre est bien compris entre 10 et 20 !");