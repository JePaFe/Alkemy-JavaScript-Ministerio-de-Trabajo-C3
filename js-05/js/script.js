// num = 5;

// let num;

// console.log(num);

// ---

var num = 5;

if (true) {
  var num = 7;
}

function saludar(nombre) {
  var num = 4;
  if (typeof nombre == "string") {
    console.log("Hola " + nombre);
  }
}

console.log(num);

// const saludar = (nombre) => console.log("Hola " + nombre);

// saludar("Juan");
