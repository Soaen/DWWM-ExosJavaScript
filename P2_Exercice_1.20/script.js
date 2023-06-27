let tab =  [22, 4, -2, 0, 16, 6]
let moved = false;
let sorted = false;

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
    for (let p = 0; p < tab.length; p++) {    

        if(tab[p] > tab[p + 1]){
            let tempVar = tab[p + 1]
            tab[p + 1] = tab[p]
            tab[p] = tempVar
            moved = true
        }
    }
    if(!moved)
        sorted = true
    moved = false
} while(sorted === false)

console.log(tab);
