// let num; // Global

// num = 4;

// function mostrar() {
//   let num = 6; // Local
//   console.log(num); // 6
// }

// mostrar();

// console.log(num); // 4

// ---

// const nombre = "Juan";

// function saludar() {
//   let texto = "Hola, ";
//   console.log(texto + nombre);
// }

// saludar();

// // console.log(texto);
// console.log(nombre);

// ---

// const nombre = "Juan";

// function saludar() {
//   let texto = "Hola, ";
//   return texto;
// }

// let algo = saludar();
// console.log(algo);

// console.log(saludar());

// console.log(nombre);

// ---

function sumar(num1, num2) {
  let resultado = num1 + num2;
  return resultado;
}

let suma = sumar(4, 6);
console.log(suma);

function restar(num1, num2) {
  let resultado = num1 - num2;
  return resultado;
}
