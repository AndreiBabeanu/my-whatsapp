import React, { useContext } from "react";
import Chat from "./chat/Chat";
import "./ChatFrame.css";
import ChatHeader from "./header/ChatHeader";
import TypeSection from "./type-message/TypeSection";
import { Context } from "../../App";

const ChatFrame = () => {
  const { currentGroupId } = useContext(Context);

  return (
    <div className="chat-frame-container">
      {currentGroupId ? (
        <>
          <ChatHeader />
          <Chat />
          <TypeSection />
        </>
      ) : (
        <h1>Please select a group</h1>
      )}
    </div>
  );
};

export default ChatFrame;
