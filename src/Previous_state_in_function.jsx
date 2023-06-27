import  React, { useState } from 'react';

function Previous_state_in_function(){
    const [count, setCount] = useState(0)
    function Check_prev(){
        let rand = count+1;
        setCount((previous_state)=>{
            console.log(previous_state)
            return rand;
        })
    }
    return(
        <>
            <h1 style={{color:"blue"}}>Count : {count}</h1>
            <button onClick={()=>Check_prev()}>Click here to check previous state</button>
        </>
    )
}

export default Previous_state_in_function;

