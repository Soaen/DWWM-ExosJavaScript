const items = [
    {
    name : "Chaussure A",
    price : 125,
    quantity : 0
    },
    {
    name : "Chaussure B",
    price : 135,
    quantity : 0
    }
    ]

let totalPriceNb = 0;

for (let i = 0; i < items.length; i++) {
    
    let divArticle = document.createElement('article')
    divArticle.style.backgroundColor = 'lightgrey'

    let nameArticle = document.createElement('p')

    nameArticle.textContent = `"${items[i].name}"`

    let priceArticle = document.createElement('p')
    
    priceArticle.textContent = `${items[i].price}€`

    let quantityArticle = document.createElement('p')
    
    quantityArticle.textContent = `Quantity : ${items[i].quantity}`

    quantityArticle.setAttribute('id', `quantity-article${i}`)

    const btnArticle = document.createElement('button')

    btnArticle.innerHTML = 'Ajouter au panier'

    btnArticle.setAttribute('data-id', i)

    btnArticle.setAttribute('onclick', 'add(this.dataset.id)')

    divArticle.append(nameArticle, priceArticle, quantityArticle, btnArticle)


    document.body.appendChild(divArticle)
}




let totalPrice = document.createElement("p")

totalPrice.setAttribute('id', 'p-totalPrice')

totalPrice.textContent = `Montant total : ${totalPriceNb}€`


document.body.appendChild(totalPrice)



function add(e){
    let quantityText = document.getElementById(`quantity-article${e}`)
    let totalPriceText = document.getElementById(`p-totalPrice`)

    items[e].quantity = items[e].quantity + 1
    totalPriceNb = totalPriceNb + parseInt(items[e].price)

    quantityText.textContent = `Quantity : ${items[e].quantity}`

    totalPriceText.textContent = `Montant total : ${totalPriceNb}€` 
}