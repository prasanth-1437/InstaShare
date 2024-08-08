import React from "react";
import { Login } from "./Components/Login";
import './App.css'
import Home from "./Components/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Profile } from "./Components/Profile";
import { PageNotFound } from "./Components/PageNotFound";
const App=()=>{
  return(
    <div>
      <BrowserRouter>
      <Routes>
         <Route exact path='/' element={<Home/>}></Route>
         <Route path='/Login'  element={<Login/>}></Route>
         <Route path='/Profile' element={<Profile/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
