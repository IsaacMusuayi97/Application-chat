import React from 'react'
import '../middlebar.css'

function Card({ name, userIdentifiant, setProfil, profil }) {
    
    return (
        <div onClick={()=> setProfil({
            nom:name
        })}>

    
            <div className='recent-message-profile-name'>
                <div>
                    <img className='profile-img' src='photos/usman.jpg' />
                </div>

                <div className='container-name'>
                    <h1>{name}</h1>
                    <div>Dinner</div>
                </div>
            </div>
            <hr className='line' />
        </div>
    )
}

export default Card
