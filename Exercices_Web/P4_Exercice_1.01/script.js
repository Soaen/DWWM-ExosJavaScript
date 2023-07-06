let nbClick = 0;

let incrementButton = document.getElementById('add-btn')

incrementButton.addEventListener('click', function(){
        nbClick++
        pNbClick.innerHTML = `Nombre de clique: ${nbClick}`
})

let pNbClick = document.getElementById('nbClick')
pNbClick.innerHTML = `Nombre de clique: ${nbClick}`
