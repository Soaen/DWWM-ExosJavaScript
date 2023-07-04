const paragraphAdd = document.createElement('p')
paragraphAdd.textContent = 'This text is normal.'


const paragraphAdd2 = document.createElement('p')
paragraphAdd2.setAttribute('class', 'boldpara')


const paragraphBold = document.createElement('b')
paragraphBold.textContent = 'This text is bold.'


document.body.appendChild(paragraphAdd)
document.body.appendChild(paragraphAdd2);
document.getElementsByClassName('boldpara')[0].appendChild(paragraphBold);