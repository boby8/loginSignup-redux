import { LOGIN_REQ, LOGIN_SUCCESS, LOGIN_ERROR } from "./ActionType";

const loginUrl = (username, password) => {
  console.log(username, password, "url");
  return `https://secure-refuge-14993.herokuapp.com/login?username=${username}&password=${password}`;
};

export function getLoginDetails(data1, data2) {
  console.log(data1, data2);
  return (dispatch) => {
    dispatch(loginDataReq());

    const url = loginUrl(data1, data2);
    console.log(url, "login up url");

    fetch(url)
      .then((resp) => resp.json())
      .then((loginDetail) => dispatch(loginDataSuccess(loginDetail)))
      .catch(() => {
        dispatch(loginDataError());
      });
  };
}

function loginDataReq(loginData) {
  console.log(loginData, "55");
  return {
    type: LOGIN_REQ,
    payload: loginData,
  };
}
function loginDataSuccess(loginData) {
  console.log(loginData, "55");
  return {
    type: LOGIN_SUCCESS,
    payload: loginData,
  };
}
function loginDataError(loginData) {
  console.log(loginData, "55");
  return {
    type: LOGIN_ERROR ,
    payload: loginData,
  };
}
