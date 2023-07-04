let h2Link = document.createElement('h2')
h2Link.textContent = 'HTML Links'
let pLink = document.createElement('p')
pLink.textContent = 'HTML links are defined with the a tag:'
let aLink = document.createElement('a')
aLink.setAttribute('href', 'https://www.w3schools.com')
aLink.textContent = 'HTML links are defined with the a tag:'



document.body.appendChild(h2Link)
document.body.appendChild(pLink)
document.body.appendChild(aLink)