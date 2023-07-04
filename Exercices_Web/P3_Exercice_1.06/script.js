let h2First = document.createElement('h2')
h2First.textContent = 'A Nested List'

let pFirst = document.createElement('p')
pFirst.textContent = 'Lists can be nested (list inside list):'


let ulFirst = document.createElement('ul')


let liFirst = document.createElement('li')
liFirst.textContent = 'Coffee'


let liSecond = document.createElement('li')
liSecond.textContent = 'Tea'

let ulSecond = document.createElement('ul')


let liThird = document.createElement('li')
liThird.textContent = 'Black tea'

let liFourth = document.createElement('li')
liFourth.textContent = 'Green tea'

let liFifth = document.createElement('li')
liFifth.textContent = 'Milk'

document.body.appendChild(ulFirst)
ulFirst.appendChild(liFirst)
ulFirst.appendChild(liSecond)
liFirst.appendChild(ulSecond)
ulSecond.appendChild(liThird)
ulSecond.appendChild(liFourth)
ulFirst.appendChild(liFifth)