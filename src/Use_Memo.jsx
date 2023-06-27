import React, { useState, useMemo } from "react";


function Use_Memo(){
    const [count, setCount] = useState(1)
    const [item, setItem] = useState(10)
    const memo = useMemo(function multiCount(){
        console.log("re-render in multiCount")
        return count*2;
    },[count])
    return(
        <>  
            <h1 style={{color:'grey'}}>Use Memo</h1>
            <h1 style={{color:"white"}}>{count}</h1>
            <h1 style={{color:"white"}}>{item}</h1>
            <h2 style={{color:"white"}}>{memo}</h2>
            <button onClick={()=>setCount(count+1)}>Increase Count</button>
            <button onClick={()=>setItem(item+1)}>Increase Item</button>
        </>  
        
    )
}
export default Use_Memo;