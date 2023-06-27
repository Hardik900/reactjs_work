import React,{useEffect, useRef} from "react";

function Previous_props_child(props){
    const ref = useRef();
    useEffect(()=>{
        ref.current=props.count;
    });
    // const previousProps = ref.current;
    return(
        <>
            <h1 style={{color:"red"}}>Current value in Child Component {props.count}</h1>
            <h1 style={{color:"green"}}>Previous val : {ref.current}</h1>
        </>
    )
}

export default Previous_props_child;