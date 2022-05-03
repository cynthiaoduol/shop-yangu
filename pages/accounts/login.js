import React, {useState} from 'react'
import Layout from '../../src/components/Layout'
import Link from 'next/link'

const login = () => {

    const [formData, setFormData] = useState({
        username: "",
        password: "",

    })
    const [message, setMessage] = useState("");
    

    function handleLogin(e) {
        e.preventDefault()
        const url = "https://shopyangu.herokuapp.com/api/auth/login"

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }
        return fetch(url, options)
            .then(res => res.json())
            .then(data => {
                if (data.code === 11000) {
                    console.log("already logged in")
                }
                else {

                    setMessage("Successfully logged in")
                    console.log(data)

                    return data

                }

            })
    }

    // console.log(username)
    return (
        
        <Layout>
            <h2>Log in to your account</h2>
            <form className="login-form">
                <input type="text" placeholder="Enter username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                <button type="submit" onClick={handleLogin}>Login</button>
                <p>
                    
                    <Link href={"/accounts/register"}>Create Account</Link>
                </p>
            </form>
            {/* <p>{username}</p> */}
        </Layout>
    )
}



export default login
