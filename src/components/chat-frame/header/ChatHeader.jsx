import React from "react";
import "./ChatHeader.css";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import { IoPersonCircle } from "react-icons/io5";

const ChatHeader = () => {
  return (
    <div className="chatHeader-container">
      <div className="left-side">
        <IoPersonCircle className="person-icon"/>
        <div className="chat-group">
          <p className="chat-name">
            Master BDTS - 405
          </p>
          <p className="chat-last-seen" >last seen today at 12:56</p>
        </div>
      </div>
      <div className="right-side">
        <VscDeviceCameraVideo className="icon"/>
        <BsTelephone className='icon'/>
        <VscSearch className="icon"/>
        <FiMoreHorizontal className="icon"/>
      </div>
    </div>
  );
};

export default ChatHeader;
