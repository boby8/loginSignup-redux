
import { LIST_A_POLL_ERROR, LIST_A_POLL_SUCCESS, LIST_A_POLL_REQ } from "./ActionType";

const ListAPollUrl = (id) => {
  console.log(id, "url");
  return `https://secure-refuge-14993.herokuapp.com/list_poll?id=${id}`;
};

export function getListAPollDetails(data1) {
  console.log(data1);
  return (dispatch) => {
    dispatch(ListAPollDataReq());

    const url = ListAPollUrl(data1);
    console.log(url, "ListAPoll");

    fetch(url)
      .then((resp) => resp.json())
      .then((ListAPollDetail) => dispatch(ListAPollDataSuccess(ListAPollDetail)))
      .catch(() => {
        dispatch(ListAPollDataError());
      });
  };
}

function ListAPollDataReq(ListAPollData) {
  console.log(ListAPollData, "55");
  return {
    type : LIST_A_POLL_REQ ,
    payload: ListAPollData,
  };
}
function ListAPollDataSuccess(ListAPollData) {
  console.log(ListAPollData, "55");
  return {
    type: LIST_A_POLL_SUCCESS,
    payload: ListAPollData,
  };
}
function ListAPollDataError(ListAPollData) {
  console.log(ListAPollData, "55");
  return {
    type: LIST_A_POLL_ERROR ,
    payload: ListAPollData,
  };
}
