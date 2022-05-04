import React, { useState } from "react";
import "./AddNewPoll";
import { getAddNewPollDetails } from "../Redux/addNewPollAction/Action";
import { useSelector, useDispatch } from "react-redux";

const AddNewPoll = () => {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [alert, setAlert]= useState("");
  const [poll, setPoll] = useState({});

  const dispatch = useDispatch();

  const addNewPollData = useSelector((store) =>store.requriedAddNewPollData);
  console.log(addNewPollData);

  const handleAddNewPoll = (e) => {
    e.preventDefault();
    if (
      question != "" &&
      option1 != "" &&
      option2 != "" &&
      option3 != "" &&
      option4 != ""
    ) {
      console.log("its calling")
      dispatch(
        getAddNewPollDetails(question, option1, option2, option3, option4)
      );
      setAlert("");
    } else {
      console.log("please Enter a question and options");
      setAlert("* Please Enter Question And Options");
    }
  };

 


  return (
    <>
      <main>
        <label htmlFor="question">Enter Your Question : </label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <br />
        <label htmlFor="opt1">Option 1 :</label>
        <input
          type="text"
          value={option1}
          onChange={(e) => setOption1(e.target.value)}
        />
        <br />
        <label htmlFor="opt2">Option 2 :</label>
        <input
          type="text"
          value={option2}
          onChange={(e) => setOption2(e.target.value)}
        />
        <br />
        <label htmlFor="opt3">Option 3 :</label>
        <input
          type="text"
          value={option3}
          onChange={(e) => setOption3(e.target.value)}
        />
        <br />
        <label htmlFor="opt4">Option 4 :</label>
        <input
          type="text"
          value={option4}
          onChange={(e) => setOption4(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleAddNewPoll}>Create New Poll ➕</button>

        <p>{alert}</p>
        
       
       {/* <label htmlFor="questin"> {addNewPollData.data && addNewPollData.isSuccess == true ? addNewPollData.data.data.title : null}</label><br />
       <button>{addNewPollData.data && addNewPollData.isSuccess == true? addNewPollData.data.data.title : null}</button><br />
       <button>{addNewPollData.data && addNewPollData.isSuccess == true ? addNewPollData.data.data.title : null}</button><br />
       <button>{addNewPollData.data && addNewPollData.isSuccess == true ? addNewPollData.data.data.title : null}</button><br />
       <button>{addNewPollData.data && addNewPollData.isSuccess == true ? addNewPollData.data.data.title : null}</button> */}
       {addNewPollData.data && addNewPollData.data.isSuccess && addNewPollData.data}

      </main>
    </>
  );
};

export default AddNewPoll;
