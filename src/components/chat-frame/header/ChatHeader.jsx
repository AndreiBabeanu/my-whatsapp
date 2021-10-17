import React, { useContext, useState } from "react";
import "./ChatHeader.css";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import { IoPersonCircle } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Context } from "../../../App";

const ChatHeader = () => {
  const groups = useSelector((state) => state.groups);
  const { currentGroupId } = useContext(Context);

  const selectedGroup = groups.find((g) => g._id === currentGroupId);
  const lastMessage = selectedGroup.messages[selectedGroup.messages.length - 1];
  const today = new Date();
  // console.log(selectedGroup.messages[selectedGroup.messages.length - 1]);

  return (
    <div className="chatHeader-container">
      <div className="left-side">
        <IoPersonCircle className="person-icon" />
        <div className="chat-group">
          <p className="chat-name">{selectedGroup.title}</p>
          <p className="chat-last-seen">{`last seen ${
            today.getDate() - lastMessage.date.day === 0 ? "today" : "yesterday"
          } at ${lastMessage.date.hours}:${lastMessage.date.minutes}`}</p>
        </div>
      </div>
      <div className="right-side">
        <VscDeviceCameraVideo className="icon" />
        <BsTelephone className="icon" />
        <VscSearch className="icon" />
        <FiMoreHorizontal className="icon" />
      </div>
    </div>
  );
};

export default ChatHeader;
