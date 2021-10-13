import React, { useContext } from "react";
import "./Chat.css";
import Message from "./message/Message";
import { Context } from "../../../App";

const Chat = () => {
  const { messages } = useContext(Context);
  console.log(messages);
  return (
    <div className="chat-container">
      {messages.map((message, index) => (
        <Message
          key={index}
          message={message.text}
          date={message.date}
          writer={message.writer}
        />
      ))}
    </div>
  );
};

export default Chat;
