import { Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import "./Group.css";
import { Context } from "../../../../App";
import { addGroup } from "../../../../actions/groups";
import { useDispatch } from "react-redux";

const Group = () => {
  const { showCreateGroup, setShowCreateGroup } = useContext(Context);
  const dispatch = useDispatch();

  const [group, setGroup] = useState({
    img: "",
    creator: "",
    title: "",
    messages: [],
    participants: [],
    createdAt: {
      day: "",
      month: "",
      year: "",
      hours: "",
      minutes: "",
    },
  });

  const handleChange = (e) => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    setGroup({
      ...group,
      createdAt: {
        day: day,
        month: month,
        year: year,
        hours: hours,
        minutes: minutes,
      },
      title: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addGroup(group));

    setGroup({ ...group, title: "" });
    setShowCreateGroup(!showCreateGroup);
  };

  return (
    <div className="group-container">
      <Typography variant="h4" color="primary">
        Create a new group
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="Group title"
          fullWidth={true}
          variant="outlined"
          onChange={handleChange}
          value={group.title}
        />
        {/* must implement an add attendants */}
        <Button type="submit" variant="outlined" fullWidth={true}>
          Create group
        </Button>
      </form>
    </div>
  );
};

export default Group;
