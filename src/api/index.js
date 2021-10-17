import axios from "axios";

const URL = "http://localhost:5000/";

const api = axios.create({
  baseUrl: URL,
});

export const fetchGroups = () => api.get("/groups");

export const addGroup = (newGroup) => api.post("/", newGroup);

export const addMessage = (updatedgroup, id) =>
  api.patch(`/groups/${id}`, updatedgroup);
