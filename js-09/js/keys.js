const input = document.querySelector("#inputId");

const keys = {
  control: false,
  shift: false,
};

input.addEventListener("keydown", (event) => {
  console.log("keydown");
  console.log(event.key, event.keyCode);

  if (event.key == "Control") {
    keys.control = true;
  }

  if (event.key == "Shift") {
    keys.shift = true;
  }

  //   if (event.key == "Enter") {
  //     console.log("Consultar a un servicio");
  //   }

  if (keys.shift && event.key == "J") {
    console.log("Leer");
  }

  if (event.key == "F12") {
    // event.stopPropagation();
    console.log("F12");
  }

  console.log(keys);
});

input.addEventListener("keyup", (event) => {
  console.log("keyup");

  if (event.key == "Control") {
    keys.control = false;
  }

  if (event.key == "Shift") {
    keys.shift = false;
  }

  console.log(keys);
});
