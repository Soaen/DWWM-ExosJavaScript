let tab =  [22, 4, -2, 0, 16, 6]
let smaller;

console.log(tab);



//Tri par sélection
// for (let i = 0; i < tab.length; i++) {
//     for (let n = 0; n < tab.length; n++) {
//         if(tab[n] > tab[i]){
//             let tempVar = tab[i]
//             tab[i] = tab[n]
//             tab[n] = tempVar
//         }
//     }
// }



// Tri à bulle

for (let p = 0; p < tab.length; p++) {    
    
    if(tab[p] > tab[p + 1]){
        let tempVar = tab[p + 1]
        tab[p + 1] = tab[p]
        tab[p] = tempVar
    }

}



console.log(tab);
