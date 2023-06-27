import React,{useState} from 'react';
import Previous_props_child from './Previous_props_child';

function Previous_props_in_function(){
    const [count, setCount] = useState(0)
    return(
        <>
            <h1 style={{color:"red"}}>Previous Props</h1>
            <Previous_props_child count={count}/>
            <button onClick={()=>setCount(Math.floor(Math.random()*10))}>click here to get previous props</button>
        </>
    )
}

export default Previous_props_in_function;