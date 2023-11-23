const numeros = [4, 6, 9];

// numeros[3] = 10;
// numeros[numeros.length] = 11;

numeros.push(10);
numeros.push(11, 12);

// numeros[-1] = 3; // Es raro
numeros.unshift(3);

let numero = numeros.pop();
console.log(numero);

numero = numeros.shift();
console.log(numero);

console.log(numeros);
