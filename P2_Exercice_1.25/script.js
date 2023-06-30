let nbTab = [12, 8, 4, 45, 64, 9, 2]
let indexAskRemove = parseInt(prompt(`Quel index souhaitez-vous retirer ?`))
let tempIndexRemove = indexAskRemove
let resultNbTab = [];

while(isNaN(indexAskRemove || indexAskRemove > (nbTab.length - 1))){
    indexAskRemove = parseInt(prompt(`Le nombre entrer est invalide, réessaie !`))
    tempIndexRemove = indexAskRemove
}

while(nbTab.length > tempIndexRemove){
    nbTab[tempIndexRemove] = nbTab[tempIndexRemove + 1]
    tempIndexRemove++
}

for (let i = 0; i < nbTab.length - 1; i++) {
    resultNbTab.push(nbTab[i])    
}


console.log(nbTab);
console.log(resultNbTab);