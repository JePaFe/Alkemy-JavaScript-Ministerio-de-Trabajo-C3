import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import Form from "./components/Form";
import Cart from "./components/Cart";

function App() {
  const [contador, setContador] = useState(0);
  const [num, setNum] = useState(0);

  const incrementar = () => setContador(contador + 1);

  const sumar = () => setNum(num + 1);

  // useEffect(() => {
  //   console.log("useEffect App");
  // }, []);

  // const [width, setWidth] = useState(0);

  // useEffect(() => {
  //   // Creamos una función para actualizar el estado con el clientWidth
  //   const updateWidth = () => {
  //     const width = document.body.clientWidth;
  //     console.log(`updateWidth con ${width}`);
  //     setWidth(width);
  //   };
  //   // Actualizaremos el width al montar el componente
  //   updateWidth();
  //   // Nos suscribimos al evento resize() de window
  //   window.addEventListener("resize", updateWidth);
  // });

  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
      document.title = count;
    }, 1000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <>
      <h1>App</h1>
      <p>Contador: {contador}</p>
      <Button fnIncrementar={incrementar} />
      <p>Num: {num}</p>
      <Button fnIncrementar={sumar} />

      {/* <p>Ancho {width}</p> */}

      <p>Count: {count}</p>

      {/* <Form /> */}

      <Cart />
    </>
  );
}

export default App;
