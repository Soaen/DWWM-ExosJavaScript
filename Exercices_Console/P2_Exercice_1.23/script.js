let tabChar = [];
let char;
let concChar = '';

while (char != '0') {
    char = prompt(`Choisissez un charactère a ajouter dans le tableau`);
    if (char === '0'){
        console.log(`Saisie finie.`);
    }else if (char.length === 1 && isNaN(char)){
        tabChar.push(char)
    }else{
        console.log(`La valeure rentrée est éronné !`);
    }
}

console.log(tabChar);

for (let i = 0; i < tabChar.length; i++) {
    concChar += tabChar[i]    
}

console.log(concChar);