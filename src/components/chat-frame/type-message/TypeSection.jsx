import React, { useState, useContext } from "react";
import "./TypeSection.css";
import { BsEmojiSmile } from "react-icons/bs";
import { BsMic } from "react-icons/bs";
import { GiPaperClip } from "react-icons/gi";
import { Context } from "../../../App";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "../../../actions/groups";

const TypeSection = () => {
  const initialState = {
    text: "",
    date: null,
    author: "",
  };
  const dispatch = useDispatch();
  const { currentGroupId } = useContext(Context);

  const [message, setMessage] = useState(initialState);
  const groups = useSelector((state) => state.groups);

  const group = groups.find((group) => group._id === currentGroupId);
  // const [group, setGroup] = useState(selectedGroup);

  const handleChange = (e) => {
    e.preventDefault();
    const date = new Date();
    setMessage({
      text: e.target.value,
      date: {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
      },
      author: "Andrei",
    });
  };

  const handleKeyPress = (e) => {
    
    if (e.key === "Enter") {
      // const updatedgroup = groups.find((group) => group._id === currentGroupId);
      // setGroup({ ...updatedgroup, messages: [...group?.messages, message] });
      // console.log(group);
      group.messages = [...group.messages, message];
      // setGroup({ ...group, messages: [...group?.messages, message] });
      console.log(group)

      dispatch(addMessage(group, currentGroupId));
      setMessage({ text: "" });
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
