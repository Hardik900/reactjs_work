import React from "react";

class ChildComponent extends React.Component {
    // constructor(props){
    //     super(props);
    //     console.log(this.props,"dededc")
    // }
    render() {
        return(
            <h2 style={{color:"white"}}>{this.props.name} is {this.props.Designation} in {this.props.skill}</h2>
        );
    }
}

export default ChildComponent;