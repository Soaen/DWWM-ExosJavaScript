const linkMsgApi = 'https://data.snx.ovh/messages.php'


async function loadMessages() {
    fetch(linkMsgApi)
    .then(response => response.json())
    .then(datas => {

        let containerHtml = document.getElementById('container')
            containerHtml.style.width = '50%'
            containerHtml.style.marginLeft = 'auto'
            containerHtml.style.marginRight = 'auto'
            containerHtml.style.border = '2px lightgrey solid'
            containerHtml.style.marginTop = '20px'
            containerHtml.style.marginBottom = '20px'
            containerHtml.style.borderRadius = '25px'
            containerHtml.style.height = '700px'
            containerHtml.style.overflow = 'auto'
            containerHtml.style.display = 'flex'
            containerHtml.style.flexDirection = 'column-reverse'


        let formChat = document.createElement('form')
            formChat.style.margin = 'auto';
            formChat.style.marginTop = '20px';
            formChat.style.width = '50%'



        let formSendMessage = document.createElement('form')
            formSendMessage.style.margin = 'auto';
            formSendMessage.style.marginTop = '20px';
            formSendMessage.style.width = '50%'


        for (let i = 0; i < datas.length; i++) {
            
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
            paraMsgDiv.style.marginRight = '10px'

            let paraMessage = document.createElement('p')
            paraMessage.innerHTML = datas[i].message
            paraMessage.style.margin = '0px'

            paraMsgDiv.appendChild(paraMessage)

            contentArticle.append(paraPseudo, paraMsgDiv)
            containerHtml.appendChild(contentArticle)
        }

        let formUsernameAsk = document.createElement('input')
            formUsernameAsk.style.width = '100%'
            formUsernameAsk.style.height = '50px'
            formUsernameAsk.style.border = '1px solid lightgrey'
            formUsernameAsk.style.borderRadius = '10px'

            formUsernameAsk.setAttribute('type', 'text')

            formUsernameAsk.setAttribute('placeholder', 'Pseudo')

        let formMessageDiv = document.createElement('div')
            formMessageDiv.style.width = '100%'

        let formMessageAsk = document.createElement('input')
            formMessageAsk.style.width = '70%'

            formMessageAsk.style.height = '50px'
            formMessageAsk.style.border = '1px solid lightgrey'
            formMessageAsk.style.borderRadius = '10px'

            formMessageAsk.setAttribute('type', 'text')
            formMessageAsk.setAttribute('placeholder', 'Message')

        let formSendButton = document.createElement('button')
            formSendButton.style.width = '20%'
            formSendButton.style.marginLeft = '10%';

            formSendButton.textContent = 'Envoyer'
            formSendButton.style.padding = '15px'
            formSendButton.style.color = 'black'
            formSendButton.style.backgroundColor = 'deepskyblue'
            formSendButton.style.borderRadius = '15px'
            formSendButton.style.border = 'none'

            formMessageDiv.append(formMessageAsk, formSendButton)

            formSendMessage.appendChild(formMessageDiv)

            formChat.appendChild(formUsernameAsk)

            containerHtml.before(formChat)

            containerHtml.after(formSendMessage)


    })
}

loadMessages()





