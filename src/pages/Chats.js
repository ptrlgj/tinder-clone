import React from 'react'
import Chat from '../components/Chat'
function Chats() {
  return (
    <section className="chats">
        <Chat 
            name = "Bubr"
            message = "elo mordo, masz jakoms kłode"
            timestamp = "2 seconds ago"
            profilePic = "."
        />
    </section>
  )
}

export default Chats