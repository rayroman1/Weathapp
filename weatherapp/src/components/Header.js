import React from 'react';
import "./styling/pagStyling.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Header() {


 

    return (
        <>
<label for="zip">Enter City Please</label>
<input type="text" id="zip" name="zip" value={zip}></input><input type="button" onClick={college} value="Enter Zip"/>
</>
        )
    }
    
    export default Header;