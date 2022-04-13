import React from 'react'
import { Avatar } from '@mui/material';
import './Chat.scss';
function Chat({name, message, timestamp, profilePic}) {
  return (
    <article className="chat">
        <Avatar alt={name} src={profilePic} className="chat__image" />
        <div className="chat__details">
            <h3>{name}</h3>
            <p>{message}</p>
        </div>
        <p className='chat__timestamp'>{timestamp}</p>
    </article>
  )
}

export default Chat