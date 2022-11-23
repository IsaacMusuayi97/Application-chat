import React from 'react'
import '../sidebar.css'
import { FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
  const navigate = useNavigate()
  function logout() {
    localStorage.clear()
    navigate('/')
  }

  return (
    <div>
      <div className="sidebar">
        <img className="profile" src="photos/michael.jpg" alt="" />
        <FiLogOut className="logout" onClick={logout} />
      </div>
    </div>
  )
}

export default Sidebar
