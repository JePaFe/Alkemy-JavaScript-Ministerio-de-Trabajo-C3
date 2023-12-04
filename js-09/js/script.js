const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.querySelector("#nombre").value;

  if (nombre.length < 3) {
    alert("El nombre tiene que tener mas de 3 caracteres");
  } else {
    console.log("submit");
  }
});
