import React, { useState } from "react";
import { getLoginDetails } from "../Redux/loginAction/Action";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
  const loginData = useSelector((store) => store.requriedLoginData);
  console.log(loginData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (userName.length != 0 && password.length != 0) {
      setError("");
      dispatch(getLoginDetails(userName, password));
      //   setTimeout(alertFunction, 3000);
    } else {
      console.log("please enter a value");
      setError(" * please enter value?");
    }
  };
  return (
    <>
   
      <main>
        <h1>Login here</h1>

        <label htmlFor="name">Fullname : </label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />

        <br />
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}


          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />

        <br />
        <button onClick={handleLogin}>Login</button>

        <p>{error}</p>
        <p> {loginData.isSuccess ? loginData.data.data : null}</p>
        <p>{loginData.isSuccess == true && loginData.data.error == 0 ? "You are logged In": null}</p>
        {loginData.isSuccess == true && loginData.data.token != "" ? navigate("/dashboard") : null}
      </main>
    </>
  );
};

export default Login;
