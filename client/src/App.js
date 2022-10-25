
import './App.css';
import Signin from './component/Signin';
import Login from './component/Login';
import { dataContext } from "./Context";
import Container from './Container';
import { Routes, Route, Navigate } from "react-router-dom"
import axios from "axios";
import React, { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState([])
  const [token, setToken] = useState(null)
  console.log(token, "token4")
  const [message, setMessage] = useState("2")

  console.log(message, "message2")


  const getToken = localStorage.getItem("token")
  const getUserId = localStorage.getItem("userId")

  console.log(getUserId, 'userid')
  useEffect(() => {
    axios.get(`http://localhost:5000/api/${getUserId}`,{
      headers: {
        "Content-type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
      }
    })
      .then((res) => {
        setUser(res.data)
        console.log("data", res.data)
      })
      .catch((error) => console.error(error))
  }, [])

  useEffect(()=> {
    setToken(getToken)
  
  }, [])

  // useEffect(()=> {
  //   axios.
  // })

  

  return (
    <div className="App">
      <dataContext.Provider value={{ user, setUser, token, setToken, message, setMessage }}>
        <Routes>
          <Route path='/' element={<Signin />} />
          { token ?<Route path='/chat' element={<Container />} /> : null}
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </dataContext.Provider>
    </div>
  )
}

export default App;
