import React, { useState } from 'react';
import { getListAPollDetails } from '../Redux/list-A-poll/Action';
import { useSelector, useDispatch } from 'react-redux';


const ListApoll = () => {
  const[id, setId] = useState("");
  const[alert, setAlert] = useState("");


  const dispatch = useDispatch();

  const listAPollData = useSelector(store => store.requriedListAPollData);
  console.log(listAPollData);

const handlePoll = () =>{
  if(id.length != 0){
    setAlert("");
  dispatch(getListAPollDetails(id))}
  
  else{
    console.log("please Enter id");
    setAlert("* please enter ID to search!")
  }
}

  return (
    <>
    <input type="text" name="" id="" placeholder='Enter id ' value={id} onChange={(e)=>{setId(e.target.value)}}/>
      <button onClick={handlePoll}>click</button>
      <br />
      <br />
      {listAPollData.data && listAPollData.data.error == 0 ? "hello" : null}
      <br />
      <p>{alert}</p>
    </>
  )
}

export default ListApoll;
