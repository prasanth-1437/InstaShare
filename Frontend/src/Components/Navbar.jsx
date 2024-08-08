import React, { createContext, useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import logo from '../assets/Standard Collection 8.png'
import StoryPreview from "./Home";

export const Navbar=({onSearch})=>{
    const [clicked ,setClick]=useState(false)
    const [searchbtn,setSrchbtn]=useState(false)
    const handleClick=()=>{
        setClick(!clicked)
    }
    const handleSearch=(e)=>{
 
        onSearch(e.target.value)
    }
    
    return(<>
        <div id="Navbar">

        <div id="logo">
            <div id="logo-main">
                <img src='https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg' alt="Logo" />&nbsp;
                <h2>Instagram</h2>
            </div>
            <div id="mobile" onClick={handleClick}>
                <i id="bar" className={clicked ? "" : "fas fa-bars"}></i>
            </div>
        </div>
    
       { searchbtn?
       
       <div id="Menu" className={clicked ? "Menu-active" : "Menu"}>
              <ul >
                <li key='6'>
                <input type="search"  onChange={handleSearch} placeholder="Search Caption" />
                <i className="fa-solid fa-magnifying-glass"></i>
                </li>
                <li onClick={()=>{setSrchbtn(!searchbtn)}}>Menu</li>
            </ul>
        </div>
       :<div id="Menu" className={clicked ? "Menu-active" : "Menu"}>
            <ul >
                <li key='1' id="search-con">
                   {clicked ?<><div onClick={()=>{setSrchbtn(!searchbtn)}}>Search</div></>:
                    <>  <input type="search"  onChange={handleSearch} placeholder="Search Caption" />
                    <i className="fa-solid fa-magnifying-glass"></i> </>}
                </li>
                <li key='2'><Link to='/' className="linktag">Home</Link></li>
                <li key='3'><Link to='/Profile' className="linktag">Profile</Link></li>
                <li key='4'><Link to='/Login' className="linktag"><button>Login</button></Link></li>
                <li key='5'>  <div id="mobile" onClick={handleClick}>
            <i id="bar" className={clicked ? "fas fa-times" : ""}></i>
            </div></li>
            </ul>
        </div>}
    </div>

   </> )
}