import React from 'react'
import '../sidebar.css'
// import { userChats } from './ChatRequests'

function Sidebar() {
  // const [chats, setChats] = useState([])
  // const [user, setUser] = useState({})

  // useEffect(()=>{
  //   const getChats = async()=> {
  //     try {
  //       const {data} = await userChats(setUser(user._id))
  //       setChats(data)
  //       console.log(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getChats()
  // }, [user])
  return (
    <div className="sidebar">
      <img className="profile" src="photos/michael.jpg" alt="" />
    </div>
  )
}

export default Sidebar
