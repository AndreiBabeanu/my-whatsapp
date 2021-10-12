import React from 'react'
import Chat from './chat/Chat'
import './ChatFrame.css'
import ChatHeader from './header/ChatHeader'
import TypeSection from './type-message/TypeSection'

const ChatFrame = () => {
    return (
        <div className="chat-frame-container">
            <ChatHeader />
            <Chat />
            <TypeSection />
        </div>
    )
}

export default ChatFrame
