const input = document.querySelector("#inputId");

input.addEventListener("input", (event) => {
  console.log("input", event.target.value);
});

input.addEventListener("change", (event) => {
  console.log("change", event.target.value);
});
