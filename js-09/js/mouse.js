const h1 = document.querySelector("h1");
console.dir(h1);

h1.addEventListener("click", () => console.log("Click en h1"));

h1.addEventListener("mousedown", () => {
  console.log("mousedown");
});

h1.addEventListener("mouseup", () => {
  console.log("mouseup");
});

h1.addEventListener("mouseenter", () => {
  console.log("mouseenter");
});

// h1.addEventListener("mouseover", () => {
//   console.log("mouseover");
// });

h1.addEventListener("mouseleave", () => {
  console.log("mouseleave");
});

// h1.addEventListener("mouseout", () => {
//   console.log("mouseout");
// });

// h1.addEventListener("mousemove", (event) => {
//   console.log("mousemove");
//   console.dir(event);
// });

document.body.addEventListener("wheel", () => {
  console.log("wheel");
});
