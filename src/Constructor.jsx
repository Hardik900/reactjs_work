import React from 'react';
// import { ReactDOM } from 'react';

// update state in class Component
class Constructor extends React.Component{
    constructor(){
        super();
        this.state={data:1}
        // console.log("constructor Called")
    }
    changeState(){
        this.setState({data: this.state.data+1})
    }
    render(){
        return(
            <>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.changeState()}>Click here...</button>
            </>
        )
    }
}
export default Constructor;