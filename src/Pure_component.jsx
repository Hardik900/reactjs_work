import React from "react";

/*Pure Component are used when previous state and current state are same it will 
not re-render the component again*/

//it will use to enhance the performance of application
class Pure_component extends React.PureComponent{
    constructor(){
        super();
        this.state={data:1}
    }
    render(){
        console.log("Check-rerendering")
        return(
            <>
                <h1 style={{color:"white"}}>Pure component in React {this.state.data}</h1>
                <button onClick={()=>this.setState({data:1})}>CLick</button>
            </>
        )
    }
}

export default Pure_component;