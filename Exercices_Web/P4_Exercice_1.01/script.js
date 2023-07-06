let nbClick = 0;

function increments(){
    nbClick++
    pNbClick.innerHTML = `Nombre de clique: ${nbClick}`
}

let pNbClick = document.getElementById('nbClick')
pNbClick.innerHTML = `Nombre de clique: ${nbClick}`
