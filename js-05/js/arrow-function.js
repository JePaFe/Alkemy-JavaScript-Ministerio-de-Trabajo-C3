// const sumar = function (num1, num2) {
//   return num1 + num2;
// };

// console.log(sumar(5, 1));

// function restar(num1, num2) {
//   return num1 - num2;
// }

// ---

// function sumar(num1, num2) {
//   return num1 + num2;
// }

// const sumar = function (num1, num2) {
//   return num1 + num2;
// };

// const sumar = (num1, num2) => num1 + num2;

// ---

// function restar(num1, num2) {
//   let resultado = num1 - num2;
//   return resultado;
// }

const restar = (num1, num2) => {
  let resultado = num1 - num2;
  return resultado;
};

// ---

// function saludar(nombre) {
//   console.log("Hola " + nombre);
// }

// const saludar = nombre => console.log("Hola " + nombre);

// saludar("Juan");

// ---

// function saludar(nombre) {
//   if (typeof nombre == "string") {
//     console.log("Hola " + nombre);
//   }
// }

const saludar = (nombre) =>
  typeof nombre == "string" ? console.log("Hola " + nombre) : "";

saludar("Juan");

// {
//   if (typeof nombre == "string") {
//      console.log("Hola " + nombre)
//   }
// }
