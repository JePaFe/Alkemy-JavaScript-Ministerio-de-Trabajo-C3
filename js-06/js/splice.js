// const numeros = [4, 2, 6, 5, 9];

// const dosNumeros = numeros.slice(2, 4);

// console.log(dosNumeros);

// ---

const meses = ["Enero", "Marzo", "Mayo", "Agosto"];

meses.splice(1, 0, "Febrero"); // Insertar
meses.splice(3, 1, "Abril"); // Remplazar

meses.splice(4, 1); // Borrar

console.log(meses);
