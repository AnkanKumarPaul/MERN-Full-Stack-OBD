import { useState } from "react";

import { Navigate, useNavigate } from 'react-router-dom';

import "./OBDUserlogin.css"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'

import {
    // BrowserRouter as Router,
    // Routes,
    // Route, 
    Link,
} from "react-router-dom";

// import OBDUserregistraion from "./OBDUserregistraion";

function OBDUserlogin() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [message, setMessage] = useState('')

    const [flag, setFlag] = useState(0)

    const loginUser = async () => {
        const new_user = {
            "email": email,
            "password": password,
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(new_user)
        };

        const response = await fetch('https://mern-full-stack-obd-tution-backend.onrender.com/loginuser', requestOptions);
        const data = await response.json();

        if (data.message === true) {
            localStorage.setItem("loggedUser", email)
            setMessage("User Login Successfull")
            alert("User login successfull, please wait...")
            window.location.href = "/"
            //navigate to dashboard or home page
        }
        else {
            setMessage("User Login Failed")
            window.location.href = "/"
            alert("User Login failed, check mail or password and try again")

        }
    }

    const showHide = (id) => {
        if (flag === 0) {
            setFlag(1)
        }
        else {
            setFlag(0)
        }
    }

    return (
        <>
        
             <marquee width="100%">
                <h5 className="forusertablemessagetwo">Login and Registration will take some time for first time,
                    request you to please wait... :) </h5>
            </marquee>

        
            <h1 className="h1login"> Blood Donation </h1>

        
            <table className="tablelogin">
                <tr>

                    <th className="tableheadlogin ">User Login</th>

                </tr>

                <br></br>

                <tr>
                    <td >Enter Email Id : <input className="my-input" type="email" name="" placeholder="Enter Email Id" onChange={(e) => setEmail(e.target.value)} /></td>
                </tr>
                <br></br>
                <tr><td>Enter Password :

                    {/* <FontAwesomeIcon className="showHideuser" onClick={showHide} icon={faEye} /> */}
                    {
                        flag === 0 ?
                            <input className="my-input" type="password" name="" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />

                            :

                            <input className="my-input" type="text" name="" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                    }

                    <a onClick={showHide} className="userloginshowhide">

                        {flag === 0 ? <FaEyeSlash /> : <FaEye />}

                    </a>

                    {/* <FontAwesomeIcon className="showHideuser" onClick={showHide} icon={faEyeSlash} /> */}

                    {/* <button onClick={showHide}>Show/Hide</button> */}
                </td></tr>




                {/* onchange er kaj likhle sathe sathe niche dekhabe */}

                <tr >
                    <td className="registrationSwitchlogin" ><input onClick={loginUser} className="registrationSwitchin" type="Submit" value="Login" /></td>
                </tr>
                <tr>
                    <td>{message}</td>
                </tr>

                <br></br>

                <tr>
                    <td>
                        New User? <Link to="/OBDUserregistraion" className="userregisterlogin">Register here</Link>
                    </td>
                </tr>
                <br></br>
                <tr>
                    <td>
                        Forget Password? <Link to="/OBDUserforgetpassword" className="userregisterforget">Click here</Link>

                    </td>
                </tr>

                <br></br>
                {/* {email} <br></br>
                {password} <br></br> */}

            </table >

        </>
    )
}

export default OBDUserlogin
