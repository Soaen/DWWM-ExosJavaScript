let tab = [4, 8, 7, 12]
let tab2 = [3, 6]
let sommes = 0

tab.forEach(e => {
    tab2.forEach(i => {
        sommes = sommes + (e * i)
    })
})

console.log(sommes);