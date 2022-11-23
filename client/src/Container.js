import React, { useContext, useState } from 'react'
import Body from './component/Body'
import Middlebar from './component/Middlebar'
import Sidebar from './component/Sidebar'
import './container.css'
import { dataContext } from './Context'
import Welcome from './Welcome'

function Container() {
  // eslint-disable-next-line no-unused-vars
  const { chatId } = useContext(dataContext)
  const [profil, setProfil] = useState({
    nom: '',
    profile: '',
  })

  return (
    <div className="app">
      <Sidebar className="sidebar" />
      <Middlebar setProfil={setProfil} profil={profil} className="middlebar" />
      {chatId == '' ? <Welcome /> : <Body profil={profil} className="body" />}
    </div>
  )
}

export default Container
