import { SIGNUP_REQ, SIGNUP_SUCCESS, SIGNUP_ERROR } from "./ActionType";

const signUpUrl = (username, password, role) => {
  console.log(username, password, role, "signupurl");
  return `https://secure-refuge-14993.herokuapp.com/add_user?username=${username}&password=${password}&role=${role}`;
};

export function getSignUpDetails(data1, data2, data3) {
  console.log(data1, data2, data3);
  return (dispatch) => {
    dispatch(SignUpDataReq());

    const url = signUpUrl(data1, data2, data3);
    console.log(url, "sign up url");

    fetch(url)
      .then((resp) => resp.json())
      .then((signUpDetail) => {
        console.log(signUpDetail);
        if (signUpDetail.error == 1) {
          dispatch(SignUpDataError(signUpDetail));
        } else {
          dispatch(SignUpDataSuccess(signUpDetail));
        }
      })

      .catch(() => {
        dispatch(SignUpDataError());
      });
  };
}

function SignUpDataReq(signUpData) {
  console.log(signUpData, "55");
  return {
    type: SIGNUP_REQ,
    payload: signUpData,
  };
}
function SignUpDataSuccess(signUpData) {
  console.log(signUpData, "55");
  return {
    type: SIGNUP_SUCCESS,
    payload: signUpData,
  };
}
function SignUpDataError(signUpData) {
  console.log(signUpData, "55");
  return {
    type: SIGNUP_ERROR,
    payload: signUpData,
  };
}
