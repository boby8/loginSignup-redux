import { ADD_NEW_POLL_REQ, ADD_NEW_POLL_SUCCESS, ADD_NEW_POLL_ERROR } from "./ActionType";
const initalState = {
  isRequest: false,
  isSuccess: false,
  isError: false,
  data: {},
};

const addNewPollReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_NEW_POLL_REQ:
      return {
        isRequest: true,
        isSuccess: false,
        isError: false,
        data: action.payload,
      };

    case ADD_NEW_POLL_SUCCESS:
      return {
        isRequest: false,
        isSuccess: true,
        isError: false,
        data: action.payload,
      };

    case ADD_NEW_POLL_ERROR:
      return {
        isRequest: false,
        isSuccess: false,
        isError: true,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default addNewPollReducer; 
