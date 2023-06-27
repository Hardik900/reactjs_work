import React, { useRef } from 'react';
import Forward_Ref_child from './Forward_Ref_child';

function Forward_Ref(){
    let inputRef = useRef(null)
    function updateInput(){
        console.log(inputRef.current.value)
    }
    return(
        <>
            <h1 style={{color:"pink"}}>Forward Ref</h1>
            <Forward_Ref_child ref={inputRef} />
            <button onClick={updateInput}>update input box</button> 
        </>
    )
}

export default Forward_Ref;