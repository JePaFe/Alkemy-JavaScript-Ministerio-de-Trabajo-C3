import React from "react";
import "./App.css";
import Saludo from "./components/Saludo";

function App() {
  const nombre = "Juan";

  const isActive = true;

  const style = {
    color: "red",
    fontSize: isActive ? "2em" : ".5em",
  };

  return (
    <>
      <h1 className={isActive ? "active" : "inactive"}>App</h1>
      <p style={style} id="parrafo-uno" className="destacado">
        Hola, {nombre}
      </p>
      <h2>Sección</h2>
      <br />
      <Saludo></Saludo>
      <Saludo />
    </>
  );
}

// const texto = `App ${nombre}`

export default App;
