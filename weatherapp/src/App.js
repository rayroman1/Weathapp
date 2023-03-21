import logo from './logo.svg';
import biggest_butt_ever from './biggest_butt_ever';
import './App.css';
import Results from "./components/Results.js";
import Home from "./components/Home.js";
import NotPage from "./components/NotPage.js";
import axios from "axios";
import {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [zip, setZip] = useState(0);

  
  

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
  params: {q: 'London', days: '1'},
  headers: {
    'X-RapidAPI-Key': '036bfbc785msh6f1896bdd9bbc42p1f9542jsn2e211db87719',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

const college=(event)=>{

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}


  
  return (
<>    

       
                   
          
<label htmlFor="zip">Enter City Please</label>
<input type="text" id="zip" name="zip" value={zip}></input><input type="button" onClick={""} value="Enter Zip"/>

    <div className="App">
      <header className="App-header">
       <img src={biggest_butt_ever} className="App-logo" alt="logo" />
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
    </div>    <BrowserRouter><Routes>
    <Route path="/" element={<Home />} />
    <Route path="resultp" element={<Results />} />
          <Route path="*" element={<NotPage />} />
        
      </Routes>    </BrowserRouter>
    
    </>
  );
}

export default App;
