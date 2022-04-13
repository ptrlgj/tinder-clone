import React from 'react'
import Chat from '../components/Chat'
import { Link } from 'react-router-dom'
import './Chats.scss'
function Chats() {
  return (
    <section className="chats">
        <Link to="/chats/bubr">
          <Chat 
              name = "Bubr"
              message = "elo masz morze porzyczyc jakoms kłode"
              timestamp = "2 seconds ago"
              profilePic = "https://d-art.ppstatic.pl/kadry/k/r/1/2c/e9/5d0e3dea43112_o_medium.jpg"
          />
        </Link>
    </section>
  )
}

export default Chats