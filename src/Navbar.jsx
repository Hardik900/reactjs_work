import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./index.css"
import Card from "./Card";
import Classcomponent from "./ParentComponent";


const Navbar = () => {  // pass props
    // console.log(props, "props");
    const login_modal = () => {
        document.getElementById("modal").style.marginTop = "500px";
    }

    const close_func = () => {
        document.getElementById("modal").style.marginTop = "-500px";
    }

    return(
        <>
            <div className="outside_modal">
                <div id="modal">
                    <button onClick={close_func}>close</button>
                </div>
            </div>
            <div className="outer_nav">
                <ul className="nav">
                    {/* <li><NavLink style={({isActive})=>{return {color: isActive ? 'red' : 'green'}}} className="link-color" to="/">Home</NavLink></li> */}
                    <li><NavLink  className="link-color" to="/">Home</NavLink></li>
                    <li><NavLink  to="/about" className="link-color">About Us</NavLink></li>
                    <li><NavLink  to="/blog" className="link-color">Blog</NavLink></li>
                    <li><NavLink  to="/Routerparams" className="link-color">Routes</NavLink></li>
                    <li><NavLink  to="/login" className="link-color">Login</NavLink></li>
                    <li><NavLink  to="/API_Axios" className="link-color">Axios</NavLink></li>
                </ul>

                <div className="right-nav-img">
                    <img src="./download.jpg" onClick={login_modal} id="image" />
                </div>
            </div>
            {/* <Classcomponent/> */}
        </>
    );
};

export default Navbar;