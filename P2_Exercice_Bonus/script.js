let tab = [7, 9 ,11 ,12 ,14 ,18 ,19 ,20, 21 , 22]
let min = 0;
let max = tab.length
let med = (max + min) / 2
let searchedNb = parseInt(prompt('Quel chiffre cherchez vous ?'))
let isFound = false;

med = parseInt(med)

do{
    if(tab.includes(searchedNb)){
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
            searchedNb = parseInt(prompt('Le chiffre entré est invalide, veuillez réessayer.'))
        }
    }else{
        searchedNb = parseInt(prompt('Le chiffre entré n\'est pas disponible dans le tableau, veuillez réessayer.'))  
    }
    

}while(!isFound)
