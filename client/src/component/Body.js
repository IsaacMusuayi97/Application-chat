import React, { useContext, useRef } from 'react'
import '../body.css'
import Conversation from './Conversation'
import axios from 'axios'
import { dataContext } from '../Context'

function Body({ profil }) {
  const inputRef = useRef()
  const getUserId = localStorage.getItem('userId')
  // console.log(getUserId, 'userId')
  const { chatId, message } = useContext(dataContext)
  console.log(message, 'inter==========================================')
  // console.log(chatId, chatId, 'chat')
  function sendMessage() {
    // eslint-disable-next-line no-unused-vars
    const text = inputRef.current.value
    // console.log(text, 'checking')

    axios.post('http://localhost:5000/api/message/', {
      userId: getUserId,
      userReceiver: message,
      chatId,
      text,
    })
  }

  return (
    <div className="container-body">
      <div className="container-body-profile">
        <div className="body-profile">
          <img className="profile" src="photos/michael.jpg" />
        </div>

        <div className="online">
          <h1>{profil.nom}</h1>
          <small>Online</small>
        </div>
        <div>
          {/* {data.user &&
            data.user.map() => {
              console.log(data.text, "message")
              return (
                  <div>{data.text} </div>
              )
            })} */}
        </div>
      </div>
      <hr className="line" />

      <div className="chat-space">
        <Conversation />
      </div>
      <div className="body-footer">
        <div className="container-typing">
          <input type="text" name="message" ref={inputRef} />
          <img src="photos/icons8-camera-50.png" />
        </div>
        <div className="button-submit" onClick={sendMessage}>
          <img src="photos/icons8-chevron.png" />
        </div>
      </div>
    </div>
  )
}

export default Body
