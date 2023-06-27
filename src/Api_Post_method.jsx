import React, { useState } from 'react';

function Api_Post_method(){
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    // const [Mobile, setMobile] = useState("");

    const submit = () =>{
        let data = {title, body}
        console.log(data,"data")
        const option ={
            method: 'POST',
            headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        let ww = fetch("https:jsonplaceholder.typicode.com/posts",option)
        .then((response)=> {
            return response.json();
        }).then((resp)=>{
            console.log(resp,"resp")
        }).catch((error)=>{
            console.log(error,"error")
        })
    }

    return(
        <div style={{textAlign : "center"}}>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Title"/> <br />
            <input type="email" value={body} onChange={(e)=>{setBody(e.target.value)}} placeholder="Body" /> <br />
            {/* <input type="number" value={Mobile} onChange={(e)=>{setMobile(e.target.value)}} placeholder="Number"/> <br /> */}
            <input type="submit" onClick={submit} />
        </div>
    )
}

export default Api_Post_method;