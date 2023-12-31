import { useEffect, useState } from "react";
import Ejemplos from "./components/Ejemplos";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import axios from "axios";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Carousel from "./components/Carousel";
import Carousel2 from "./components/Carousel2";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data));

    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        // manejar respuesta exitosa
        setProducts(response.data);
      })
      .catch(function (error) {
        // manejar error
        console.log(error);
      })
      .finally(function () {
        // siempre sera executado
      });
  }, []);
  return (
    <>
      <NavigationBar />
      {/* <Carousel /> */}
      <Carousel2 />
      <Grid container sx={{ my: 3 }} spacing={1}>
        {products.map((product) => (
          <Grid key={`product-${product.id}`} item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, margin: "1em auto" }}>
              <CardMedia
                sx={{ height: 140 }}
                image={product.image}
                title={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography>$ {product.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Footer />
    </>
  );
}

export default App;
