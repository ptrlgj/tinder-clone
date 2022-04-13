import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import './ChatScreen.scss';
import { Avatar } from '@mui/material';

function ChatScreen() {
    const [messages, setMessages ] = useState([
        {
            name: "Bubr",
            image: 'https://d-art.ppstatic.pl/kadry/k/r/1/2c/e9/5d0e3dea43112_o_medium.jpg',
            message: "hej"
        },
        {
            name: "Bubr",
            image: 'https://d-art.ppstatic.pl/kadry/k/r/1/2c/e9/5d0e3dea43112_o_medium.jpg',
            message: "czesc"
        },
        {
            name: "Bubr",
            image: 'https://d-art.ppstatic.pl/kadry/k/r/1/2c/e9/5d0e3dea43112_o_medium.jpg',
            message: "hej, jestes?"
        },
        {
            name: "Bubr",
            image: 'https://d-art.ppstatic.pl/kadry/k/r/1/2c/e9/5d0e3dea43112_o_medium.jpg',
            message: "odpisz prosze"
        },
        {
            message: "zostaw mnie prosze"
        },
        {
            name: "Bubr",
            image: 'https://d-art.ppstatic.pl/kadry/k/r/1/2c/e9/5d0e3dea43112_o_medium.jpg',
            message: "ok"
        },
        {
            name: "Bubr",
            image: 'https://d-art.ppstatic.pl/kadry/k/r/1/2c/e9/5d0e3dea43112_o_medium.jpg',
            message: "elo masz morze porzyczyc jakoms kłode"
        },
    ]);
    const [input, setInput] = useState('')
    const params = useParams();
    function handleSubmit(e){
        e.preventDefault();
        setMessages(messages => [...messages,{message: input}])
        setInput('')
    }
  return (
    <div className="chatScreen">
        <p className="chatScreen__timestamp">YOU MATCHED WITH {params.person.toUpperCase()} ON 10/04/2022</p>
        {messages.map((message, index) => {
            return message.name ? (
                <div key={index} className="chatScreen__message">
                    <Avatar alt={message.name} src={message.image} className="chatScreen__image"/>
                    <p className="chatScreen__text">{message.message}</p>
                </div>
            ):(
                <div key={index} className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
            )
        })}
        <form 
            className="chatScreen__input"
            onSubmit={handleSubmit}
        >
            <input 
                type="text" 
                placeholder='Type a message...' 
                className="chatScreen__inputField" 
                onChange={e => setInput(e.target.value)}
                value = {input}
            />
            <button type="submit" className="chatScreen__inputButton">SEND</button>
        </form>
    </div>
  )
}

export default ChatScreen