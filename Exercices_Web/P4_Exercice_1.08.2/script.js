const inputs = document.getElementById("my-form").elements;
const loginForm = document.getElementById("my-form")

let tabForm = [];



loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

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
