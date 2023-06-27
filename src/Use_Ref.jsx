import React, { useRef } from "react";

function Use_Ref(){
    const hardik = useRef(); 
    const get = () =>{
        console.log(hardik.current.value)
    }
    return(
        <>
            <h1 style={{color:"aqua" }}>Use Ref</h1>
            <input type="text" ref={hardik} />
            <button onClick={()=>get()}>Use Ref button</button>
        </>
    )
}

export default Use_Ref;