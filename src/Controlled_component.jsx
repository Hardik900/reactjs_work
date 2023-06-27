import React,{useState} from "react";

function Controlled_component(){
    const [val,setVal] = useState(null);
    return(
        <>
            <h1 style={{color:"white"}}>Controlled Component</h1>
            <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} placeholder="Hey" />
        </>
    )
}

export default Controlled_component;