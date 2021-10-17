import {
  ADD_GROUP,
  FETCH_GROUPS,
  ADD_MESSAGE,
} from "../constants/groupsConstants";

const reducer = (state = { groups: [] }, action) => {
  switch (action.type) {
    case ADD_GROUP:
      return { ...state, groups: [...state.groups, action.payload] };
    case FETCH_GROUPS:
      return { ...state, groups: action.payload };
    case ADD_MESSAGE:
      return {
        ...state,
        groups: state.groups.map((group) =>
          group._id === action.payload._id ? action.payload : group
        ),
      };
    default:
      return state;
  }
};

export default reducer;
