// function saludarConsole(nombre) {
//   console.log("Hola, " + nombre);
// }

// function saludarAlert(nombre) {
//   alert("Hola, " + nombre);
// }

// function saludarWrite(nombre) {
//   document.write("Hola, " + nombre);
// }

// saludarConsole("Juan");
// saludarAlert("Maria");
// saludarWrite("Pedro");

// ---

function saludar(nombre, callback) {
  //   debugger;
  callback("Hola, " + nombre);
}

function imprimir(mensaje) {
  document.write(mensaje);
}

// saludar("Juan", console.log);
// saludar("Maria", alert);
// saludar("Pedro", imprimir);

// ---

// let num = 4;

// console.log(num);

// console.error(num);
// console.trace(num);

// ---
