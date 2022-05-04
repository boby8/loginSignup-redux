import { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_REQ } from "./ActionType";

const initalState = {
  isRequest: false,
  isSuccess: false,
  isError: false,
  data: {},
};

const loginReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN_REQ:
      return {
        isRequest: true,
        isSuccess: false,
        isError: false,
        data: action.payload,
      };

    case LOGIN_SUCCESS:
      return {
        isRequest: false,
        isSuccess: true,
        isError: false,
        data: action.payload,
      };

    case LOGIN_ERROR:
      return {
        isRequest: false,
        isSuccess: false,
        isError:true ,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
