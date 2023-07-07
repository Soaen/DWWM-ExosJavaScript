data = `
{
"name": "Robert",
"address": "6, rue Paul",
"city": "Lyon"
}
`;


const datasJson = JSON.parse(data)

const nameJson = document.createElement('p')
nameJson.textContent = datasJson.name

const addressJson = document.createElement('p')
addressJson.textContent = datasJson.address

const cityJson = document.createElement('p')
cityJson.textContent = datasJson.city

document.body.append(nameJson, addressJson, cityJson)