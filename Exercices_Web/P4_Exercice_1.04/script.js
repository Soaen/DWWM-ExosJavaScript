let listSelection = document.getElementsByTagName('ul')

for (let i = 0; i < listSelection.length; i++) {
        listSelection[i].addEventListener("mouseover", function(){
            listSelection[i].style.backgroundColor = '';
            for (let n = 0; n < listSelection.length; n++) {
                if (n != i)
                listSelection[n].style.backgroundColor = 'red'
            }
        })    
        listSelection[i].addEventListener("mouseout", function(){
            for (let n = 0; n < listSelection.length; n++) {
                if (n != i)
                listSelection[n].style.backgroundColor = ''
            }
        })    
}