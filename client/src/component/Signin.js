import React from 'react'
import axios from 'axios'
import './signin.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Signin() {
  const navigate = useNavigate()

  function handleSignIn(e) {
    e.preventDefault()
    const email = e.target['email'].value,
      password = e.target['password'].value

    axios
      .post('http://localhost:5000/api/auth', {
        email,
        password,
      })
      .then((response) => {
        const hash = response.data.token.split(' ')[1]
        const userId = response.data.userId
        localStorage.setItem('token', hash)
        localStorage.setItem('userId', userId)

        navigate('/chat')
      })
      .catch((err) => console.error(err))
  }
  return (
    <div className="container--signIn">
      <div className="container--form">
        <form className="form" onSubmit={handleSignIn}>
          <h1>Login</h1>
          <p className="form-paraph">
            Does not have an account yet?{' '}
            <Link to="/login">
              {' '}
              <a className="paraph-link">Sign Up</a>{' '}
            </Link>{' '}
          </p>

          <div className="inputs--btn">
            <div>
              <label htmlFor="email">Email Address</label>
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
              <button className="form--button" type="submit">
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="container-signin--img">
        <img src="photos/Signin.png" alt="" className="signin--img" />
      </div>
    </div>
  )
}

export default Signin
