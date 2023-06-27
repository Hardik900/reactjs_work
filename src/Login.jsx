import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();
    const style={color:"aqua", margin:"6px" }
    const submit = () =>{
        localStorage.setItem("log", true)
        navigate("/")
    }
    return(
        <>
            <Navbar />
            <h1 style={{textAlign:"center",color:"red"}}>Login Page</h1>
            <form style={{textAlign:"center",marginTop:"25px"}} >
                <label style={style}>Username</label>
                <input type="text" /> <br />
                <label style={style}>Password</label>
                <input type="password" /> <br />
                <input type="submit" style={{margin:"10px 10px 10px 10px", padding:"3px 17px 3px 17px"}} onClick={()=>{submit()}} value="login" />
            </form>
        </>
    )
}

export default Login;