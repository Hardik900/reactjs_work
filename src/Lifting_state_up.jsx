import React from "react";

class Lifting_state_up extends React.Component{
    render(){
        return(
            <>
                <button onClick={this.props.alert}>CLick Me</button>
            </>
        )
    }
}

export default Lifting_state_up;