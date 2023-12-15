import React, { useEffect, useState } from "react";

function Cart() {
  const [items, setItems] = useState([]);
  const [productos, setProductos] = useState([]);

  //   const productos = [
  //     { id: 1, title: "Producto 1" },
  //     { id: 3, title: "Producto 3" },
  //     { id: 7, title: "Producto 7" },
  //   ];

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((datos) => setProductos(datos));
  }, []);

  //   useEffect(() => {
  //     console.log("useEffect Cart");
  //     return () => console.log("unMount");
  //   }, [items]);

  const agregarAlCarrito = (producto) => {
    // console.log(producto);

    const index = items.findIndex((item) => item.id == producto.id);

    // console.log(index);

    if (index == -1) {
      setItems([...items, producto]);
    } else {
      const newItems = [...items];
      newItems.splice(index, 1);
      setItems(newItems);
    }
  };

  return (
    <>
      <h2>Productos</h2>
      {productos.map((producto) => (
        <p key={`producto-${producto.id}`}>
          {producto.title}{" "}
          <button onClick={() => agregarAlCarrito(producto)}>+</button>
        </p>
      ))}

      <h2>Carrito</h2>
      <ul>
        {items.map((item) => (
          <li key={`item-${item.id}`}>
            {item.title}
            <button onClick={() => agregarAlCarrito(item)}>-</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cart;
