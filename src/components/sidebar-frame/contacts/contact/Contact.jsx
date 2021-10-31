import React, { useContext } from "react";
import "./Contact.css";
import { IoPersonCircle } from "react-icons/io5";
import { Context } from "../../../../App";

const Contact = ({ group }) => {
  const { currentGroupId, setCurrentGroupId } = useContext(Context);

  const openChat = () => {
    setCurrentGroupId(group._id);
  };

  return (
    <div className="contact-container">
      <IoPersonCircle className="contact-circle" />
      <div className="group" onClick={openChat}>
        <div className="group-header">
          <h5>{group.title}</h5>
          <span className="message-date">
            {group.createdAt.hours + ":" + group.createdAt.minutes}
          </span>
        </div>
        <h6>You created this group</h6>
      </div>
    </div>
  );
};

export default Contact;
