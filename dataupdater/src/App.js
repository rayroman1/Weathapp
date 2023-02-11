
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Footer from "./Footer";
import NavBar from "./NavBar";
import Layout from "./Layout";
import Home from "./Home";
import Signin from "./Signin";
import NotPage from "./NotPage";
import Welcome from "./Welcome";
import AddItem from "./AddItem";
import DeleteItem from "./DeleteItem";
import UpdateItem from "./UpdateItem";
import ViewItems from "./ViewItems";
import ViewEmployees from "./ViewEmployees";
import AddEmployee from "./AddEmployee";
import UpdateEmployee from "./UpdateEmployee";
import CreateAcc from "./CreateAcc";

function App() {
  
  return (
  
    <div className="App">
      
     

    <BrowserRouter>
    <Header />
    <NavBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<Signin message="546yery"/>} />
          <Route path="viewall" element={<Welcome />} />
          <Route path="additem" element={<AddItem />} />
          <Route path="deleteitem" element={<DeleteItem />} />
          <Route path="addemp" element={<AddEmployee />} />
          <Route path="upemp" element={<UpdateEmployee />} />
          <Route path="viewallitems" element={<ViewItems />} />
          <Route path="viewemployees" element={<ViewEmployees />} />
          <Route path="updateitem" element={<UpdateItem />} />
          <Route path="createuser" element={<CreateAcc />} />


          <Route path="*" element={<NotPage />} />
        </Route>
      </Routes>
      <Footer note="Info" />
    </BrowserRouter>
      </div>
  );
}

export default App;
