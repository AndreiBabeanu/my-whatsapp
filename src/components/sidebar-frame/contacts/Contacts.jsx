import React, { useEffect } from "react";
import Contact from "./contact/Contact";
import "./Contacts.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchGroups } from "../../../actions/groups";

const Contacts = () => {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.groups);

  useEffect(() => {
    dispatch(fetchGroups());
    console.log("de cate ori cheama");
  }, []);

  return (
    <div className="contacts-container">
      {groups?.map((group, index) => (
        <Contact group={group} key={index} />
      ))}
    </div>
  );
};

export default Contacts;
