import React, { useState } from "react";
import Layout from "../../src/components/Layout";

const Addproduct = () => {
    const [formInput, setFormInput] = useState({
        name: "",
        slug: "",
        image: "",
        description: "",
        category: "",
        price: "",
        rating: "",
        numReviews: "",
    });
    const [message, setMessage] = useState("");



    const handleFileUpload = async (e) => {
        const files = e.target.files;
        const formData = new FormData();
        for (let file of files) {
            formData.append("file", file);
            formData.append("upload_preset", "shop_yangu")

        }

        try {
            await fetch("https://api.cloudinary.com/v1_1/dj4hrvqly/image/upload", {
                method: "POST",
                body: formData,
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    console.log(data.secure_url);
                    return setFormInput({ ...formInput, image: data.secure_url });
                });
        } catch (err) {
            console.log(err);
        }
    }


    function handleProduct(e) {
        e.preventDefault();

        const url = "https://shopyangu.herokuapp.com/api/product/add_new";

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formInput),
        };


        return fetch(url, options)
            .then((res) => res.json())
            .then((data) => {
                if (data.code === 11000) {
                    console.log("product already exists");
                } else {
                    setMessage("product added successfully");
                    console.log(data);

                    return data;
                }
            });
    }

    return (
        <Layout>
            <h2>Create an account</h2>

            <form>
                <input
                    type="text"
                    placeholder="name"
                    onChange={(e) => setFormInput({ ...formInput, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="slug"
                    onChange={(e) => setFormInput({ ...formInput, slug: e.target.value })}
                />
                <input
                    type="file"
                    onChange={(e)=>handleFileUpload(e)}
                />
                <input
                    type="description"
                    placeholder="description"
                    onChange={(e) => setFormInput({ ...formInput, description: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="category"
                    onChange={(e) => setFormInput({ ...formInput, category: e.target.value })
                    }
                />
                <input
                    type="number"
                    placeholder="Enter price"
                    onChange={(e) => setFormInput({ ...formInput, price: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="rating"
                    onChange={(e) => setFormInput({ ...formInput, rating: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="reviews"
                    onChange={(e) => setFormInput({ ...formInput, numReviews: e.target.value })
                    }
                />
                <button type="submit" onClick={handleProduct}>
                    Add product
                </button>
                <p>{message} </p>
            </form>

        </Layout >
    );
};

export default Addproduct;
