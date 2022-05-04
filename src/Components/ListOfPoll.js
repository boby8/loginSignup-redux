import React, { useEffect } from "react";
import { getListOfPollDetails } from "../Redux/listOfPoll/Action";
import { useSelector, useDispatch } from "react-redux";

const ListOfPoll = () => {
  const listOfPollData = useSelector((store) => store.requriedListOfPollData);
  console.log(listOfPollData);

  const dispatch = useDispatch();

  const handleListOfPoll = (e) => {
    e.preventDefault();
    dispatch(getListOfPollDetails());
  };

  return (
    <>
      <button onClick={handleListOfPoll}>List Of Poll</button>
      <br />
      {listOfPollData.data && listOfPollData.data.error == 0
        ? listOfPollData.data.data.map((item) => {
            return <label key={item._id}><ul><li>{item.title}</li></ul> {item.options.map((data)=>{
              return(
                <div>{data.option}</div>
              )
            })}</label>;
          }) 
        : null}
    </>
  );
};

export default ListOfPoll;
