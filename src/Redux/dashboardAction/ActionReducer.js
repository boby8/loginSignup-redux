
import { DASHBOARD_ERROR, DASHBOARD_REQ, DASHBOARD_SUCCESS  } from "./ActionType";

const initalState = {
  isRequest: false,
  isSuccess: false,
  isError: false,
  data: {},
};

const dashboardReducer = (state = initalState, action) => {
  switch (action.type) {
    case  DASHBOARD_REQ:
      return {
        isRequest: true,
        isSuccess: false,
        isError: false,
        data: action.payload,
      };

    case DASHBOARD_SUCCESS :
      return {
        isRequest: false,
        isSuccess: true,
        isError: false,
        data: action.payload,
      };

    case  DASHBOARD_ERROR:
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

export default dashboardReducer;
