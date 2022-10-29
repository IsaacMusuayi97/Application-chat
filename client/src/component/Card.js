import React, { useContext } from 'react'
import { dataContext } from '../Context'
import axios from 'axios'
import '../middlebar.css'

function Card({ name, setProfil, messages }) {
  const getUserId = localStorage.getItem('userId')
  const { setMessage, chatId, setChatId } = useContext(dataContext)
  console.log(chatId, 'chatId')

  function getMessages(chatId) {
    axios
      .get(`http://localhost:5000/api/message/${chatId}`, {
        headers: {
          'Content-type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
      })
      .then((res) => {
        // setData(res.data)
        console.log(res.data)
      })
      .catch((error) => console.error(error))
  }

  function getChatId() {
    setMessage(messages)
    console.log('============ Chatter ', messages)
    console.log(messages, 'mus')
    if (messages) {
      axios
        .post(`http://localhost:5000/api/ChatRoute/${getUserId}/${messages}`)
        .then((res) => {
          setChatId(res.data._id)
          console.log(res.data._id, 'isaac =================')
          getMessages(res.data._id)
        })
        .catch((error) => console.error(error))
    }
  }

  function change() {
    setProfil({ nom: name })
    getChatId()
  }
  return (
    <div onClick={change}>
      <div className="recent-message-profile-name">
        <div>
          <img className="profile-img" src="photos/usman.jpg" />
        </div>

        <div className="container-name">
          <h1>{name}</h1>
          <div>Dinner</div>
        </div>
      </div>
      <hr className="line" />
    </div>
  )
}

export default Card
