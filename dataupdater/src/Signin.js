import { getSuggestedQuery, render } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import APIService from './APIService';
import "./styling/pagStyling.css";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import {useEffect, useState} from 'react';

function Signin(props) {

   
 
       const [persons,setpersons] =useState([]);
       
       const [usern,setusern]=useState('');
        const [passw,setpassw]=useState('');
        const [emid,setemid]=useState('');
        const [text,settext]= useState({text:'iuy'});
       const [message1,setmessage]= useState(settext);const [tokenstr,settostring]=useState('');const [s,setstr]= useState('');
     let f='';
       const changeState = () => {  
        const mes ="Un/password not found";
        // const newmes={text:mes}
     //message1.text=newmes;
     // settext( message1.text);
        setmessage (mes);
       settext(mes);     
       };
    
  
        const  handleUserName = event => {
       setusern( event.target.value); 
      }
    
      const  handlePassword = event => {
        setpassw( event.target.value); //setPassword(event.target.value);
      }
      useEffect(()=>{
        getdata();
       
 },[])
 //settext(changeState());
      /*useEffect(()=>{
        setmessage ("Un/password not found");
      
},[])
useEffect(()=>{ setmessage ({message1:"Default Content"});},[]);*/
const getdata= async () => { axios.get('http://localhost:8080/users3').then((dataa) =>  { const r=dataa.data;
//this.setState({persons:JSON.stringify(r)});
setpersons({ persons:r}); }); }

//const  changepage=({navigation:{navigate}})=>{
   const navigate = useNavigate();
    
   
//}
 
const  getUsers=(event) =>{
//const loginin='false';
console.log('persons '+JSON.stringify(persons));
console.log('Usern '+usern);
console.log("Passw "+passw);
let e=''; let a='';

for (let value of Object.entries(persons))//{    if(usern===value.username && passw===value.password){  console.log("True");   navigate("./Welcome");;   }else{const mes='Un/password not found'; props.message=mes;} console.log('Hello '+value.lname);}
  {
    const y=value;
    console.log('Val '+value);
    if (value.value!=="persons")
    {
      for(e of value)
      {console.log("Items " +value[e])}
      for(a of e){
          console.log(a.username);
          if(usern===a.username && passw===a.password){  console.log("True");   navigate("/viewall");;   }else{ (changeState()); } 
      }
    }
    
  }  
 
   //window.location.href="C:/React/dataupdater/src/Welcome.js";  
       /*APIService.handleSubmit().then((dataa) =>  {
            //this.setState({ persons: dataa});

          // this.state.persons.concat(dataa.data);

            console.log("  River");
            const r=dataa.data;
            //this.setState({persons:JSON.stringify(r)});
this.state.persons=r;

            console.log(r[0]);
            console.log('Person '+this.state.persons);
            console.log(dataa.data);const uns="";//this.setState({ emid: obs.id}, () => console.log('State emid '+this.state.emid)  );
                      dataa.data.forEach  (obs=> {    console.log('Hello '+obs.lname);})

                      console.log('Usern '+this.state.usern);
                      console.log('Passw '+this.state.passw);
          
           // this.state.persons.map((element)=> {   
               // console.log('Items :'+element)
         //   });


   })  */
}
let yv="";
const  getUsers2=(event) => {

 

  //let str;
  axios.post('http://localhost:8080/authenticate', {username:usern,password:passw}).then((dataa) =>  {  const r1=dataa.data
  //this.setState({persons:JSON.stringify(r)});
/*for(var i in str ) {
  // to print only date from every object
  console.log(str[i].jwt)
}*/
const output = JSON.stringify(r1);
 yv=r1.jwt;
console.log(output);
 console.log(r1.jwt);
 settostring( r1["jwt"]); 
 
 setstr(output);
// console.log(s);

yv=tokenstr;
  if(r1.jwt.toString().length!==0){  console.log("True "+r1.jwt.toString().length); localStorage.setItem('token1',r1.jwt); console.log("token "+localStorage.getItem('token1'));  navigate("/viewall");   }
 else {console.log("In Else " );(changeState()); } 
 
}, (error) => {
  (changeState()); 
  console.log(error);}) ; 
  }




      



    return (
        <>
       
        <div className="pagsstyle1">
        <h1>Enter UserName Password</h1>
       {/* <form onSubmit={getUsers}>*/}
       <label htmlFor="fname">User Name:</label><br/>
       <input type="text" id="fname" name="fname" value={usern} onChange={handleUserName}  /><br/>
       <label htmlFor="lname">Password:</label><br/>
       <input type="text" id="lname" name="lname" value={passw}  onChange={handlePassword}/><br/><br/>
       <input type="button" onClick={getUsers2} value="Submit"/>
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

export default Signin;