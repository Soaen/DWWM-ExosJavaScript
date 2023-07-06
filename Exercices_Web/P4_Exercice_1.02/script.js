let listSelection = document.getElementsByTagName('ul')

for (let i = 0; i < listSelection.length; i++) {
    listSelection[i].addEventListener("mouseover", function(){
        listSelection[i].style.backgroundColor = 'red';
    })    
    listSelection[i].addEventListener("mouseout", function(){
        listSelection[i].style.backgroundColor = '';
    })    
}