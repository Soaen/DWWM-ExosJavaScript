let h2First = document.createElement('h2')

h2First.textContent = 'Table With Border'

let pFirst = document.createElement('p')

pFirst.textContent = 'Use the CSS border property to add a border to the table.'





let tableFirst = document.createElement('table')
tableFirst.setAttribute('style', 'width:100%')




let trFirst = document.createElement('tr')
trFirst.setAttribute('class', 'first-tr')


let thFirst = document.createElement('th')
thFirst.textContent = 'Firstname'

let thSecond = document.createElement('th')
thSecond.textContent = 'LastName'

let thThird = document.createElement('th')
thThird.textContent = 'Age'





let trFirst2 = document.createElement('tr')
trFirst2.setAttribute('class', 'second-tr')


let thFirst2 = document.createElement('th')
thFirst2.textContent = 'Jill'

let thSecond2 = document.createElement('th')
thSecond2.textContent = 'Smith'

let thThird2 = document.createElement('th')
thThird2.textContent = '50'


let trFirst3 = document.createElement('tr')
trFirst3.setAttribute('class', 'third-tr')


let thFirst3 = document.createElement('th')
thFirst3.textContent = 'Eve'

let thSecond3 = document.createElement('th')
thSecond3.textContent = 'Jackson'

let thThird3 = document.createElement('th')
thThird3.textContent = '94'



let trFirst4 = document.createElement('tr')
trFirst4.setAttribute('class', 'fourth-tr')


let thFirst4 = document.createElement('th')
thFirst4.textContent = 'John'

let thSecond4 = document.createElement('th')
thSecond4.textContent = 'Doe'

let thThird4 = document.createElement('th')
thThird4.textContent = '80'


document.body.appendChild(h2First)
document.body.appendChild(pFirst)
document.body.appendChild(tableFirst)


tableFirst.appendChild(trFirst)
let firstTrSelected = document.getElementsByClassName('first-tr')[0]
firstTrSelected.appendChild(thFirst)
firstTrSelected.appendChild(thSecond)
firstTrSelected.appendChild(thThird)


tableFirst.appendChild(trFirst2)
let secondTrSelected = document.getElementsByClassName('second-tr')[0]
secondTrSelected.appendChild(thFirst2)
secondTrSelected.appendChild(thSecond2)
secondTrSelected.appendChild(thThird2)



tableFirst.appendChild(trFirst3)
let thirdTrSelected = document.getElementsByClassName('third-tr')[0]
thirdTrSelected.appendChild(thFirst3)
thirdTrSelected.appendChild(thSecond3)
thirdTrSelected.appendChild(thThird3)



tableFirst.appendChild(trFirst4)
let fourthTrSelected = document.getElementsByClassName('fourth-tr')[0]
fourthTrSelected.appendChild(thFirst4)
fourthTrSelected.appendChild(thSecond4)
fourthTrSelected.appendChild(thThird4)



