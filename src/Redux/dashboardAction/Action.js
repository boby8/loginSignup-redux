import {
  DASHBOARD_REQ,
  DASHBOARD_SUCCESS,
  DASHBOARD_ERROR,
} from "./ActionType";

const dashboardUrl = () => {
  return `https://secure-refuge-14993.herokuapp.com/list_users`;
};

export function getDashboardDetails() {
  //   console.log(data1, data2);
  return (dispatch) => {
    dispatch(dashboardDataReq());

    const url = dashboardUrl();
    console.log(url, "dashboard up url");

    fetch(url)
      .then((resp) => resp.json())
      .then((dashboardDetail) =>
        dispatch(dashboardDataSuccess(dashboardDetail))
      )
      .catch(() => {
        dispatch(dashboardDataError());
      });
  };
}

function dashboardDataReq(dashboardData) {
  console.log(dashboardData, "55");
  return {
    type: DASHBOARD_REQ,
    payload: dashboardData,
  };
}
function dashboardDataSuccess(dashboardData) {
  console.log(dashboardData, "56");
  return {
    type: DASHBOARD_SUCCESS,
    payload: dashboardData,
  };
}
function dashboardDataError(dashboardData) {
  console.log(dashboardData, "57");
  return {
    type: DASHBOARD_ERROR,
    payload: dashboardData,
  };
}
