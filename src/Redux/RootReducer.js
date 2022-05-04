import { combineReducers } from "redux";
import signUpReducer from "./SignupAction/ActionReducer";
import loginReducer from "./loginAction/ActionReducer";
import dashboardReducer from "./dashboardAction/ActionReducer";
import addNewPollReducer from "./addNewPollAction/ActionReducer";
import listOfPollReducer from "./listOfPoll/ActionReducer";
import listAPollReducer from "./list-A-poll/ActionReducer";

const rootReducer = combineReducers({
    requriedSignUpData: signUpReducer,
    requriedLoginData: loginReducer,
    requriedDashboardData : dashboardReducer,
    requriedAddNewPollData : addNewPollReducer,
    requriedListOfPollData : listOfPollReducer,
    requriedListAPollData : listAPollReducer,

    
   
})

export default rootReducer;