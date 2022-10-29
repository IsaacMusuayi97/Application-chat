import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { dataContext } from '../Context'
import '../conversation.css'

function Conversation() {
  const { chatId, message } = useContext(dataContext)
  // eslint-disable-next-line no-unused-vars
  const [msg, setMsg] = useState([])
  // console.log(message, 'la star')

  useEffect(() => {
    console.log('!!!!!!!!!!!!!! From conv ', chatId)
    axios
      .get(`http://localhost:5000/api/message/${chatId}`)
      .then((res) => {
        // console.log(res.data, 'isaacMus')
        setMsg(res.data)
      })
      .catch((error) => console.error(error))
  }, [chatId, message])

  // console.log('msg ', msg)

  return (
    <div className="chat-space-1">
      {msg &&
        msg.user &&
        msg.user.map((data) => (
          <div key={data._id} className="msg">
            {data.text}
          </div>
        ))}
      <div className="msg"></div>
      <div className="msg1"> comment</div>
    </div>
  )
}

export default Conversation
