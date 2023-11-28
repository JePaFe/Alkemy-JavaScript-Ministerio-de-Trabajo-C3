// let nombre = "Juan";
// let apellido = "Perez";
// let dni = 98765432;

// const usuario = new Object();
// usuario.nombre = "Juan";
// usuario.email = "juan@x.com";

const usuario = {
  nombre: "Juan",
  apellido: "Perez",
  dni: 98765432,
};

// console.log(usuario.nombre);
// console.log(usuario["dni"]);

const { nombre } = usuario;

usuario.nombre = "Juan Pablo";

// console.log(usuario.nombre);
// console.log(nombre);

usuario.id = 3;
usuario.email = "x@x.com";

delete usuario.dni;
