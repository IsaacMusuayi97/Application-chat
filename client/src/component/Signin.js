import React from 'react'
import axios from "axios"
import signin from "./signin.css"

function Signin() {

    function handleSignIn(e) {
        e.preventDefault()
        const email = e.target["email"].value,
            password = e.target["password"].value

        axios.post("http://localhost:5000/api/auth", {
            email,
            password
        }
        )
        .then((response) => {
            console.log(response)
        })
        .catch((err)=> console.error(err))

    }
    return (
        <div className='container--signIn'>

            <div className='container--form'>
                <form className="form" onSubmit={handleSignIn}>
                    <h1>Login</h1>
                    <p className='form-paraph'>Doesn't have an account yet? <a className='paraph-link'>Sign Up</a></p>

                    <div className='inputs--btn'>
                        <div>
                            <label for="email">
                                Email Address
                            </label>
                            <input
                                type="text"
                                name="email"
                                placeholder="email"
                                className="form--input"
                            />
                        </div>

                        <div>
                            <label for="password">
                                Password
                            </label>
                            <input
                                type="text"
                                name="password"
                                placeholder="password"
                                className="form--input"
                            />

                        </div>

                        <div>
                            <button 
                                className="form--button"
                                type="submit"
                            >
                                Sign in
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='container-signin--img'>
                <img src='photos/Signin.png' alt='' className='signin--img' />
            </div>
        </div>
    )
}

export default Signin
