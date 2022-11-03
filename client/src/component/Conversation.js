import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { dataContext } from '../Context'
import Message from './Message/Message'
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
        console.log(res.data.user, 'bleudy')
      })
      .catch((error) => console.error(error))
  }, [chatId, message])

  // console.log('msg ', msg)

  return (
    <div className="chat-space-1">
      <Message msg={msg} />

      {/* {msg &&
        msg.user &&
        msg.user.map((data) => <Message text={data.text} key={data._id} />)} */}
    </div>
  )
}

export default Conversation
