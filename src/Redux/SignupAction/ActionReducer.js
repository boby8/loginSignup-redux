import { SIGNUP_ERROR, SIGNUP_REQ, SIGNUP_SUCCESS } from "./ActionType";

const initalState = {
  isRequest: false,
  isSuccess: false,
  isError: false,
  data: {},
};

const signUpReducer = (state = initalState, action) => {
  switch (action.type) {
    case SIGNUP_REQ:
      return {
        isRequest: true,
        isSuccess: false,
        isError: false,
        data: action.payload,
      };

    case SIGNUP_SUCCESS:
      return {
        isRequest: false,
        isSuccess: true,
        isError: false,
        data: action.payload,
      };

    case SIGNUP_ERROR:
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

export default signUpReducer;
