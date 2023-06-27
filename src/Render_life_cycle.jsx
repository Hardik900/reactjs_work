import React from 'react';


class Render_life_cycle extends React.Component{
    constructor(props){
        super(props);
        // console.log(props, "name")
        this.state = {name1:"Sam"}
    }
    render(){
        //console.log("render called")
        return(
                <>
                    <h1 style={{color:"white"}}>Hi ,{this.props.name}</h1>
                    <h1 style={{color:"white"}}>{this.state.name1}</h1>
                    <button onClick={()=>this.setState({name1 :"Garry"})}>Click to update</button>
                </>
        )
    }
}

export default Render_life_cycle;