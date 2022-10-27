import React, { useState } from 'react'
import Body from './component/Body'
import Middlebar from './component/Middlebar'
import Sidebar from './component/Sidebar'
import './container.css'

function Container() {
  const [profil, setProfil] = useState({
    nom: '',
    chat: '',
  })

  return (
    <div className="app">
      <Sidebar />
      <Middlebar setProfil={setProfil} profil={profil} />
      <Body profil={profil} />
    </div>
  )
}

export default Container
