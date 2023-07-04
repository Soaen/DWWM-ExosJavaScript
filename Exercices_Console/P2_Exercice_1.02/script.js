let a = 6;
let b = 15;
let c = 58;



console.log(`La valeur de A avant changement est : ${a}`);
console.log(`La valeur de B avant changement est : ${b}`);
console.log(`La valeur de C avant changement est : ${c}`);
console.log(`-----------------------------------------`);


a = a + b + c;
console.log(a);

c = a - (b + c);
console.log(c);

b = a - (b + c);
console.log(b);

a = a - (b + c);
console.log(a);


console.log(`La valeur de A après changement est : ${a}`);
console.log(`La valeur de B après changement est : ${b}`);
console.log(`La valeur de C après changement est : ${c}`);