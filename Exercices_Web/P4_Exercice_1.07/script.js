let nbClick = 0;

const pClick = document.createElement('p')
pClick.setAttribute('id', 'nbClick')
pClick.innerHTML = `Nombre de clique: ${nbClick}`

const btnClick = document.createElement('button')
btnClick.setAttribute('id', 'add-btn')
btnClick.textContent = 'Incrémenter'

const btnRemoveClick = document.createElement('button')
btnRemoveClick.setAttribute('id', 'remove-btn')
btnRemoveClick.textContent = 'Retrancher'

document.body.append(pClick, btnClick, btnRemoveClick)


let incrementButton = document.getElementById('add-btn')
let drecrementButton = document.getElementById('remove-btn')

incrementButton.addEventListener('click', function(){
        nbClick++
        pNbClick.innerHTML = `Nombre de clique: ${nbClick}`
})
drecrementButton.addEventListener('click', function(){
        nbClick--
        pNbClick.innerHTML = `Nombre de clique: ${nbClick}`
})

let pNbClick = document.getElementById('nbClick')
pNbClick.innerHTML = `Nombre de clique: ${nbClick}`
