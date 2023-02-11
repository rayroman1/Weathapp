import React from 'react';
import "./styling/pagStyling.css";import { useNavigate } from "react-router-dom";
import {useEffect, useState} from 'react';
import axios from 'axios';

function AddEmployee(){

    const [items,setempl] =useState([]);
    const [itemn,setid]=useState(0);
 const [emfnam,setfnam]=useState('');
 const [emlnam,setlnam]=useState('');
 const [usnam,setusnum]=useState('');
 const [pasw,setempas]=useState('');
 const [emstat,setstatus]=useState(0);
 const [emrole,setrole]=useState(''); const [mes,setmessage]= useState();

 const navigate = useNavigate();
 
 let datab='';let cup=''; let road=''; let highway=''; let mall=''; let office=''; let planet=''; let ship='';

 
 let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
     //"Access-Control-Allow-Origin": "*",
  }
};      
                   
                   
                   
                  
                   
 const  handleItemName = event => {
  setid(event.target.value);
  ship=event.target.value;
   }; 

 const  handleItemName2 = event => {
    setfnam(event.target.value);
    road=event.target.value;
    }; 

  const  handleItemName3 = event => {
    setlnam(event.target.value);
    highway=event.target.value;
    }; 

 const  handleItemName4= event => {
    setusnum(event.target.value);
    mall=event.target.value;
    }; 
    const  handleItemName5 = event => {
        setempas(event.target.value);
        office=event.target.value;
        }; 
    
      const  handleItemName6 = event => {
        setstatus(event.target.value);
        cup=event.target.value;
        }; 
    
     const  handleItemName7 = event => {
        setrole(event.target.value);
        planet=event.target.value;
        }; 
        const changeState = () => {  
            const mes2 ="Un/password not found";
          setmessage (mes2);
         
              };
              let n = 0; let nn = 0;

            
              const  handleClick = () => {
                console.log('Click happened');
                console.log("Item in handle "+itemn);console.log("purchdate "+emfnam);console.log("exdate "+emlnam);console.log("itmprice "+usnam);
                console.log("Item "+pasw);
           
                axios.get("http://localhost:8080/user2/"+itemn).then((response) => {datab=response.data});

                  if (datab!==null){
                    const mes='Id exists';
                    console.log(mes);
                    setmessage( mes);

                  }

                  else{
 
                    n = ship;  nn = cup;


                    const datas = {
                     firstname:emfnam,lname:emlnam,username:usnam,password:pasw,active:parseInt(emstat),roles:emrole, id:parseInt(itemn)
                    }
                    axios.post('http://localhost:8080/user1',{headers:  {'Authorization':   `Bearer ${localStorage.getItem('token1')}` }},datas,axiosConfig)  //[{"active":emstat,"firstname":emfnam,"lname": emlnam,"username":usnam,"password":pasw,"roles":emrole,"id":itemn}])
                .then((response) => {
                  const mes='Employee Added';
                  console.log(response);
                  setmessage( mes)
        
                }, (error) => {
                  const mes='Error employee not added';
                  console.log(error);
                  setmessage( mes)
                });      }
              };




    return  (
        <>
        <div className="pagsstyle1">
        <h1>Add Employees</h1>
        <div>
       <label htmlFor="itemn">Enter the employee id: </label>
       <input type="text" name="itemn" id="itemn"   onChange={handleItemName} value={itemn} ></input><br/>
       <label htmlFor="emfnam">Enter the employee first Name: </label>
       <input type="text" name="emfnam" id="emfnam" required onChange={handleItemName2} value={emfnam} ></input><br/>
       <label htmlFor="emlnam">Enter the employee last: </label>
       <input type="text" name="emlnam" id="emlnam" required onChange={handleItemName3} value={emlnam} ></input><br/>
       <label htmlFor="usnam">Enter the username: </label>
       <input type="text" name="usnam" id="usnam" required onChange={handleItemName4} value={usnam} ></input><br/>
       <label htmlFor="pasw">Enter the password: </label>
       <input type="text" name="pasw" id="pasw" required onChange={handleItemName5} value={pasw}  ></input><br/>
       <label htmlFor="emstat">Enter the status 1 or 2: </label>
       <input type="text" name="emstat" id="emstat" required onChange={handleItemName6} value={emstat}  ></input><br/>
       <label htmlFor="emrole">Enter the role: </label>
       <input type="text" name="emrole" id="emrole" required onChange={handleItemName7} value={emrole}  ></input><br/>
       <input type="button" onClick={handleClick} value="Submit"/>
       </div>
       <div>
       <p>
        <button onClick={() => navigate("/")}>Go to Main/LogOut</button>   <button onClick={() => navigate(-1)}>Go Back</button>
      </p>
            </div>
       <h1>{mes}  </h1>
       <p>
     
      </p>
       
       </div> 
      
        </>
    );
}
export default AddEmployee;