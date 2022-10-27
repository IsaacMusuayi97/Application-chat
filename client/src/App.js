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

  const [message, setMessage] = useState('2')
  console.log(message, 'messageLog')

  const getToken = localStorage.getItem('token')
  const getUserId = localStorage.getItem('userId')

  console.log('getUser', getUserId)

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
        // console.log("data", res.data, datass)
      })
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    axios
      .post(`http://localhost:5000/api/ChatRoute/${getUserId}/${message}`)
      .then((res) => {
        setChatId(res.data._id)
        console.log(res.data._id, 'isaac')
      })
      .catch((error) => console.error(error))
  }, [message])

  // console.log(chatId, 'chatId')

  useEffect(() => {
    setToken(getToken)
  }, [])

  // useEffect(()=> {
  //   axios.
  // })

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
