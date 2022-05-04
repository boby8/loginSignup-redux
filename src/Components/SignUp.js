import React from "react";
import { useState } from "react";
import "./SignUp.css";
import { getSignUpDetails } from "../Redux/SignupAction/Action";
import { useSelector, useDispatch } from "react-redux";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const signUpData = useSelector((store) => store.requriedSignUpData);
  console.log(signUpData, "redux data 5555");

  if (signUpData.isSuccess == false) {
    console.log("issucces is false");
    // setMessage(signUpData.isSuccess);
  } else {
    console.log("Issuccess is true");
    //setMessage(signUpData.data.message);
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    if (userName.length != 0 && password.length != 0 && role.length != 0) {
      setError("");
      dispatch(getSignUpDetails(userName, password, role));
    } else {
      console.log("please enter a value");
      setError(" * please enter value?");
    }
  };

  return (
    <>
      {signUpData.isRequest ? "Loding..." : null}
      {/* {signUpData.isSuccess && signUpData.data.error ? setUserName("") : null} */}
     

      <main>
        <h1>Sign-up here</h1>
        <label htmlFor="name">Fullname : </label>
        <input
          type="text"
          name="name"
          id="name"
          value={userName}
          autoComplete="off"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />

        <br />
        <label htmlFor="Password">Password : </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          autoComplete="off"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />

        <br />
        <label htmlFor="roll">Roll : </label>
        <select
          name="roll"
          id="roll"
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
        >
          <option value="Front-end developer">Front-end developer</option>
          <option value="Back-end developer">Back-end developer</option>
          <option value="Full-Stack-Developer">Full-Stack-Developer</option>
          <option value="Graphic designer">Graphic designer</option>
        </select>
        <br />

        <br />
        <button onClick={handleSignUp}>Sign Up</button>
        <p>{error}</p>
        <p>{signUpData.data && signUpData.data.message}</p>
        {signUpData.isSuccess ? <p>{signUpData.data.data.username} Your data is Saved </p>: null}
      
      </main>
    </>
  );
};

export default SignUp;
