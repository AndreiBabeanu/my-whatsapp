import React from 'react'
import './Chat.css'
import Message from './message/Message'

const Chat = () => {
    return (
        <div className='chat-container'>
            <Message message='Hello world!!'/>
            <Message message='Hello world!!'/>
            <Message message='Hello world!!'/>

        </div>
    )
}

export default Chat
