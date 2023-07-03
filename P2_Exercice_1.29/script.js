let tabDict = ["alors", "bonjour", "coucou"]
let searchedWord = prompt(`Quel mot souhaite-tu chercher dans la base de données ?`)

if(tabDict.includes(searchedWord)){
    console.log("Le mot existe dans la base de données");
}else{
    console.log("Le mot n'existe pas dans la base de données");
}

console.log(tabDict);