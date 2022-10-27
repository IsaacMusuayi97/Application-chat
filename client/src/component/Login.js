import React from 'react'
import axios from 'axios'
import './login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  function handleSignIn(e) {
    const name = e.target.form['name'].value,
      email = e.target.form['email'].value,
      password = e.target.form['password'].value

    axios
      .post('http://localhost:5000/api', {
        name,
        email,
        password,
      })
      .then(() => {})

      .catch((err) => console.log(err))
  }

  return (
    <div className="login">
      <form className="form1">
        <h1>Sign up</h1>
        <div className="container--inputs">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="form--input"
            />
          </div>

          <div>
            <label htmlFor="email">Password</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              className="form--input"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              placeholder="password"
              className="form--input"
            />
          </div>

          <div>
            <Link to="/">
              <button onClick={handleSignIn} className="Sign-btn" type="button">
                Enregistrer
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}
