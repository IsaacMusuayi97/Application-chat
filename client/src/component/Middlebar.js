import React, { useContext } from 'react'
import '../middlebar.css'
import Card from './Card'
import { dataContext } from '../Context'

function Middlebar({ setProfil, profil }) {
  const { user } = useContext(dataContext)

  return (
    <div className="middlebar">
      <div className="container-search">
        <img className="search-icon" src="photos/icons8-search-30.png" alt="" />
        <input placeholder="Search" />
      </div>

      <div className="container-message-recent">
        <h1>Recent</h1>

        {user.user &&
          user.user.map((data) => {
            return (
              <Card
                setProfil={setProfil}
                profil={profil}
                name={data.name}
                key={data._id}
                messages={data._id}
              />
            )
          })}
      </div>
    </div>
  )
}

export default Middlebar
