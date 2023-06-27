import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Use_location(){
    const location = useLocation();
    // console.log(location)
    return(
        <>
            <h1 style={{color:"yellow"}}>Hello</h1>
            <Link to="/about" >Click here...</Link>
        </>
    )
}

export default Use_location;