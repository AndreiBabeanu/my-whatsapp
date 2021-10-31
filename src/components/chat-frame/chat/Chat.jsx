import React, { useContext, useEffect, useState, useRef } from "react";
import "./Chat.css";
import Message from "./message/Message";
import { Context } from "../../../App";
import { useSelector } from "react-redux";

const Chat = () => {
  const { currentGroupId } = useContext(Context);
  const [group, setGroup] = useState({
    messages: [],
  });
  const groups = useSelector((state) => state.groups.groups);
  const selectedGroup = groups.find((group) => group._id === currentGroupId);
  const lastMessageRef = useRef();

  useEffect(() => {
    setGroup(selectedGroup);
  }, [currentGroupId, groups]);

  const messages = selectedGroup.messages;
  useEffect(() => {
    lastMessageRef.current.scrollIntoView();
  }, [messages]);

  return (
    <div className="chat-container">
      {group?.messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
      <div ref={lastMessageRef} />
    </div>
  );
};

export default Chat;
