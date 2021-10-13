import React from "react";
import "./Message.css";

const Message = ({ message, writer, date }) => {
  return (
    <div className="message-container">
      <p className="line-message">
        {message}
        <span className="time">{`${date.getHours()}:${date.getMinutes()}`}</span>
      </p>
    </div>
  );
};

export default Message;
