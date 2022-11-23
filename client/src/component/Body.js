import React, { useContext, useRef, useState } from 'react'
import '../body.css'
import Conversation from './Conversation'
import axios from 'axios'
import { dataContext } from '../Context'
import { io } from 'socket.io-client'

function Body({ profil }) {
  const socket = useRef(io('http://localhost:5000'))
  const inputRef = useRef()
  const getUserId = localStorage.getItem('userId')
  const [claudinary, setClaudinary] = useState('')
  // console.log(getUserId, 'userId')
  // eslint-disable-next-line no-unused-vars
  const { chatId, message, setChange, sendImage, setSendImage } =
    useContext(dataContext)

  const formData = new FormData()
  formData.append('file', claudinary)
  formData.append('upload_preset', 'q94jvadi')

  const sendMessage = async (e) => {
    e.preventDefault()
    if (claudinary != '') {
      await axios({
        method: 'post',
        url: 'https://api.cloudinary.com/v1_1/dqk3p441y/upload',
        data: formData,
      }).then((image) => {
        console.log(image, 'immmmmmmmmmmmmm')
        // eslint-disable-next-line no-unused-vars
        const imageSent = image.data.secure_url
        let text = inputRef.current.value

        setChange((prev) => !prev)

        axios
          .post('http://localhost:5000/api/message/', {
            userId: getUserId,
            userReceiver: message,
            chatId,
            text,
            imageSent,
          })
          .then(() => {
            socket.current.emit('sendMessages', {
              userId: getUserId,
              userReceiver: message,
              text,
            })
          })
        inputRef.current.value = ''
      })
    } else {
      let text = inputRef.current.value
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
  }

  return (
    <div className="container-body">
      <div className="container-body-profile">
        <div className="body-profile">
          <img className="profile" src={profil.profile} />
        </div>

        <div className="online">
          <h1>{profil.nom}</h1>
          <small>Online</small>
        </div>
        <div></div>
      </div>
      <hr className="line" />

      <div className="chat-space">
        <Conversation />
      </div>
      <div className="body-footer">
        <div className="container-typing">
          <input
            className="textInput"
            type="text"
            name="message"
            ref={inputRef}
          />
          <div className="container-style">
            <input
              className="inputStyle"
              type="file"
              onChange={(e) => {
                setSendImage(URL.createObjectURL(e.target.files[0]))
                setClaudinary(e.target.files[0])
              }}
            />
            <img src="photos/icons8-camera-50.png" />
          </div>
        </div>
        <div className="button-submit" onClick={sendMessage}>
          <img src="photos/icons8-chevron.png" />
        </div>
      </div>
    </div>
  )
}

export default Body
