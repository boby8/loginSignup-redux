
import { LIST_A_POLL_REQ, LIST_A_POLL_SUCCESS, LIST_A_POLL_ERROR } from "./ActionType";

const initalState = {
  isRequest: false,
  isSuccess: false,
  isError: false,
  data: {},
};

const listAPollReducer = (state = initalState, action) => {
  switch (action.type) {
    case LIST_A_POLL_REQ:
      return {
        isRequest: true,
        isSuccess: false,
        isError: false,
        data: action.payload,
      };

    case LIST_A_POLL_SUCCESS:
      return {
        isRequest: false,
        isSuccess: true,
        isError: false,
        data: action.payload,
      };

    case LIST_A_POLL_ERROR:
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

export default listAPollReducer; 
