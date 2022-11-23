import React, { useState } from 'react'
import axios from 'axios'
import './login.css'
import defaultImg from '../media/icon.png'
import choiceImg from '../media/icons8-appareil-photo.png'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  // eslint-disable-next-line no-unused-vars
  const [profile, setProfile] = useState(defaultImg)
  // eslint-disable-next-line no-unused-vars
  const [claudinary, setClaudinary] = useState(defaultImg)

  const formData = new FormData()
  formData.append('file', claudinary)
  formData.append('upload_preset', 'q94jvadi')

  const handleSignIn = async (e) => {
    e.preventDefault()
    const name = e.target.form['name'].value,
      email = e.target.form['email'].value,
      password = e.target.form['password'].value,
      confirmPassword = e.target.form['confirmPassword'].value
    if (password === confirmPassword) {
      await axios({
        method: 'post',
        url: 'https://api.cloudinary.com/v1_1/dqk3p441y/upload',
        data: formData,
      }).then((image) => {
        const profile = image.data.secure_url
        email
        password
        confirmPassword
        axios
          .post('http://localhost:5000/api', {
            name,
            email,
            password,
            profile,
          })
          .then((res) => {
            console.log('utilisateur créé', res)
          })
          .catch((err) => console.log(err))
      })
      navigate('/')
    } else {
      alert('confirmez votre password svp')
    }
  }

  return (
    <div className="login">
      <form className="form1">
        <h1>Sign up</h1>
        <div className="choose-profile-container">
          <img className="choose-profile" src={profile} alt="" />
          <div className="add-image">
            <input
              className="inputProfile"
              type="file"
              onChange={(e) => {
                setProfile(URL.createObjectURL(e.target.files[0]))
                setClaudinary(e.target.files[0])
              }}
            />
            <img className="choiceImg" src={choiceImg} alt="" />
          </div>
        </div>
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
            <label htmlFor="email">Email</label>
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
              type="password"
              name="password"
              placeholder="password"
              className="form--input"
            />
          </div>

          <div>
            <label htmlFor="password">Confirm password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="password"
              className="form--input"
            />
          </div>

          <div>
            <button onClick={handleSignIn} className="Sign-btn" type="button">
              Enregistrer
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
