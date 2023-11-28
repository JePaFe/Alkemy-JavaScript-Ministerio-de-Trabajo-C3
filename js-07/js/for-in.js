const usuario = {
  nombre: "Juan",
  apellido: "Perez",
  email: "x@x.com",
  dni: 98765432,
};

for (const key in usuario) {
  console.log(key, usuario[key]);
}

// ---

// const numeros = [1, 6, 3, 7];

// for (const value of numeros) {
//   console.log(value);
// }
