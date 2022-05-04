import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

const NavBar = () => {
  return (
    <div>
      <nav>
          <NavLink to="/">SingUp</NavLink>
          <NavLink to="login">Login</NavLink>
          <NavLink to="newpoll">Add New Poll</NavLink>
          <NavLink to="listofpoll">List All Polls</NavLink>
          <NavLink to="listapoll">List a Poll</NavLink>
          <NavLink to="deletepoll"> Delete Poll</NavLink>

      </nav>
    </div>
  )
}

export default NavBar
