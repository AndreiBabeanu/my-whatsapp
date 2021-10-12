import React from "react";
import "./Message.css";
const Message = ({ message }) => {
  return (
    <div className="message-container">
      <p className="line-message">
        {message}
        <span className="time">00:01</span>
      </p>
    </div>
  );
};

export default Message;
