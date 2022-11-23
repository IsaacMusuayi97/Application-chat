import React, { useContext } from 'react'
import '../middlebar.css'
import Card from './Card'
import { dataContext } from '../Context'

// eslint-disable-next-line no-unused-vars
function Middlebar({ setProfil, profil, picture }) {
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
            console.log(data, 'first')
            return (
              <Card
                setProfile={data.profile}
                picture={data.profile}
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
