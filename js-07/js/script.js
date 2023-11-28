// const user = {
//   nombre: "Juan",
//   apellido: "Perez",
//   email: "x@x.com",
//   //   nombreCompleto: function () {
//   //     console.log(this.nombre + " " + this.apellido);
//   //   },
//   nombreCompleto(symbol) {
//     return this.nombre + " " + this.apellido + symbol;
//   },
// };

// const fullName = user.nombreCompleto("!!!");
// console.log(fullName);

// user.sendMail = function () {
//   console.log("Enviar correo a:", this.email);
// };

// user.sendMail();

// ---

const numeros = [3, 2, 4, 1];

// previousValue = 10
// currentValue = 1
const sumatoria = numeros.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);

console.log(sumatoria);
