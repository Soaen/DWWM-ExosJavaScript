let a = 6;
let b = 15;
let c = 0;



console.log(`La valeur de A avant changement est : ${a}`);
console.log(`La valeur de B avant changement est : ${b}`);
console.log(`La valeur de C avant changement est : ${c}`);
console.log(`-----------------------------------------`);


c = a;
a = b;
b = c;


console.log(`La valeur de A après changement est : ${a}`);
console.log(`La valeur de B après changement est : ${b}`);
console.log(`La valeur de C après changement est : ${c}`);