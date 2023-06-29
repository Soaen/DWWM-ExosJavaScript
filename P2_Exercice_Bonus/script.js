let tab = [7, 9 ,11 ,12 ,14 ,18 ,19 ,20, 21 , 22]
let min = 0;
let max = tab.length
let med = (max + min) / 2
let searchedNb = parseInt(prompt('Quel chiffre cherchez vous ?'))
let isFound = false;

med = parseInt(med)

do{

    if(tab[med] > searchedNb){
        console.log('Plus bas !');
        max = med
        med = (max + min) / 2
        med = parseInt(med)

    } else if(tab[med] < searchedNb){
        console.log(`Plus haut !`);
        min = med
        med = (max + min) / 2
        med = parseInt(med)
    } else if(tab[med] === searchedNb){
        isFound = true
        console.log(`Le chiffre ${searchedNb} à été trouver à l'index ${med}`);
    } else{
        isFound = true
        console.log('bug');
    }

}while(!isFound)
