import React from 'react'
import axios from "axios"

function Login() {

    function handleSignIn(e) {
        const name = e.target.form["email"].value,
            email = e.target.form["email"].value,
            password = e.target.form["password"].value

        axios.post("http://localhost:5000/api", {
            name: name,
            email: email,
            password: password
        },
            {
                headers: {
                    "Content-type": "application/json",
                    "X-Requested-With": "XMLHttpRequest"
                }
            }).then((response) => {
                console.log(response)
            }).catch(console.log)

    }

    return (
        <div>
            <form className="form">
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="form--input"
                />
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="form--input"
                />
                <input
                    type="text"
                    name="password"
                    placeholder="password"
                    className="form--input"
                />
                <button onClick={handleSignIn}
                    className="form--button"
                    type="button"
                >
                    Enregistrer
                </button>
            </form>
        </div>
    )
}

export default Login
