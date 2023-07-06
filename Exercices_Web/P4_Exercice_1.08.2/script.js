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


const inputBirthDate = document.createElement('select')
inputBirthDate.setAttribute('name', 'birthdate')
inputBirthDate.setAttribute('id', 'birth-date-select')


const inputSubmit = document.createElement('input')
inputSubmit.setAttribute('type', 'submit')
inputSubmit.setAttribute('value', 'valider')
inputSubmit.setAttribute('id', 'submit-btn')


for (var annee = 1980; annee <= 2023; annee++) {
    var option = document.createElement("option");
    option.value = annee;
    option.text = annee;
    inputBirthDate.appendChild(option);
  }

document.body.appendChild(formGlobal)
formGlobal.append(inputText, inputMdp, inputBirthDate,inputSubmit)

const inputs = document.getElementById("my-form").elements;
const loginForm = document.getElementById("my-form")

let tabForm = [];

loginForm.addEventListener('submit', (e) => {
    e.preventDefault() //Empêche de submit le formulaire pour pouvoir executé le code

    let usernameForm = document.getElementById("name").value;
    let passwordForm = document.getElementById("pwd").value;
    let birthYearForm = document.getElementById("birth-date-select").value;

    tabForm.push({
        username: usernameForm,
        password: passwordForm,
        birthYear: parseInt(birthYearForm)
    })
    console.log(tabForm);

})
