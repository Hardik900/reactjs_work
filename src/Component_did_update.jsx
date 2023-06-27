import React from 'react';
//import Render_life_cycle from './Render_life_cycle';

// it will run only when the state will update
// we can console previous props and previous state

class Component_did_update extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props,"Props");
        // this.state ={detail : "Hello, It's a intial state"}
        this.state = {data1:1}
    }

    // for prestate
    // componentDidUpdate(preProps,preState,snapshot){
        //     console.log("componentDidUpdate called",preState, this.state.data1)
        // }


    // for preProps
    componentDidUpdate(preProps,preState,snapshot){
        console.log("componentDidUpdate called",preProps);
    }
    render(){
        console.log("render called ")
        return(
            <>
                <h1 style={{color:"green"}}>{this.state.data1}</h1>
                <button onClick={()=>this.setState({data1 : this.state.data1+1})}>click here</button>
            </>
        )
    }
}

export default Component_did_update;