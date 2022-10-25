import React, { useContext, useEffect, useState } from 'react'
import '../body.css'
import Conversation from './Conversation'
import axios from "axios"
import { dataContext } from '../Context'

function Body({ profil, chat }) {

    const getUserId = localStorage.getItem("userId")
    // console.log(getUserId, "getuser")
    const { message, setMessage } = useContext(dataContext)
    
    console.log(message);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/ChatRoute/find/${getUserId}/${message}`, {
            headers: {
                "Content-type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
            }
        })
            .then((res) => {
                
                console.log("data22",res.data)
        
            })
            .catch((error) => console.error(error))
    }, [message])


    return (
        <div className='container-body'>
            <div className='container-body-profile'>

                <div className='body-profile'>
                    <img className='profile' src='photos/michael.jpg' />
                </div>

                <div className='online'>
                    <h1>{profil.nom}</h1>
                    <small>Online</small>
                </div>
                <div>

                </div>
            </div>
            <hr className='line' />

            <div className='chat-space'>
                <Conversation />
            </div>
            <div className='body-footer'>
                <div className='container-typing'>
                    <input />
                    <img src='photos/icons8-camera-50.png' />
                </div>
                <div className='button-submit'>
                    <img src='photos/icons8-chevron.png' />
                </div>
            </div>

        </div>
    )
}

export default Body
