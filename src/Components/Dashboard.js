import React, { useEffect, useState } from "react";
import { getDashboardDetails } from "../Redux/dashboardAction/Action";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const dashboardData = useSelector((store) => store.requriedDashboardData);
  const [data, setData] = useState([]);

  console.log(dashboardData);

  useEffect(() => {
    dispatch(getDashboardDetails());
  }, []);

  return (
   
    <>
  
      <h1>Data of user</h1>

      {dashboardData.isRequest ? "Loading..." : null}

      {dashboardData.isSuccess
        ? dashboardData.data.data.map((item) => {
            return <li key={item._id}>USERNAME - {item.username} PASSWORD - {item.password}</li>;
          })
        : null}
    </>
  );
};

export default Dashboard;
