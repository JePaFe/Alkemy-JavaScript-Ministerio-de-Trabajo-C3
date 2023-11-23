const numeros = [5, 1, 8, 3, 6, 4, 9, 7, 2];

// function filtrar(item) {
//   if (item % 2 != 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function filtrar(item) {
//   if (item % 2 != 0) {
//     return true;
//   }
//   return false;
// }

// function filtrar(item) {
//   if (item % 2 != 0) {
//     return true;
//   }
// }

// function filtrar(item) {
//   return item % 2 == 0 ? true : false;
// }

// const filtrar = item => (item % 2 != 0 ? true : false);

// const filtrar = item => item % 2 != 0;
// const filtrados = numeros.filter(filtrar);

const filtrados = numeros.filter(numero => numero % 2 == 0);

console.log(numeros, filtrados);
