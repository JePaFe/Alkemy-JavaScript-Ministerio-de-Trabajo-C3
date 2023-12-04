const input = document.querySelector("#inputId");

input.addEventListener("change", (event) => {
  console.log("change", event.target.value);
});

const select = document.querySelector("#selectId");

select.addEventListener("change", (event) => {
  console.log("change", event.target.value);
});

