let firstTab = [1, 5, 15, 26, 75];
let secondTab = [3, 8, 13, 14, 24];
let sortedTab = [];
let index1 = 0;
let index2 = 0;



while(index1 < firstTab.length && index2 < secondTab.length){
    if(firstTab[index1] <= secondTab[index2]){
        sortedTab.push(firstTab[index1]);
        index1++;
    }else{
        sortedTab.push(secondTab[index2]);
        index2++;
    }
}

while(index1 < firstTab.length){
    sortedTab.push(firstTab[index1])
    index1++;
}


console.log(sortedTab);