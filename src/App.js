import "./App.css";

import {Route, Routes} from "react-router-dom";

import SignUp from "./Components/SignUp";
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Navbar from "./Components/Navbar";
import AddNewPoll from "./Components/AddNewPoll";
import ListOfPoll from "./Components/ListOfPoll";
import ListApoll from "./Components/ListApoll";
import DeletePoll from './Components/DeletePoll';

function App() {
  return (
    <>
     <Navbar/>
     <Routes>
       <Route path="/" element={<SignUp/>}></Route>
       <Route path="login" element={<Login/>}></Route>
       <Route path="dashboard" element={<Dashboard/>}></Route>
       <Route path="newpoll" element={<AddNewPoll/>}></Route>
       <Route path="listofpoll"  element={<ListOfPoll/>}></Route>
       <Route path="listapoll" element={<ListApoll/>}></Route>
       <Route path="deletepoll" element={<DeletePoll/>}></Route>
     </Routes>
    </>
  );
}

export default App;
