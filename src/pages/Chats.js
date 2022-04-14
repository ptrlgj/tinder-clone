import React, {useEffect, useState} from 'react'
import Chat from '../components/Chat'
import { Link } from 'react-router-dom'
import {database} from '../firebase'
import {collection} from 'firebase/firestore'
import { getDocs} from 'firebase/firestore'
import { useGlobalContext } from '../contexts'
import './Chats.scss'
function Chats() {
  const {chats} = useGlobalContext()

  return (
    <section className="chats">
        {chats.map((chat, index) => {
          return (
            <Link key={index} to={`/chats/${chat.name.toLowerCase()}`}>
              <Chat 
                  name = {chat.name}
                  message = {chat.messages[chat.messages.length - 1].message}
                  timestamp = "2 seconds ago"
                  profilePic = {chat.image}
              />
            </Link> 
            )
          })
        }
    </section>
  )
}

export default Chats