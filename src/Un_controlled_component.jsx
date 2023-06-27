import React,{useRef} from 'react';

function Un_controlled_component(){
    let putRef_1 = useRef(null)
    let putRef_2 = useRef(null)
    const submit = (e) =>{
        e.preventDefault();
        // using Ref
        console.log("Fname : ",putRef_1.current.value);
        console.log("Lname : ",putRef_2.current.value);

        // Using DOM
        // let fname = document.getElementById('fname').value;
        // let lname = document.getElementById('lname').value;
        // console.log("User name is "+ fname + " " + lname);
    }
    return(
        <>
            <br />
            <h1 style={{color:"white"}}>UnControlled  Component</h1>
            <form action=""> 
                <label style={{color:"green"}}>f_name</label> 
                <input type="text" ref={putRef_1} id='fname' placeholder="Enter your fname" />
                <label style={{color:"green"}}>L_name</label>
                <input type="text" ref={putRef_2} id='lname' placeholder="Enter your lname" />
                <input type="submit" onClick={(e)=>submit(e)} />
            </form>
        </>
    )
}

export default Un_controlled_component;