import React from "react";

function Saludo() {
  const nombre = "Maria";

  const style = {
    color: "orange",
    textDecoration: "underline",
  };

  return <h2 style={style}>Hola {nombre}</h2>;
}

export default Saludo;
