import React, { useContext, useRef } from 'react'
import '../body.css'
import Conversation from './Conversation'
import axios from 'axios'
import { dataContext } from '../Context'
import { io } from 'socket.io-client'

function Body({ profil }) {
  const socket = useRef(io('http://localhost:5000'))
  const inputRef = useRef()
  const getUserId = localStorage.getItem('userId')
  // console.log(getUserId, 'userId')
  const { chatId, message, setChange } = useContext(dataContext)
  console.log(message, 'inter==========================================')
  // console.log(chatId, chatId, 'chat')
  function sendMessage() {
    // eslint-disable-next-line no-unused-vars
    let text = inputRef.current.value
    // console.log(text, 'checking')
    setChange((prev) => !prev)

    axios
      .post('http://localhost:5000/api/message/', {
        userId: getUserId,
        userReceiver: message,
        chatId,
        text,
      })
      .then(() => {
        socket.current.emit('sendMessages', {
          userId: getUserId,
          userReceiver: message,
          text,
        })
      })
    inputRef.current.value = ''
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
