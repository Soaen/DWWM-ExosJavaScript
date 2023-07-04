let nbTab= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let reversedTab =[];

for (let i = nbTab - 1; i >= 0; i--) {
    reversedTab.push(nbTab[i])
}

console.log(reversedTab);



// Autre solution (chiante) (pas compris) (les [] sont plus long que tout le code)


// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let tmp

// for (let i = 0; i < (array.length / 2); i++) {
//     tmp = array[i]
//     array[i] = array[array.length - 1 - i]
//     array[array.length - 1 - i] = tmp
//     console.log(array)
// }