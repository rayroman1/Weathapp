import React from 'react';
import "./styling/pagStyling.css";
import {useEffect, useState} from 'react';import axios from 'axios';import { BrowserRouter, Route, Link } from "react-router-dom";

function ViewEmployees(){


    const [i,seti]=useState(''); const [items,setitems] =useState([]);


    useEffect(()=>{
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token1')}`
        axios.get('http://localhost:8080/users3').then((dataa) =>  { //const r=dataa.data;
          setitems({ items:dataa.data}); 
         
        
         });          
         
         },[]);

    useEffect(()=>{

        let e=[];let a=[];let value=[];let f='';
             for ( value of Object.entries(items))//{    if(usern===value.username && passw===value.password){  console.log("True");   navigate("./Welcome");;   }else{const mes='Un/password not found'; props.message=mes;} console.log('Hello '+value.lname);}
             {
               for ( e of value)
               {
                 //console.log('Log  '+ value[e]);
                 for(a of e){
                 
                  if (isNaN(a.id))
                  {}
                  else{
                   console.log(a.id+a.firstname); let pw='######'
                     f=f+a.id+'   '+a.firstname+'    '+a.lname+'    '+a.username+'    '+pw+'    '+a.active+'   '+a.roles+' '+'\n';
                   
                  }
                  }
               }};seti(f);
       });
      
    

    return (
        <>
        <div className="pagsstyle1">
        <h1>Employees</h1>
        <div>
      
        <textarea rows="6" cols="75" value={ i} >
       
</textarea>
    
     {/*<input type="button" onClick={this.handleClick} value="Back"/>*/}
       </div>
       <Link to="/viewall" className="navStq">Go Back</Link> <Link to="/" className="navStq">Main/LogOut</Link>
       </div> 
      
        </>
    ) ;
}
export default ViewEmployees;