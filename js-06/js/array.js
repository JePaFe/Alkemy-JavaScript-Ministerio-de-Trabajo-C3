// const nombre1 = "Alma";
// const nombre2 = "Juan";
// const nombre3 = "Maria";
// const nombre4 = "Pedro";

const nombres = ["Alma", "Juan", "Maria", "Pedro"];
// const nombres2 = new Array("Alma", "Juan", "Maria", "Pedro");

nombres[1] = "Juan Pablo";

console.log(nombres[1]);

delete nombres[2];

nombres[4] = "Susana";

nombres[nombres.length] = "Julio";

console.log(nombres);
