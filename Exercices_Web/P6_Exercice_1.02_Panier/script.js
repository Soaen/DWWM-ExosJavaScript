let chaussureDatas = []
let sneakersDatas = []
let allDatas = []

const chaussuresApiLink = "https://data.snx.ovh/panier/chaussures.json"
const sneakersApiLink = "https://data.snx.ovh/panier/sneakers.json"
let globalArticle = document.getElementById('global-articles')
let totalPriceNb = 0;
let globalArticleNb = 0;

async function loadChaussures(){
    fetch(chaussuresApiLink)
        .then(response => response.json())
        .then(datas  => {
            createArticle(datas)
            allDatas = datas
        })
}

async function loadSneakers(){
    fetch(sneakersApiLink)
        .then(response => response.json())
        .then(datas => {
            createArticle(datas)
        })
}

function createArticle(datas){
    for (let i = 0; i < datas.length; i++) { 
        allDatas.push(datas[i]);


    
        let divArticle = document.createElement('article')
        divArticle.style.backgroundColor = 'lightgrey'
    
        let nameArticle = document.createElement('p')
    
        nameArticle.textContent = `"${datas[i].name}"`
    
        let priceArticle = document.createElement('p')
        
        priceArticle.textContent = `${datas[i].price}€`
    
        let quantityArticle = document.createElement('p')
        
        quantityArticle.textContent = `Quantity : ${datas[i].quantity}`
    
        quantityArticle.setAttribute('id', `quantity-article${globalArticleNb}`)
    
        const btnArticle = document.createElement('button')
    
        btnArticle.innerHTML = 'Ajouter au panier'
    
        btnArticle.setAttribute('data-id', globalArticleNb)
    
        btnArticle.setAttribute('onclick', 'add(this.dataset.id)')
    
        divArticle.append(nameArticle, priceArticle, quantityArticle, btnArticle)
    
        globalArticle.appendChild(divArticle)

        globalArticleNb++

    }
}

function add(e){
    let quantityText = document.getElementById(`quantity-article${e}`);
    let totalPriceText = document.getElementById(`p-totalPrice`);

    allDatas[e].quantity = allDatas[e].quantity + 1;
    totalPriceNb = totalPriceNb + parseInt(allDatas[e].price);
  
    quantityText.textContent = `Quantity : ${allDatas[e].quantity}`;
  
    totalPriceText.textContent = `Montant total : ${totalPriceNb}€`;
}

function createSellTotal(){
        let totalPrice = document.createElement("p")

        totalPrice.setAttribute('id', 'p-totalPrice')

        totalPrice.textContent = `Montant total : ${totalPriceNb}€`

        globalArticle.after(totalPrice)
}

loadChaussures()
loadSneakers()
createSellTotal()