// import React from 'react'
import React, {useEffect, useState} from 'react'

// it is replace 3 lifecycle Methods 
// 1. ComponentDiDMOunt
// 2. ComponentDidUpdate
// 3. ComponentwillunMount
function Use_Effect(){
    const [Update, setUpdate] = useState("Hardik saini")
    const [Data, setData] = useState("Chirag sharma")

    useEffect(()=>{
        console.log("Use_Effect Update called");
    },[Update])

    useEffect(()=>{
        console.log("Use_Effect Data called");
    },[Data])
    return(
        <>
            <h1 style={{color:"white"}}>{Update}</h1>
            <button onClick={()=>setUpdate("Yash Sharma")}>Click Me to Update...</button>
            <h1 style={{color:"white"}}>{Data}</h1>
            <button onClick={()=>setData("Yash Sharma")}>Click Me to Data...</button>
        </>
    )
}

export default Use_Effect;