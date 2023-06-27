import React from "react";

function Event_handlers(){
        const hello = (e) =>{
            console.log(e);
            let a = e.preventDefault()
        return(
            <button onClick={hello}>Click to fire event</button>
        )
    }
}
export default Event_handlers;