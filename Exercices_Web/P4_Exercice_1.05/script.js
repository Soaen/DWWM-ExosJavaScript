let listSelection = document.getElementsByTagName('ul')
let keyPressed = 0;

for (let i = 0; i < listSelection.length; i++) {
    listSelection[i].addEventListener("keydown", function(event) {
        if (event.key === 'Enter') {
        listSelection[keyPressed].style.backgroundColor = 'red';
        console.log('test');
        keyPressed++;
        }
    })     
    
}
