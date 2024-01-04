import React, { useState } from 'react'
import './Loginsignup.css'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import person_icon from '../Assets/person.png'

const Loginsignup = () => {

    const [action,setAction]= useState("Login");
  return (
    <div className='container w-[600px]'>

        <div className="header">
            <div className="text"> {action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div> : <div className="input">
                <img src={person_icon} alt="" />
                <input type="text" placeholder='Name' />
            </div>}
            

            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email Id' />
            </div>

            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>

        {action==="Sign Up" ? <div></div> :  <div className="forgot-password">Lost Password? <span>Click here!</span></div> }

       

        <div className="submit-container">
            <div className={action==="Login"?"submit gray": "submit"} onClick={()=>setAction("Sign Up")}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray": "submit"} onClick={()=>setAction("Login")}>Log in</div>

        </div>


    </div>
  )
}

export default Loginsignup