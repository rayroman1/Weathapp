import { getSuggestedQuery, render } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import APIService from './APIService';
import "./styling/pagStyling.css";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import {useEffect, useState} from 'react';



function CreateAcc(props) 
{



  const [persons,setpersons] =useState([]);
  const [usern,setusern]=useState('');
   const [passw,setpassw]=useState('');
   const [emid,setemid]=useState('');
   const [text,settext]= useState({text:'iuy'});
  const [message1,setmessage]= useState(settext);
let f='';
  //const changeState = () => {  
   const mes ="Un/password not found";


   const navigate = useNavigate();





    return (
        <>
       
        <div className="pagsstyle1">
        <h1>Enter UserName Password</h1>
       {/* <form onSubmit={getUsers}>*/}
       <label htmlFor="fname">User Name:</label><br/>
       <input type="text" id="fname" name="fname" value={usern}  /><br/>
       <label htmlFor="lname">Password:</label><br/>
       <input type="text" id="lname" name="lname" value={passw}  /><br/><br/>
       <input type="button" value="Submit"/>
    {/* </form>*/}
     <h1>{message1}  </h1>

     <p>
        <button onClick={() => navigate("/")}>Go to Main</button>
      </p>
     
        </div>
        
        </>
        //funct connect to db`ycv      

    );
}

export default CreateAcc;