const number = parseInt(prompt("Quel chiffre souhaite tu avoir la table de multiplication ?"))

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}