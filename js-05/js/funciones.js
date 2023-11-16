// function saludar(nombre) {
//   // if (nombre != null) {
//   // if (nombre != undefined) {
//   if (typeof nombre == "string") {
//     console.log("Hola " + nombre);
//   }
// }

// saludar();
// saludar(2);
// saludar("5");
// saludar("Juan");
// saludar("Maria");

// undefined, null, '', 0, []

// ---

// let resultado = 0;

// function sumar(primerNumero, segundoNumero) {
//   resultado = primerNumero + segundoNumero;
// }

// function mostrar(mensaje) {
//   console.log(mensaje);
// }

// sumar(4, 7);
// mostrar(resultado);

// ---

function sumar(primerNumero, segundoNumero) {
  return primerNumero + segundoNumero;
}

function mostrar(mensaje) {
  console.log(mensaje);
}

let suma = sumar(4, 7);
// console.log(suma);
let valor = mostrar(suma);
// console.log(valor);

suma = sumar(6, 10);
mostrar(suma);

// const nombre = prompt("Ingrese su nombre: ");
