
import './App.css';
import Body from './component/Body';
import Sidebar from './component/Sidebar';
import Middlebar from './component/Middlebar';
import Signin from './component/Signin';
import Login from './component/Login';
import { dataContext } from "./Context";
import {Routes, Route, Navigate} from "react-router-dom"
import axios from "axios";
import React, {useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState([])
  const [token, setToken] = useState("")

  const [converse, setConverse] = useState([])
  const [profil, setProfil] = useState({
    nom:""
  })
  console.log("set",profil)

  useEffect(() => {
    axios.get("http://localhost:5000/api", {
        headers: {
            "Content-type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
        }
    })
        .then((res) => {
            setUser(res.data)
            console.log("data",res.data)
        })
        .catch((error) => console.error(error))
}, [])

  return (

    <dataContext.Provider value={{ user, setUser, token, setToken, converse, setConverse }}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Signin/>}/>
        </Routes>
        <Signin/>
        <Login />
        <Sidebar />
        <Middlebar setProfil={setProfil} profil={profil}/>
        <Body profil={profil}/>
      </div>
    </dataContext.Provider>
  );
}

export default App;
