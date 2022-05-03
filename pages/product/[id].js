import React, { useState, useEffect } from 'react'
import Layout from '../../src/components/Layout'
import axios from 'axios';


export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://shopyangu.herokuapp.com/api/product/find/' + id);
  const data = await res.json();

  return {
    props: { product: data }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch('https://shopyangu.herokuapp.com/api/product/');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(product => {
    return {
      params: { id: product._id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

const Details = ({product}) => {
  // console.log(product)
  return (
    <Layout>
    <div>
      <h1>Details Page</h1>
      
        <div key={product.id}>
          <img src={product.image} width='400'/>
          <h4>{product.name}</h4>
          <h4>Ksh. {product.price}</h4>
          <p>{product.description}</p>
        </div>
    
    </div>
    </Layout>
  );
}

export default Details;

