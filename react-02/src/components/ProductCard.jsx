import React from "react";
import Button from "./Button";

function ProductCard({ image, name, price }) {
  const handleClick = () => {
    console.log("Click en " + name);
  };

  const showPrice = (price) => {
    console.log(price);
  };

  const handleLink = (event) => {
    event.preventDefault();
    console.log(event.target.href, event.target.closest("div"));
  };

  return (
    <>
      <div>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>Precio: $ {price}</p>
        {/* <button type="button" onClick={handleClick}>
          Comprar
        </button> */}
        <Button fnClick={handleClick} />
        {/* <button type="button" onClick={() => showPrice(price)}>
          Precio
        </button> */}
        <Button fnClick={() => showPrice(price)} />
        <a href="https://google.com" target="_blank" onClick={handleLink}>
          Google
        </a>
      </div>
    </>
  );
}

export default ProductCard;
