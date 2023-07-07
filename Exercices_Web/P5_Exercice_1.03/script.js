const data = `
    {
    "complex": {
        "i": -2,
        "x": 3.23
    }
}
`;


const datasJson = JSON.parse(data)

let firstComplex = document.createElement('p')

firstComplex.textContent = datasJson.complex.i

document.body.append(firstComplex)


let secondComplex = document.createElement('p')

secondComplex.textContent = datasJson.complex.x

document.body.append(secondComplex)