import React, { useContext, useEffect, useState } from 'react'
import '../middlebar.css'
import axios from "axios"
import Card from './Card'
import { dataContext } from '../Context'


function Middlebar({ setProfil, profil }) {

    const { setUser, user } = useContext(dataContext)

    return (
        <div className='middlebar'>
            <div className='container-search'>
                <img className='search-icon' src='photos/icons8-search-30.png' />
                <input placeholder='Search' />
            </div>

            <div className='container-message-recent'>
                <h1>Recent</h1>

                {user.map(data => {
                    return (

                        <Card setProfil={setProfil} profil={profil} name={data.name} key={data._id} />
                    )
                })}

            </div>
        </div>
    )
}

export default Middlebar
