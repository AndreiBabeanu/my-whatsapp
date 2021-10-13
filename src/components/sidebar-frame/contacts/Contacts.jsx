import React, { useContext } from "react";
import Contact from "./contact/Contact";
import "./Contacts.css";
import { Context } from "../../../App";

const Contacts = () => {
  //   const [group, setGroup] = useState({
  //     img: "",
  //     title: "Grup de fotbal",
  //     messages: [{}],
  //     createdAt: null,
  //   });

  const { groups } = useContext(Context);

  return (
    <div className="contacts-container">
      {groups.map((group, index) => (
        <Contact group={group} key={index} />
      ))}
    </div>
  );
};

export default Contacts;
