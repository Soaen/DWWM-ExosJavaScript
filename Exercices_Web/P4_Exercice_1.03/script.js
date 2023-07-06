let listSelection = document.getElementsByTagName('ul')

for (let i = 0; i < listSelection.length; i++) {
    if(i+1 < listSelection.length){
        listSelection[i].addEventListener("mouseover", function(){
            listSelection[i+1].style.backgroundColor = 'red';
        })    
        listSelection[i].addEventListener("mouseout", function(){
            listSelection[i+1].style.backgroundColor = '';
        })    
    }
}