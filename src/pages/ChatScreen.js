import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './ChatScreen.scss';
import { Avatar } from '@mui/material';
import { useGlobalContext } from '../contexts';
function ChatScreen() {
    const {chats, setChats} = useGlobalContext()
    const params = useParams();
    const [messages, setMessages ] = useState(null);
    const [profilePic, setProfilePic] = useState('');
    const [input, setInput] = useState('')

    async function handleSubmit(e){
        e.preventDefault();
        if(input){
            setMessages({...messages, messages: [...messages.messages, {message: input}]})
            setInput('')}
    }

    function updateChats(){
        if(messages){
            const tempChats = chats.filter(chat=>chat.name !== messages.name);
            setChats([ messages, ...tempChats])
        }
    }
    useEffect(()=>{
        setMessages( chats.filter(chat=>{
            if(chat.name.toLowerCase() === params.person.toLowerCase()) setProfilePic(chat.image)
            return (chat.name.toLowerCase() === params.person.toLowerCase())
        })[0])
    }, [])
    useEffect(()=>{
        updateChats()
    },[messages])
    return (
        <div className="chatScreen">
        <p className="chatScreen__timestamp">YOU MATCHED WITH {params.person.toUpperCase()} ON 10/04/2022</p>
        {/* <button onClick={() => console.log(chats, messages)}>sprawdz</button> */}
        {messages ? messages.messages.map((message, index) => {
            return message.name ? (
                <div key={index} className="chatScreen__message">
                    <Avatar alt={message.name} src={profilePic} className="chatScreen__image"/>
                    <p className="chatScreen__text">{message.message}</p>
                </div>
            ):(
                <div key={index} className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
            )
        }) : null}
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