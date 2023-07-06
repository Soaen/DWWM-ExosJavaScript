const css = "p.error { color: red }"

const style = document.createElement('style')
style.innerHTML = css
document.head.appendChild(style)


let normalP = document.createElement('p')
normalP.textContent = 'This is a paragrah'

// let normalP2 = document.createElement('p')
// normalP2.textContent = 'This is a paragrah'
// let normalP3 = document.createElement('p')
// normalP3.textContent = 'This is a paragrah'


let errorP = document.createElement('p')
errorP.setAttribute('class', 'error')
errorP.textContent = 'I am different.'


let errorP2 = document.createElement('p')
errorP2.setAttribute('class', 'error')
errorP2.textContent = 'I am different too.'



document.body.appendChild(normalP)
document.body.appendChild(normalP.cloneNode(true))
document.body.appendChild(errorP)
document.body.appendChild(normalP.cloneNode(true))
document.body.appendChild(errorP2)