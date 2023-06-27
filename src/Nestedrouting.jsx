import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';


function Nestedrouting(){
    return(
        <>
            <h1 style={{color:"orchid"}}>Nested Routing</h1>
            <NavLink to="nestedRouting1" >Page 1 Nested_Routing</NavLink> <br />
            <NavLink to="nestedRouting2" >Page 2 Nested_Routing</NavLink> <br />
            <NavLink to="nestedRouting3" >Page 3 Nested_Routing</NavLink> <br />
            <Outlet />
        </>
    )
}

export default Nestedrouting;