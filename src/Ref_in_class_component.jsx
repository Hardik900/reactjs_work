import React,{ createRef} from 'react';

//it will not recommend to use in Reactjs because it directly access the dom

class Ref_in_class_component extends React.Component{
    constructor(){
        super();
        this.inputRef = createRef();
    }
    display(){
        console.log(this.inputRef.current.value)
        this.inputRef.current.style.color = "blue"
    }
    render(){
        return(
            <>
                <h1 style={{color:"GrayText" }}>Create.ref</h1>
                <input type="text" ref={this.inputRef}  />
                <button onClick={()=>this.display()}>click here</button>
            </>
        )
    }
}

export default Ref_in_class_component;