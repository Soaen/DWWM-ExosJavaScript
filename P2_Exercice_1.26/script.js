let valTab = [];
let entry = 0;
let positiveEntry = [];
let negativeEntry = [];


do{
    entry = parseInt(prompt(`Entrez une valeure à ajouter au tableau, pour finir entrez "0"`))

    if(!isNaN(entry) && entry != 0){
        valTab.push(entry)
        entry >= 0 ? positiveEntry.push(entry) : negativeEntry.push(entry)
    } else{
        entry = parseInt(prompt(`Entrez une valeure à ajouter au tableau, pour finir entrez "0"`))
    }


}while(entry != 0)


console.log(`Voici les valeures entrées ${valTab}`);
console.log(`Voici les valeures positive ${positiveEntry}`);
console.log(`Voici les valeures négative ${negativeEntry}`);