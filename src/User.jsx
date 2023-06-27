import React from "react";
import { Params, useParams, useLocation } from 'react-router-dom';

function User(){
    const Params = useParams();
    const {name} = Params;
    console.log(name,"name")

    const location = useLocation()
    console.log(location)
    return(
        <h1 style={{color:"white"}} >Welcome User {name}</h1>
    )
}

export default User;