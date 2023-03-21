import React from "react";
import {Outlet} from "react-router-dom";
//import NavBar from "./NavBar";
import {useEffect, useState} from 'react';
import axios from "axios";
import {useRef} from 'react';

const Home = () => {

  const [zip, setZip] = useState(0);
  const [i,seti]=useState(''); 
  const [temp,settemp] =useState([]);
  const [cty,setcity] =useState([]);

 const [tmper,settmper] =useState([]);
  const refs = useRef(null);
  const  handleZip = event => {
    setZip( event.target.value);   
   }


  // useEffect (()=>{},[temp]  );
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: {q: zip, days: '1'},
    headers: {
      'X-RapidAPI-Key': '036bfbc785msh6f1896bdd9bbc42p1f9542jsn2e211db87719',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  let g='';
  const college=(event)=>{
    seti('');
    axios.request(options).then(function (response) {
      console.log(response.data);const tm=response.data;
     
      settemp({ temp:tm});  //g=JSON.stringify(temp);

      
    }).catch(function (error) {
      console.error(error);
    }); 
   
  }
  

  useEffect(() => { seti(JSON.stringify(temp))   }, [temp]  ) ;



  useEffect(() => { 
  let e=[];let a=[];let value=[];let b=[];
    for ( value of Object.entries(temp)){
  
      for ( e of value)
      {

        //console.log('Log e '+ e);
       
        for(a of Object.entries(e)){
          
          //console.log('Log a '+a.value);
          
          //  console.log('Log a '+a);
           
                for (b of  a)
               
                {
                  if(b.temp_f!==undefined)
                  {
                  console.log('Log temp '+b.temp_c);
                  settmper(b.temp_f);
                  
                  }
                  if(b.name!==undefined)
                  {
                    console.log('Log city '+b.name);
                    setcity(b.name);
                  }
                }
              
          
        }
      

      }
  
  
    }seti('');seti(cty+' '+tmper);
  },[temp, cty, tmper] ) ;

  return (
    <>
          

       
                   
          
<label htmlFor="zip">Enter City Please</label>
<input type="text" id="zip" name="zip" value={zip}  onChange={handleZip} ></input><input type="button" onClick={college} value="Enter Zip"/>

    <div className="App">
      <header className="App-header">
          
      <textarea id='data' rows="6" cols="65" value={ i} >
       
       </textarea>
        <p>
          Get weather for any place
        </p>
       
        <a
          className="App-link"
          href="http://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Weather App 
        </a>
      </header>
    </div>
      <Outlet />
    </>
  );
};

export default Home;