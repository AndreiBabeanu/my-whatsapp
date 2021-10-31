import * as api from "../api/index.js";
import { SIGN_UP, SIGN_IN } from "../constants/groupsConstants";

export const signup = (user) => async (dispatch) => {
  try {
    const { data } = await api.signup(user);
    dispatch({ type: SIGN_UP, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const signin = (user) => async (dispatch) => {
  try {
    const { data } = await api.signin(user);
    

    dispatch({ type: SIGN_IN, data });
  } catch (error) {
    console.log(error);
  }
};

