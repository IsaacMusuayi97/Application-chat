import React, { useContext } from 'react'
import { dataContext } from '../Context'
import '../middlebar.css'

function Card({ name, setProfil, messages }) {
  const { setMessage } = useContext(dataContext)

  function change() {
    setProfil({ nom: name })
    setMessage(messages)
  }
  return (
    <div onClick={change}>
      <div className="recent-message-profile-name">
        <div>
          <img className="profile-img" src="photos/usman.jpg" />
        </div>

        <div className="container-name">
          <h1>{name}</h1>
          <div>Dinner</div>
        </div>
      </div>
      <hr className="line" />
    </div>
  )
}

export default Card
