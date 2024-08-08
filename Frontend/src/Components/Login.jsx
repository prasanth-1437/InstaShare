import { useState } from 'react'
import './Login.css'
import logo from '../assets/Standard Collection 8.png'
import photo from '../assets/Illustration.png'
export const Login=()=>{
    const [err,setError]=useState("")
    const handleLogin=()=>{
        setError("Invalid Password or username")
    }
    return(
        <div id="Login-page">
            <div id="Login-sidePic">
             <img src={photo}/>
            </div>
            <div id="Login-form">
                <div id="Login">
                    <img src={logo} />
                    <h3>Insta Share</h3>
                    <h6>USERNAME</h6>
                    <input type="email"/>
                    <h6>PASSWORD</h6>
                    <input type="password"/>
                    <button onClick={handleLogin}>Login</button>
                   { err && (<p className='invalid-msg'>{err}</p>)}
                </div>
            </div>
        </div>
    )
}