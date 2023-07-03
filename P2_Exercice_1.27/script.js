let nbReprographie = parseInt(prompt(`Combien voulez-vous de photocopie ?`))
let price = 0;
let nbRepro10 = 0, nbRepro9 = 0

while(nbReprographie != 0){
    if(nbRepro10 < 10){
        price += 0.1
        nbReprographie -= 1
        nbRepro10++
        console.log('0.10');
    }else if(nbRepro9 < 20){
        price += 0.09
        nbReprographie -= 1
        nbRepro9++
        console.log('0.09');

    } else{
        price += (nbReprographie * 0.08)
        nbReprographie = 0
        console.log('0.08');
    }

}


console.log(price.toFixed(2));