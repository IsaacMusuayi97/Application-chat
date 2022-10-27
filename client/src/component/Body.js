import React, { useContext, useEffect } from 'react'
import '../body.css'
import Conversation from './Conversation'
import axios from 'axios'
import { dataContext } from '../Context'

function Body({ profil }) {
  // const getUserId = localStorage.getItem('userId')
  // const [data, setData] = useState([])
  // console.log(getUserId, "getuser")
  const { message, chatId } = useContext(dataContext)

  console.log(chatId, 'messages')

  useEffect(() => {
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
  }, [message])

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
          <input />
          <img src="photos/icons8-camera-50.png" />
        </div>
        <div className="button-submit">
          <img src="photos/icons8-chevron.png" />
        </div>
      </div>
    </div>
  )
}

export default Body
