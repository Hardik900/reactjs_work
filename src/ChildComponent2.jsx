import React from "react";


class ChildComponent2 extends React.Component {
    // constructor(props){
    //     super(props);
    //     console.log(this.props,"dededc")
    // }
    render(){
        
        return (
            <>
                <h2 style={{color:"white"}}>{this.props.name2} {this.props.Designation2} {this.props.skill2}</h2>
            </>
        );
    }
}

export default ChildComponent2;