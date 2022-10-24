import React from 'react'
import axios from "axios"
import "./login.css"

export default function Login() {

    function handleSignIn(e) {
        const name = e.target.form["email"].value,
            email = e.target.form["email"].value,
            password = e.target.form["password"].value

        axios.post("http://localhost:5000/api", {
            name,
            email,
            password
        })
            .then((data) => {
                console.log("utilisateur enregistré", data)
            })

            .catch((err) => console.log(err))

    }

    return (
        <div className='login'>
            <form className="form1">
                <h1>Sign up</h1>
                <div className='container--inputs'>
                    <div >
                        <label for="name">Email</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            className="form--input"
                        />
                    </div>

                    <div>
                        <label for="email">Password</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="email"
                            className="form--input"
                        />

                    </div>

                    <div>
                        <label for="password">Password</label>
                        <input
                            type="text"
                            name="password"
                            placeholder="password"
                            className="form--input"
                        />

                    </div>

                    <div>
                        <button onClick={handleSignIn}
                            className="Sign-btn"
                            type="button"
                        >
                            Enregistrer
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

