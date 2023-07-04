let number = prompt('Entrez un nombre compris entre 1 et 3');

do{

    number = prompt(`Le nombre n'est pas compris entre 1 et 3 ! réessaie !`)

}while(!(number >= 1 && number <= 3))

console.log("Le nombre est bien compris entre 1 et 3 !");