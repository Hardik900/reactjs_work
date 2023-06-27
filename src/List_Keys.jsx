import React from "react";

class List_Keys extends React.Component{
    render(){
        var num = this.props.number;
        var aa = this.props.value;
        // console.log(aa)
        let ww = num.map((a)=>(a*3))
        return(
            <>
                <h1 style={{color:"red"}}>USING MAP</h1> 
                <h1 style={{color:"green"}} key={num.a}>{ ww.join(", ")}</h1> 
            </>
        )
    }
}

export default List_Keys;