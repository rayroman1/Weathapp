import React from 'react';
import "./styling/pagStyling.css";
import {useEffect, useState} from 'react';import axios from 'axios';import { BrowserRouter, Route, Link } from "react-router-dom";

function ViewItems(){


    const [i,seti]=useState(''); const [items,setitems] =useState([]);
    const [a,setb]=useState(''); 
const[requestError,setRequestError]=useState('');
    useEffect(()=>{
    
      const config = {
        headers: { Authorization: "Bearer "+localStorage.getItem('token1') }
    };

var ew =localStorage.getItem('token');
    
try{
 axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token1')}`
        axios.get('http://localhost:8080/items3').then((dataa) =>  { //const r=dataa.data;
        
        setitems({ items:dataa.data}); 
       
      });   
        } catch(err){
setRequestError(err.message);
          console.log(err);
        }



         },[]);
        // console.log(requestError);
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
                   console.log(a.id+a.product);
                     f=f+a.id+'   '+a.product+'    '+new Date(a.purchasedate).toLocaleDateString()+'    '+new Date(a.expdate).toLocaleDateString()+'    '+a.price+'    '+a.quantity+'\n';
                   
                  }
                  }
               }};seti(f);
       });
      
    

    return (
        <>
        <div className="pagsstyle1">
        <h1>All Items</h1>
        <div>
      
        <textarea rows="6" cols="65" value={ i} >
       
</textarea>
    
     {/*<input type="button" onClick={this.handleClick} value="Back"/>*/}
       </div>
       <Link to="/viewall" className="navStq">Go Back</Link> <Link to="/" className="navStq">Main</Link>
       </div> 
      
        </>
    ) ;
}
export default ViewItems;