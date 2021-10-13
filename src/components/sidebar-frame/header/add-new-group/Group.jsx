import { Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import "./Group.css";
import { Context } from "../../../../App";

const Group = () => {
  const { groups, setGroups, showCreateGroup, setShowCreateGroup } =
    useContext(Context);

  const [group, setGroup] = useState({
    img: "",
    title: "",
    messages: [{}],
    createdAt: null,
    id: 0,
  });

  const handleChange = (e) => {
    setGroup({ ...group, id: group.id + 1, createdAt: new Date(), title: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setGroups([...groups, group]);
    setGroup({ img: "", title: "", message: null, createdAt: null });
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
