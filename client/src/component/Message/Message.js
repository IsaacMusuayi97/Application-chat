import React from 'react'
import './message.css'

// eslint-disable-next-line no-unused-vars
function Message({ own, msg }) {
  console.log('data msg : ', msg)
  // eslint-disable-next-line no-unused-vars
  const getUserId = localStorage.getItem('userId')
  console.log(getUserId, 'idUser')
  console.log('text', msg)
  return (
    <div className="message">
      {msg?.user?.map((msg) => (
        <div
          key={msg._id}
          className={
            getUserId === msg.userId ? 'messageSender' : 'messageReceiver'
          }
        >
          {msg.text}
        </div>
      ))}
    </div>

    // <div className="message">
    //   {msg?.user?.map((msg) => (
    //     <ul
    //       key={msg._id}
    //       className={getUserId === msg.userId ? 'message own' : 'message'}
    //     >
    //       <li className="messageTop"> {msg.text}</li>
    //     </ul>
    //   ))}
    // </div>
  )
}

export default Message
