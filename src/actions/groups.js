import * as api from "../api/index.js";
import { ADD_GROUP, FETCH_GROUPS, ADD_MESSAGE } from "../constants/groupsConstants";

export const addGroup = (group) => async (dispatch) => {
  try {
    const { data } = await api.addGroup(group);
    // console.log(data);
    dispatch({ type: ADD_GROUP, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchGroups = () => async (dispatch) => {
  try {
    const  {data}  = await api.fetchGroups();
    
    dispatch({ type: FETCH_GROUPS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addMessage = (updatedgroup, id) => async (dispatch) => {
  try {
    const {data} = await api.addMessage(updatedgroup, id);
    dispatch({ type: ADD_MESSAGE, payload: data})
  } catch (error) {
    console.log(error)
  }
}
