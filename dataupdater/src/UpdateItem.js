import React from 'react';
import "./styling/pagStyling.css";
import {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



function UpdateItem(props){

    const [items,setitems] =useState([]);
   const [i,seti]=useState('');
const [a,setprod]=useState('');
const [b,setpurchdate]=useState('');
const [c,setexdate]=useState('');
const [d,setquant]=useState('');
const [e,setprice]=useState('');
const  [f,setid]=useState('');
const [effvar,seteffvar]=useState('');
const [effvar3,seteffvar3]=useState('');
const [effvar2,seteffvar2]=useState('');
const [effvarb,seteffvarb]=useState('');
const [effvarc,seteffvarc]=useState('');
const [effvarn,seteffvarn]=useState('');
const[itid,setitid] =useState(''); const[divval,setdivval]=useState('');
    


useEffect(()=>{
     axios.get('http://localhost:8080/items3').then((dataa) =>  { //const r=dataa.data;
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
               f=f+a.id+' '+a.product+' '+new Date(a.purchasedate).toLocaleDateString()+' '+new Date(a.expdate).toLocaleDateString()+' '+a.price+' '+a.quantity+'<br/>';
             
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
 seteffvar(event.target.value);
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

let cup=''; let road=''; let highway=''; let mall=''; let office='';

      const  handleClick1 = () => {
        const article = { };
        
        
        cup=effvar;
        road=effvar2;
        highway=effvarb;
        mall=effvarc;
        office=effvarn;
        console.log(' A cup '+ cup);

        setprod(effvar);
        setpurchdate(effvar2);
        setexdate(effvarb);
        setquant(effvarc);
        setprice(effvarn);

      
      
      axios.put(`http://localhost:8080/itemsa/${itid}`, {"product":cup,"purchasedate":road,"expdate":highway,"price":mall,"quantity":office}).then((response) => {
        console.log(response);

    

      }, (error) => {
        console.log(error);})
      }
                
      








    const  handleClick = () => {
        console.log('Click happened');
        console.log("Item "+itid);
        axios.get(`http://localhost:8080/items2/+${itid}`)  
        .then((response) => {
          console.log(response);
   let account = response.data;
      
            let tempvar1=''; 
          for (const key in account)
          {
            console.log(`Effvar :${account[key]}`);
            
            seteffvar(`${account["product"]}`);
            console.log(`Effvar prod :${account["product"]}`);
            tempvar1=account["product"];
            seteffvar3(account["id"]);
            console.log('Effvar +'+account[key]);
            seteffvar2(account["purchasedate"]);
            seteffvarb(account["expdate"]);
            seteffvarc(account["quantity"]);
            seteffvarn(account["price"]);
            console.log("Var account "+ tempvar1);
          }
  
  

        }, (error) => {
          console.log(error);})
//proc resp
       



  
     
        
      };





    return  (
       <>
        <div className="pagsstyle1">
       <h1>Update Items</h1>
        <div>
        <div dangerouslySetInnerHTML={{__html: i}} />
       <label htmlFor="iid">Enter the item id: </label>
       <input type="text" name="iid" id="iid" value={itid}
        onChange={handleItemName}  /><br/>
       <div dangerouslySetInnerHTML={{__html:divval}}/>
       <input type="button" onClick={handleClick} value="Submit"/>
    </div>
    <div className="divw" ><p className="p11">Id</p><p className="p11">Product</p><p className="p11">Date</p><p className="p11">Date</p>Price<p className="p11">Quantity</p></div>
    <input type="text" value={effvar3} /><input type="text" value={effvar}  onChange={handleItemName1} /><input type="text" value={effvar2} /><input type="text" value={effvarb} /><input type="text"  value={effvarc} onChange={handleItemName2} /><input type="text" value={effvarn} onChange={handleItemName3} /><input type="button"  onClick={handleClick1} value="submit" />
    <p>
        <button onClick={() => navigate("/")}>Go to Main/LogOut</button>   <button onClick={() => navigate(-1)}>Go Back</button>
      </p>
       </div> 
      
        </>
    );
}
export default UpdateItem;