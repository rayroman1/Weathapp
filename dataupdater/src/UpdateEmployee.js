import React from 'react';
import "./styling/pagStyling.css";
import {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function UpdateEmployee(){


    const [items,setitems] =useState([]);
   const [i,seti]=useState('');
const [a,setprod]=useState('');
const [b,setpurchdate]=useState('');
const [c,setexdate]=useState('');
const [d,setquant]=useState('');
const [e,setprice]=useState('');
const [g,setrole]=useState('');
const  [f,setid]=useState('');

const [effvar,seteffvar]=useState('');
const [effvar3,seteffvar3]=useState('');
const [effvar2,seteffvar2]=useState('');
const [effvarb,seteffvarb]=useState('');
const [effvarc,seteffvarc]=useState('');
const [effvarn,seteffvarn]=useState('');
const [effvarq,seteffvart]=useState('');
const [itid,setitid] =useState(''); const[divval,setdivval]=useState('');
    


useEffect(()=>{
     axios.get('http://localhost:8080/users3').then((dataa) =>  { //const r=dataa.data;
       setitems({ items:dataa.data}); 
      
     
      });          
      
      },[]);
    

   // let f='';
   // items.forEach(item => console.log(f=f+item.id+' '+item.product+' '+new Date(item.purchasedate).toLocaleDateString()+' '+new Date(item.expdate).toLocaleDateString()+' '+item.quantity+' '+item.price+'<br/>'))//this.setState({i:movie.id}), this.setState({f:this.state.f+this.state.i+<br/>}) ); //f+i+'<br/>'
    //this.setState({i:f}); 
  //  seti( f); 
 
/*load all items to view
text box to select iten- textboxes with data of selection to update- innerhtml
button to update
*/
const navigate = useNavigate();
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
               f=f+a.id+' '+a.firstname+' '+a.lname+' '+a.username+' '+a.password+' '+a.active+' '+a.roles+'\n';
             
            }
            }
         }};seti(f);
 });




  const  handleItemName = event => {
       // this.setState({ itid:event.target.value});
setitid(event.target.value);
      // console.log("Item "+itid);
      }; 

      const  handleItemName1 = event => {
        // this.setState({ itid:event.target.value});
 seteffvar3(event.target.value);
       // console.log("Item "+itid);
       }; 
       const  handleItemName2 = event => {
        // this.setState({ itid:event.target.value});
 seteffvarc(event.target.value);
       // console.log("Item "+itid);
       }; 
       const  handleItemName3 = event => {
        // this.setState({ itid:event.target.value});
 seteffvarn(event.target.value);
       // console.log("Item "+itid);
       }; 
       const  handleItemName4 = event => {
        // this.setState({ itid:event.target.value});
 seteffvart(event.target.value);
       // console.log("Item "+itid);
       }; 

let cup=''; let road=''; let highway=''; let mall=''; let office=''; let club='';

      const  handleClick1 = () => {
        const article = { };
        
        
        cup=effvar;
        road=effvar2;
        highway=effvarb;
        mall=effvarc;
        office=effvarn;
        club=effvarq;
        console.log(' A cup '+ cup);

        setprod(effvar3);
        setpurchdate(effvar2);
        setexdate(effvarb);
        setquant(effvarc);
        setprice(effvarn);
        setrole(effvarq);

      
      
      axios.put(`http://localhost:8080/usersa/${itid}`, {"firstname":cup,"lname":road,"username":highway,"password":mall,"status":office,"role":club}).then((response) => {
        console.log(response);

    

      }, (error) => {
        console.log(error);})
      }
                
      








    const  handleClick = () => {
        console.log('Click happened');
        console.log("Item "+itid);
        axios.get(`http://localhost:8080/user2/+${itid}`)  
        .then((response) => {
          console.log(response);
   let account = response.data;
      
            let tempvar1=''; 
          for (const key in account)
          {
            console.log(`Effvar :${account[key]}`);
            seteffvar(`${account["id"]}`);
            seteffvar3(`${account["firstname"]}`);
            console.log(`Effvar prod :${account["firstname"]}`);
            tempvar1=account["lname"];
            seteffvar2(account["lname"]);
            console.log('Effvar +'+account[key]);
            seteffvarb(account["username"]);
            seteffvarc(account["password"]);
            seteffvarn(account["active"]);
            seteffvart(account["roles"]);
            console.log("Var account "+ tempvar1);
          }
  
  

        }, (error) => {
          console.log(error);})
//proc resp        
      };
    

    return  (
        <>
        <div className="pagsstyle1">
        <h1>Update Employees</h1>
        <div>
        <textarea rows="6" cols="65" value={ i} >
       
</textarea><br/>
       <label htmlFor="iid">Enter the item id: </label>
       <input type="text" name="iid" id="iid" value={itid}
        onChange={handleItemName}  /><br/>
       <div dangerouslySetInnerHTML={{__html:divval}}/>
       <input type="button" onClick={handleClick} value="Submit"/>
    </div>
    <div className="divw" ><p className="p11">Id</p><p className="p11">FirstName</p><p className="p11">LastName</p><p className="p11">UserName</p>Password<p className="p11">Active</p></div>
    <input type="text" value={effvar} /><input type="text" value={effvar3}  onChange={handleItemName1} /><input type="text" value={effvar2} /><input type="text" value={effvarb} /><input type="text"  value={effvarc} onChange={handleItemName2} /><input type="text" value={effvarn} onChange={handleItemName3} /><input type="text" value={effvarq} onChange={handleItemName4} /><input type="button"  onClick={handleClick1} value="submit" />
    <p>
        <button onClick={() => navigate("/")}>Go to Main/LogOut</button>   <button onClick={() => navigate(-1)}>Go Back</button>

        
      </p>
       </div> 
      
        </>
    );
}
export default UpdateEmployee;