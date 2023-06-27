import React from 'react';

class life_cycle extends React.Component{
    constructor(){
        super();
        // console.log("constructor called")
        this.state = {name: "Samuel"}
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        // console.log(prevState)
    }
    componentDidMount(){
        // console.log("componentDidMount called");
    }   
    shouldComponentUpdate(){
        return true;
    }                         
    componentDidUpdate(){
        // console.log("componentDidUpdate called")
    }
    render(){
        // console.log("render called")
        return(
            <>
                <h1>{this.state.name}</h1>
                <button onClick={()=>this.setState({name:"Martin"})}>Click here to update</button>
            </>
        )
    }
}

export default life_cycle;