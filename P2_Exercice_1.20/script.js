let tab =  [22, 4, -2, 0, 16, 6]
let moved = false;
let sorted = true;

console.log(tab);

//Tri par sélection
// for (let i = 0; i < tab.length; i++) {
//     for (let n = i + 1; n < tab.length; n++) {
//         if(tab[n] > tab[i]){
//             let tempVar = tab[i]
//             tab[i] = tab[n]
//             tab[n] = tempVar
//         }
//     }
// }

// Tri à bulle
do{
    sorted = true
    for (let p = 0; p < tab.length; p++) {    
        if(tab[p] > tab[p + 1]){
            let tempVar = tab[p + 1]
            tab[p + 1] = tab[p]
            tab[p] = tempVar
            sorted = false
        }
    }
} while(sorted === false)

console.log(tab);
