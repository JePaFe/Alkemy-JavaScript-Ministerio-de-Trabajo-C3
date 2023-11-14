// let cantidadProductos = 2;

// if (cantidadProductos >= 12) {
//   console.log("Aplicar lista mayorista y un descuento");
// } else if (cantidadProductos >= 3) {
//   console.log("Aplicar lista mayorista");
// } else {
//   console.log("Aplicar lista minorista");
// }

// ---

// let edad = 12;
// let autorizacion = false;

// //    false    ||    false
// if (edad >= 13 || autorizacion) {
//   console.log("Puede ir a la excursion");
// } else {
//   console.log("Se que en clase de Lengua");
// }

// ---

// let productos = 3;
// let mensaje;

// // if (productos >= 3) {
// //   mensaje = "Tiene descuento";
// // } else {
// //   mensaje = "Paga precio lista";
// // }

// mensaje = productos >= 3 ? "Tiene descuento" : "Paga precio lista";

// console.log(mensaje);

// ---

// let semaforo = "amarillo";

// switch (semaforo) {
//   case "rojo":
//     console.log("Detener");
//     break;
//   case "amarillo":
//     console.log("Precaución");
//     break;
//   case "verde":
//     console.log("Avanzar");
//     break;
//   default:
//     console.log("No hay semáforo o esta roto");
// }

const nota = 6;

switch (nota) {
  case 10:
  case 9:
    console.log("Excelente");
    break;
  case 8:
  case 7:
    console.log("Aprobado");
    break;
  default:
    console.log("Desaprobado");
}
