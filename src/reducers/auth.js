import { SIGN_IN, SIGN_UP } from "../constants/groupsConstants";

const reducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case SIGN_UP:
    case SIGN_IN:
      //   console.log(action.payload);
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };

    case "LOG_OUT":
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default reducer;
