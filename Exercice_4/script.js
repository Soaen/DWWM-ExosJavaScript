const number = parseInt(prompt("Entrez un nombre plus grand que 0", "0"))

    // if(!isNaN(number)){
    //     console.log(number > 0 ? number : "Vous deviez entrer un nombre supérieur à 0"); 
    // } else{
    //     console.log("Ce n'est pas un nombre");
    // }


console.log(isNaN(number) ? "Ce n'est pas un nombre !" : number > 0 ? number : "Vous deviez entrer un nombre supérieur à 0");