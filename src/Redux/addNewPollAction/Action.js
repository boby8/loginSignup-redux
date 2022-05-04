
import { ADD_NEW_POLL_REQ, ADD_NEW_POLL_SUCCESS, ADD_NEW_POLL_ERROR } from "./ActionType";

const addNewPollUrl = (question, option1,option2,option3,option4) => {
  console.log(question, option1,option2,option3,option4, "url");
  return `https://secure-refuge-14993.herokuapp.com/add_poll?title=${question}polll&options=${option1}____${option2}____${option3}____${option4}`;
};

export function getAddNewPollDetails(data1, data2, data3, data4, data5) {
  console.log(data1, data2,  data3, data4, data5);
  return (dispatch) => {
    dispatch(addNewPollDataReq());

    const url = addNewPollUrl(data1, data2,  data3, data4, data5);
    console.log(url, "poll up url");

    fetch(url)
      .then((resp) => resp.json())
      .then((addNewPollDetail) => dispatch(addNewPollSuccess(addNewPollDetail)))
      .catch(() => {
        dispatch(addNewPollError());
      });
  };
}

function addNewPollDataReq(addNewPollData) {
  console.log(addNewPollData, "55");
  return {
    type:ADD_NEW_POLL_REQ,
    payload: addNewPollData,
  };
}
function addNewPollSuccess(addNewPollData) {
  console.log(addNewPollData, "55");
  return {
    type:ADD_NEW_POLL_SUCCESS,
    payload: addNewPollData,
  };
}
function addNewPollError(addNewPollData) {
  console.log(addNewPollData, "55");
  return {
    type: ADD_NEW_POLL_ERROR,
    payload: addNewPollData,
  };
}
