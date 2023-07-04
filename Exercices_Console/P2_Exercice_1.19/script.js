let tabNb = []
let biggerNb = 0;
let biggerIndex = 0;

for (let i = 0; i < 5; i++) {
   tabNb.push(prompt(`Écrivez le chiffre n°${i + 1}`))
}

tabNb.forEach(e =>{
    biggerNb = e
})

for (let n = 0; n < tabNb.length; n++) {
    if(tabNb[n] > biggerNb){
        biggerNb = tabNb[n];
        biggerIndex = n
    }
    
}

console.log(`Le chiffre le plus grand est ${biggerNb} il a été rentrée en position n°${biggerIndex + 1}`);