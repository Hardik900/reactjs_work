import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Use_search_param_hook(){
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get('age'))
    const age = searchParams.get('age')
    const city = searchParams.get('city')

    return(
        <>
            {/* <h2 style={{color:"red"}}>Age is : {age}</h2> */}
            <h2 style={{color:"red"}}>Age is : {age}</h2>
            <h2 style={{color:"red"}}>city is : {city}</h2>
            <input style={{width:"300px", padding:"7px", color:"green"}} type="text" onChange={(e)=>setSearchParams(e.target.value)} placeholder="Please Write Something here" /> <br />
            <button onClick={()=>setSearchParams({hello:"Hardik"})}>Click here</button>
        </>
    )
}

export default Use_search_param_hook;