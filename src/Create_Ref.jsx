import React, {createRef} from 'react';

class Create_Ref extends React.Component{
    constructor(){
        super();
        this.inputRef = createRef()
    }
    get(){
        console.log(this.inputRef)
    }
    render(){
        return(
            <>
                <h1 style={{color:"white"}}>Create Ref</h1>
                <input type="text" ref={this.inputRef} />
                <button onClick={()=>this.get()}>Check Ref</button>
            </>
        )
    }
}

export default Create_Ref;