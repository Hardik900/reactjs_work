import React from 'react';
import { useNavigate } from 'react-router-dom';

function Use_Navigate(){
    const navigate = useNavigate();
    const changeRoute = () => {
        let x=false;
        if(x){
            navigate('/')
        }else{
            navigate('/about')
        }

    }
    return(
        <>
            <h1 style={{color:"orange"}}>Use Navigate Hook</h1>
            <button onClick={()=>{changeRoute()}}>Go to different page</button>
            {/* <button onClick={()=>changeRoute()}>Go to About page</button> */}
        </>
    )
}

export default Use_Navigate;