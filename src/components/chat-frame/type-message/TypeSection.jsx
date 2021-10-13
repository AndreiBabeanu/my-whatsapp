import React, { useState, useContext } from "react";
import "./TypeSection.css";
import { BsEmojiSmile } from "react-icons/bs";
import { BsMic } from "react-icons/bs";
import { GiPaperClip } from "react-icons/gi";
import { Context } from "../../../App";

const TypeSection = () => {
  const initialState = {
    text: "",
    date: Date.now(),
    writer: "",
  };

  const [message, setMessage] = useState(initialState);
  // const [group, setGroup] = useState({
  //   img: "",
  //   title: "",
  //   messages: [{}],
  //   createdAt: null,
  //   id: 0,
  // });
  const { messages, setMessages, groups, setGroups, currentGroupId } =
    useContext(Context);

  const handleChange = (e) => {
    e.preventDefault();
    setMessage({
      text: e.target.value,
      date: new Date(),
      writer: "Andrei",
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setMessages([...messages, message]);
      const group = groups.find((group) => group.id === currentGroupId);
      
      setMessage({ text: "", date: null, writer: "" });
    }
  };

  return (
    <div className="typeSection-container">
      <BsEmojiSmile className="icon" />
      <GiPaperClip className="icon" />
      <input
        type="text"
        placeholder="Type a message"
        className="type-input"
        onChange={handleChange}
        value={message.text}
        onKeyPress={handleKeyPress}
      />
      <BsMic className="icon" />
    </div>
  );
};

export default TypeSection;
