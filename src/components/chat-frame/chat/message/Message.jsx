import React from "react";
import "./Message.css";

const Message = ({ message }) => {
  return (
    <div className="message-container">
      <p className="line-message">
        {message?.text}
        <span className="time">{`${message?.date?.hours}:${message?.date?.minutes}`}</span>
      </p>
    </div>
  );
};

export default Message;
