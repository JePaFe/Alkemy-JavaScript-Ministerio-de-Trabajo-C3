import React, { useState } from "react";

function Form() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNombre = (event) => {
    // console.log(event.target.value);
    setNombre(event.target.value);
  };

  const handleCorreo = (event) => {
    setCorreo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <h2>Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre: </label>
          <input
            type="text"
            name="nombre"
            onChange={handleNombre}
            value={nombre}
            id="nombre"
          />
        </div>
        <div>
          <label htmlFor="correo">Correo: </label>
          <input
            type="email"
            name="correo"
            onChange={handleCorreo}
            value={correo}
            id="correo"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {submitted && (
        <div>
          <p>Nombre: {nombre}</p>
          <p>Correo: {correo}</p>
        </div>
      )}
    </>
  );
}

export default Form;
