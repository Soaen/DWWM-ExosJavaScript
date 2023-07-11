const linkMsgApi = 'https://data.snx.ovh/messages.php'


async function loadMessages() {
    fetch(linkMsgApi)
    .then(response => response.json())
    .then(datas => {
        for (let i = 0; i < datas.length; i++) {
            
            let containerHtml = document.getElementById('container')

            let contentArticle = document.createElement('article')
            contentArticle.style.marginLeft = '15px'

            let paraPseudo = document.createElement('p')
            paraPseudo.innerHTML = `${datas[i].pseudo} &agrave; ${datas[i].date}`
            paraPseudo.style.margin = '0px'
            paraPseudo.style.marginTop = '15px'
            paraPseudo.style.color = 'darkgrey'
            paraPseudo.style.fontSize = '10px'

            let paraMsgDiv = document.createElement('div')
            paraMsgDiv.style.backgroundColor = 'lightgrey'
            paraMsgDiv.style.borderRadius = '20px'
            paraMsgDiv.style.width = 'fit-content'
            paraMsgDiv.style.padding = '5px'
            paraMsgDiv.style.paddingRight = '10px'
            paraMsgDiv.style.paddingLeft = '10px'
            paraMsgDiv.style.marginTop = '5px'

            let paraMessage = document.createElement('p')
            paraMessage.innerHTML = datas[i].message
            paraMessage.style.margin = '0px'

            paraMsgDiv.appendChild(paraMessage)

            contentArticle.append(paraPseudo, paraMsgDiv)
            containerHtml.appendChild(contentArticle)
        }
    })
}


loadMessages()