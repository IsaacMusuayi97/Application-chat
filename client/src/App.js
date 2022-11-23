import './App.css'
import Signin from './component/Signin'
import Login from './component/Login'
import { dataContext } from './Context'
import Container from './Container'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
  const [user, setUser] = useState([])
  const [token, setToken] = useState(null)
  const [chatId, setChatId] = useState('')
  const [userData, setUserData] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [change, setChange] = useState(false)
  const [message, setMessage] = useState('')
  const [sendImage, setSendImage] = useState('je suis developpeur')

  // console.log(message, 'messageLog')

  const getToken = localStorage.getItem('token')
  const getUserId = localStorage.getItem('userId')

  // console.log('getUser', getUserId)

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/${getUserId}`, {
        headers: {
          'Content-type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
      })
      .then((res) => {
        setUser(res.data)
        console.log(res.data, 'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
      })
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    setToken(getToken)
  }, [])

  return (
    <div className="App">
      <dataContext.Provider
        value={{
          user,
          setUser,
          token,
          setToken,
          message,
          setMessage,
          chatId,
          setChatId,
          userData,
          setUserData,
          change,
          setChange,
          sendImage,
          setSendImage,
        }}
      >
        <Routes>
          <Route path="/" element={<Signin />} />
          {token ? <Route path="/chat" element={<Container />} /> : null}
          <Route path="/login" element={<Login />} />
        </Routes>
      </dataContext.Provider>
    </div>
  )
}

export default App
