const linkCateApi = 'https://api.publicapis.org/categories'
const linkEntriesApi = 'https://api.publicapis.org/entries'


async function loadCategories() {
    fetch(linkCateApi)
    .then(response => response.json())
    .then(datas => {
        for (let i = 0; i < datas.count; i++) {
            let selectOnHtml = document.getElementById('filter')

            let optionsCreation = document.createElement('option')
            optionsCreation.setAttribute('valute', datas.categories[i])
            optionsCreation.textContent = datas.categories[i]

            selectOnHtml.appendChild(optionsCreation)

        }
    })
}

async function loadEntries(filter) {
    fetch(linkEntriesApi)
    .then(response => response.json())
    .then(datas => {

        for (let i = 0; i < datas.count; i++) {
        
            if(datas.entries[i].Category === filter){
                let selectNameOnHtml = document.getElementById('apiList')

                let createTr = document.createElement('tr')
    
                let createNameTh = document.createElement('th')
    
                createNameTh.textContent = datas.entries[i].API
    
                let createDescTh = document.createElement('th')
    
                createDescTh.textContent = datas.entries[i].Description
    
                let createAuthTh = document.createElement('th')
    
                createAuthTh.textContent = datas.entries[i].Auth
    
                let createHTTPSTh = document.createElement('th')
    
                createHTTPSTh.textContent = datas.entries[i].HTTPS
    
                let createCorsTh = document.createElement('th')
    
                createCorsTh.textContent = datas.entries[i].Cors
    
                let createLinkTh = document.createElement('th')
    
                createLinkTh.textContent = datas.entries[i].Link
    
                let createCategoryTh = document.createElement('th')
    
                createCategoryTh.textContent = datas.entries[i].Category
    
                createTr.append(createNameTh, createDescTh, createAuthTh, createHTTPSTh, createCorsTh, createLinkTh, createCategoryTh)
    
                selectNameOnHtml.appendChild(createTr)
            }   
        }
    })
    .catch(error => {
        throw(error);
    })
}

loadCategories()

document.getElementById('filter').addEventListener('change', function() {
    let tempDatasScreen = document.getElementById('apiList')
    while(tempDatasScreen.hasChildNodes()){
        tempDatasScreen.removeChild(tempDatasScreen.firstChild)
    }

    let filter = document.getElementById('filter')
    let filterValue = filter.value
    loadEntries(filterValue)
});