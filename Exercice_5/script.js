const choix1 = prompt('Joueur 1 : Pierre Feuille ou Ciseaux ?')
const choix2 = prompt('Joueur 2 : Pierre Feuille ou Ciseaux ?')

switch(choix1){
    case "Pierre":
        console.log(choix2 === "Feuille" ?  "Le joueur 2 a gagner !" : choix2 === "Pierre" ? "Égalitée !" : "Le joueur 1 a gagner !");
        break;
    case "Feuille":
        console.log(choix2 === "Ciseaux" ?  "Le joueur 2 a gagner !" : choix2 === "Feuille" ? "Égalitée !" : "Le joueur 1 a gagner !");
        break;
    case "Ciseaux":
        console.log(choix2 === "Pierre" ?  "Le joueur 2 a gagner !" : choix2 === "Ciseaux" ? "Égalitée !" : "Le joueur 1 a gagner !");
        break;
    default:
        console.log("Une des valeure entrée n'a pas été reconnue !");
}
