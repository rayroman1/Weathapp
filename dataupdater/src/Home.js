import logo from './images6.jpg';
import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

function Home() {
    return (
        <div>
        <header className="App-header">
        {/*<img src={logo} className="" alt="logo" /> */}
        <p>
          Welcome
        </p><p className="pstyle" ><Link to="/signin" className="navSt">Signin</Link></p><p className="pstyle" ><Link to="/signin" className="navSt">Register</Link></p>
      {/* <p className="pstyle" ><Link to="/viewall" className="navSt">ViewAll</Link></p>*/}
      </header>
     
    
        </div>
        
    );
}

export default Home;