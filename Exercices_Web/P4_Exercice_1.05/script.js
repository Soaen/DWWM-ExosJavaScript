let listSelection = document.getElementsByTagName('ul')
let keyPressed = 0;

document.addEventListener("keydown", function() {
    if(keyPressed < listSelection.length)
        listSelection[keyPressed].style.backgroundColor = 'red';
        keyPressed++;
})     
