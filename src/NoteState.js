import React,{useState} from "react";
import Note_Context from "./Note_Context";

const NoteState = (props) =>{
    const s1 = {
        "name" : "Harry",
        "class" : "5b"
    }
    const [state, setState] = useState(s1)
    const update = () =>{
        setTimeout(()=>{
            setState({
                "name" : "Garry",
                "class" : "10b"
            })
        },3000);
    } 
    return(
            <Note_Context.Provider value={{state, update}}>
                {props.children}
            </Note_Context.Provider>
    )
}

export default NoteState;