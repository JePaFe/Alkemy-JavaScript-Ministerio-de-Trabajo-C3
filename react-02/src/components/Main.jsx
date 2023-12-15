import React from "react";
import ProductCard from "./ProductCard";
import ComponenteB from "./ComponenteB";
import ButtonAlert from "./ButtonAlert";

function Main() {
  return (
    <main>
      <h1>Productos</h1>
      <section>
        <ProductCard
          name="Producto 3"
          price="100"
          image="https://picsum.photos/200/100?random=1"
        />
        <ProductCard
          name="Producto 1"
          price="150"
          image="https://picsum.photos/200/100?random=2"
        />
        <ProductCard
          name="Producto 6"
          price="350"
          image="https://picsum.photos/200/100?random=3"
        />
      </section>
      <ComponenteB />
      <ButtonAlert />
    </main>
  );
}

export default Main;
