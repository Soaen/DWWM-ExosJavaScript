let listSelection = document.getElementsByTagName('ul')


for (let i = 0; i < listSelection.length; i++) {
    listSelection[i].addEventListener("click", function(e) {
        e.target.style.display = 'none';
        for (let n = 0; n < listSelection.length; n++) {
            if (listSelection[n] != e.target)            
                listSelection[n].style.display = 'block'
        }
    })     
}