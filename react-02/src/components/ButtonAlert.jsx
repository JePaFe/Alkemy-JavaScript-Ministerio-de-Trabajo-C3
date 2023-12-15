import React from "react";

function ButtonAlert() {
  const handleClick = () => {
    alert("Hola");
  };

  return (
    // <button type="button" onClick={handleClick}>
    //   Click Alert
    // </button>
    <button type="button" onClick={() => alert("Hola 2")}>
      Click Alert
    </button>
  );
}

export default ButtonAlert;
