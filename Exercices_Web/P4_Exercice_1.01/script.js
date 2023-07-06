const pClick = document.createElement('p')
pClick.setAttribute('id', 'nbClick')
pClick.innerHTML = `Nombre de clique: ${nbClick}`

const btnClick = document.createElement('button')
btnClick.setAttribute('id', 'add-btn')
btnClick.textContent = 'Incrémenter'

document.body.append(pClick, btnClick)

let nbClick = 0;
let incrementButton = document.getElementById('add-btn')


incrementButton.addEventListener('click', function(){
        nbClick++
        pNbClick.innerHTML = `Nombre de clique: ${nbClick}`
})

let pNbClick = document.getElementById('nbClick')
pNbClick.innerHTML = `Nombre de clique: ${nbClick}`


