import React from "react";
import "./Header.css";
import Nav from "../Nav";

function Header() {
  const estilo = {
    color: "red",
    fontSize: "2em",
  };

  return (
    <header className="main-header">
      <div style={estilo}>Logo</div>
      <Nav />
    </header>
  );
}

export default Header;
