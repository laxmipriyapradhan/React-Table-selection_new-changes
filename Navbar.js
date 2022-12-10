
import { Alert } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [role, setRole] = useState('')
 
  useEffect(() => {
    let roles = localStorage.getItem("role")
    setRole(roles)
    //console.log("role", roles);
  })

  const NotAuth =() =>{
  
    if(role==="User"){
      window.location='/home';
      
    }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container" >
        <NavLink className="navbar-brand  mr-auto" exact to="/">
          Admin User
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {role === "Admin" ?
         <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
         : 
         <Link className="btn btn-outline-light" onClick={()=>NotAuth()} >Add User</Link>
      }
        
      </div>
    </nav>
  );
};

export default Navbar;