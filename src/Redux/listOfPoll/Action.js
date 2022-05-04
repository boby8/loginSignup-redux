import { LIST_OF_POLL_REQ,  LIST_OF_POLL_SUCCESS, LIST_OF_POLL_ERROR  } from "./ActionType";

const listOfPollUrl = () => {
  // console.log(username, password, "url");
  return `https://secure-refuge-14993.herokuapp.com/list_polls`;
};

export function getListOfPollDetails() {
  // console.log(data1, data2);
  return (dispatch) => {
    dispatch(listOfPollDataReq());

    const url = listOfPollUrl();
    console.log(url, "listOfPoll");

    fetch(url)
      .then((resp) => resp.json())
      .then((listOfPollDetail) => dispatch(listOfPollDataSuccess(listOfPollDetail)))
      .catch(() => {
        dispatch(listOfPollDataError());
      });
  };
}

function listOfPollDataReq(listOfPollData) {
  console.log(listOfPollData, "55");
  return {
    type: LIST_OF_POLL_REQ,
    payload: listOfPollData,
  };
}
function listOfPollDataSuccess(listOfPollData) {
  console.log(listOfPollData, "55");
  return {
    type:LIST_OF_POLL_SUCCESS,
    payload:listOfPollData,
  };
}
function listOfPollDataError(listOfPollData) {
  console.log(listOfPollData, "55");
  return {
    type: LIST_OF_POLL_ERROR ,
    payload: listOfPollData,
  };
}
