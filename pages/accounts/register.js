import React, { useState } from 'react'
import Layout from '../../src/components/Layout'
import Link from 'next/link'
import CheckIcon from "@mui/icons-material/CheckOutlined";
import ClearIcon from "@mui/icons-material/Clear";

const Register = () => {
    const [password, setPassword] = useState("");
    const [confirmPassWord, setConfirmPassWord] = useState("");
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",

    })
    const [message, setMessage] = useState("");


    function handleRegister(e) {
        e.preventDefault()

        // setPassword(e.target.value);
        // console.log(password)

        const url = "https://shopyangu.herokuapp.com/api/auth/register"

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }
        return fetch(url, options)
            .then(res => res.json())
            .then(data => {
                if (data.code === 11000) {
                    setMessage("This user has already been registered")
                }
                else {
                    setMessage("You have registered successfully")
                    console.log(data)

                    return data
                }
            })
    }

    function onChangePassWord(e) {
        const passwordValue = e.target.value;
        setPassword(passwordValue)
        console.log(password)
    }

    function onConfirmPassWord(e) {
        const confirmPasswordValue = e.target.value;
        setConfirmPassWord(confirmPasswordValue);

        console.log(confirmPassWord)
    }

    return (
        <Layout>
            <h2>Create an account</h2>
            <form>
                <input type="text" placeholder="Enter username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                <input type="email" placeholder="Enter email address" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} onChange={(e) => onChangePassWord(e)} />
                <input type="password" placeholder="Confirm Password" onChange={(e) => onConfirmPassWord(e)} />

                {password === confirmPassWord ? (
                    <CheckIcon style={{ fontSize: "1.5rem" }} />
                ) : (
                    <ClearIcon style={{ fontSize: "1.5rem" }} />
                )}
                <button type="submit" onClick={handleRegister}>Register</button>
                <p>{message} </p>
                <p>
                    <Link href={"/accounts/login"}>Login</Link>
                </p>
            </form>
            {/* {username} */}
        </Layout>
    )
}

export default Register
