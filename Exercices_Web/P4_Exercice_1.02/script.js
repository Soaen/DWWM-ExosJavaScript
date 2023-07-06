const liCreation = document.createElement('ul')
liCreation.textContent = "1"
document.body.appendChild(liCreation)
const liCreation2 = liCreation.cloneNode(true)
liCreation2.textContent = "2"
document.body.appendChild(liCreation2)
const liCreation3 = liCreation.cloneNode(true)
liCreation3.textContent = "3"
document.body.appendChild(liCreation3)
const liCreation4 = liCreation.cloneNode(true)
liCreation4.textContent = "4"
document.body.appendChild(liCreation4)

let listSelection = document.getElementsByTagName('ul')

for (let i = 0; i < listSelection.length; i++) {
    listSelection[i].addEventListener("mouseover", function(){
        listSelection[i].style.backgroundColor = 'red';
    })    
    listSelection[i].addEventListener("mouseout", function(){
        listSelection[i].style.backgroundColor = '';
    })    
}