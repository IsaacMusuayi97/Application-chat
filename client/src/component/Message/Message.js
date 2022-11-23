import React, { useContext } from 'react'
import { dataContext } from '../../Context'
import './message.css'

// eslint-disable-next-line no-unused-vars
function Message({ own, msg }) {
  // eslint-disable-next-line no-unused-vars
  const getUserId = localStorage.getItem('userId')
  const { sendImage } = useContext(dataContext)
  console.log(sendImage, 'sendImage')

  return (
    <div className="message">
      {msg?.user?.map((msg) => (
        <div
          key={msg._id}
          className={
            getUserId === msg.userId ? 'messageSender' : 'messageReceiver'
          }
        >
          <div>{msg.text}</div>
          <div>
            <img
              className={
                msg.imageSent === ''
                  ? 'sendImage-container1'
                  : 'sendImage-container'
              }
              src={msg.imageSent}
              alt=""
            />
          </div>
        </div>
      ))}
      <div className="container-display-image">
        <div> </div>
        <img className="display-image" src={sendImage} alt="" />
      </div>
    </div>
  )
}

export default Message
