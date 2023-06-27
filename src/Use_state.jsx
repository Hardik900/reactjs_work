import React from "react";
import { useState } from "react";
import "./index.css"

function Use_state(){
    const [text, setText] = useState("Enter the text here")
    // console.log(text);
    const up_case = () =>{
        let store = text.toUpperCase();
        setText(store);
    }

    const change = (e) =>{
        console.log(e);
        setText(e.target.value)
    }
    const css = {
            display:"flex", 
            justifyContent:"center", 
            alignItems:"center"
        }
    return(
        <>
            <h1 style={{textAlign: "center", color: "white"}}>Enter your Text here</h1>
            <div style={css}>
            <textarea  value={text} onChange={change} id="" cols="90" rows="10"></textarea>
            </div>
        <div style={css}><button onClick={up_case}>Convert to Upper case</button></div>
       
        </>
    );
}
export default Use_state;