import React from "react";
import "./TypeSection.css";
import { BsEmojiSmile } from "react-icons/bs";
import { BsMic } from "react-icons/bs";
import { GiPaperClip } from "react-icons/gi";

const TypeSection = () => {
  return (
    <div className="typeSection-container">
      <BsEmojiSmile className="icon" />
      <GiPaperClip className="icon" />
      <input type="text" placeholder="Type a message" className="type-input" />
      <BsMic className="icon" />
    </div>
  );
};

export default TypeSection;
