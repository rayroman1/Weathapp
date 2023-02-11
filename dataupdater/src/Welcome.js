import React from 'react';
import "./styling/pagStyling.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function ViewAll() {


    const navigate = useNavigate();

    return (

        <div className="pagstyling"> 
        <h1>Select Item</h1>

        <table className="tabstyle1" >
            <tr><Link to="/viewallitems">View items</Link></tr>
            <tr><Link to="/additem">Add item</Link></tr>
            <tr><Link to="/deleteitem">Delete Item</Link></tr>
            <tr><Link to="/updateitem">Update Item</Link></tr>
            <tr><Link to="/viewemployees">View employees</Link></tr>
            <tr><Link to="/addemp">Add Employee</Link></tr>
            <tr><Link to="/upemp">Update Employee</Link></tr>

        </table>
        <p>
        <button onClick={() => navigate("/")}>Go to Main/LogOutSes</button>
      </p>
        </div>
    );
}

export default ViewAll;