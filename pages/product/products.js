import React, { useState, useEffect } from "react";
import Layout from "../../src/components/Layout";
import axios from 'axios';
import NextLInk from 'next/link';
import Link from "next/link";

const Products = () => {
    const [product, setProduct] = useState([]);


    useEffect(() => {
        getProducts()

    }, [])
    const getProducts =()=>{ fetch('https://shopyangu.herokuapp.com/api/product/')
        .then(response => response.json())
        .then(data => {
            setProduct(data)
            console.log(data)
        });
    }

    const deleteProduct = async (id) => {
        await axios.delete(`https://shopyangu.herokuapp.com/api/product/${id}`);
        console.log(id)
        getProducts();
    }



    return (
        <Layout>
            <div>
                <h2> all products</h2>


                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {product.map((product) => 
                    // console.log(product)
                    (
                    
                        <NextLInk href={`/product/${product._id}`} passHref>
                            <div key={product.id} style={{ padding: "2em" }}>
                                <img src={product.image} width='500' height='500' />
                                <h4>{product.name}</h4>
                                <h4>Ksh. {product.price}</h4>
                                <Link href={`/edit/${product.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={() => deleteProduct(product._id)} className="button is-small is-danger">Delete</button>
                            </div>

                        </NextLInk>



                    ))}

                    {/* {product.find((item)=>{
                        return(item._id=== product._id)
                    })} */}
                </div>
            </div>
        </Layout>
    )
}


export default Products;
