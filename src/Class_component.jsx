import React from "react";
import { ReactDOM } from "react-dom";

class ClassComponent extends React.Component{
    constructor(){
        super();
        this.state=[
            {name : "Samuel", Designation: "Designer", skill : "Java"},
            {name : "Martin", Designation: "Sr.Designer", skill : "AWS"}
        ]
    }
    hello(){
        this.setState({name:"Hardik",Designation:"Senior Designer",skill:"ui/ux"});
    }
    render(){
        return(
            <>
                <h1 style={{color:"white"}}>{this.state[0].name} {this.state[0].Designation} {this.state[0].skill}</h1>
                <h1 style={{color:"white"}}>{this.state[1].name} {this.state[1].Designation} {this.state[1].skill}</h1> 
                {/* <h1 style={{color:"white"}}>{this.state[2].name} {this.state[2].Designation} {this.state[2].skill}</h1> */}
                <button onClick={()=>this.hello()}>Update data</button>
            </>
        );
    }
}

export default ClassComponent;