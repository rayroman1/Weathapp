
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './styling/NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="nAvSt">
        <h1 className="hstyle">Menu </h1><nav>
     
          <p className="pstyle"><Link to="/" className="navSt">Home</Link></p>
      
          <p className="pstyle" ><Link to="/signin" className="navSt">SignIn</Link></p>
    
         {/* <p className="pstyle" ><Link to="/viewall" className="navSt">ViewAll</Link></p> */}
    
    </nav>
      </div>
    )
  }
}

export default NavBar