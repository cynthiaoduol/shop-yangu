import React, { useState, useEffect } from "react";
import axios from 'axios';
import Layout from "../src/components/Layout";
// import data from "../utils/data";
import { Typography, Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from "@material-ui/core";
import NextLInk from 'next/link';
// import visual from '../public/videos/visual.mp4'

export default function Home() {


  const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://shopyangu.herokuapp.com/api/product/')
            .then(response => response.json())
            .then(data => {
                setProducts(data)
                console.log(data)
            });

    }, [])
  // const [products, setProducts] = useState([]);
  // const url = "https://shopyangu.herokuapp.com/api/product";


  // useEffect(() => {
  //   axios.get(url)
  //     .then((res) => {
  //       setProducts(res.data)
  //     })
  //     console.log(products)
  // }, [url])


  return (
    <Layout >
      <div>
        
        <h1>Products</h1>

        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item md={4} key={product._id}>
              <Card>
                <NextLInk href={`/product/${product._id}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name} height='500'
                    ></CardMedia>
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLInk>
                <CardActions>
                  <Typography>Ksh.{product.price}</Typography>
                  <Button size="small" color="secondary">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}

