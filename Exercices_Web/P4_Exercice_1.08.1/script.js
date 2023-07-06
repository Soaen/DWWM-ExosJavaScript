const formGlobal = document.createElement('form')
formGlobal.setAttribute('action', "GET")
formGlobal.setAttribute('id', "my-form")


const inputText = document.createElement('input')
inputText.setAttribute('type', 'text')
inputText.setAttribute('name', 'name')
inputText.setAttribute('id', 'name')
inputText.setAttribute('placeholder', 'Username')


const inputMdp = document.createElement('input')
inputMdp.setAttribute('type', 'password')
inputMdp.setAttribute('name', 'pwd')
inputMdp.setAttribute('id', 'pwd')
inputMdp.setAttribute('placeholder', 'Password')


const inputSubmit = document.createElement('input')
inputSubmit.setAttribute('type', 'submit')
inputSubmit.setAttribute('value', 'valider')
inputSubmit.setAttribute('id', 'submit-btn')


document.body.appendChild(formGlobal)
formGlobal.append(inputText, inputMdp, inputSubmit)


const inputs = document.getElementById("my-form").elements;
const loginForm = document.getElementById("my-form")

let tabForm = [];



loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let usernameForm = document.getElementById("name").value;
    let passwordForm = document.getElementById("pwd").value;

    tabForm.push({
        username: usernameForm,
        password: passwordForm
    })
    console.log(tabForm);

})
