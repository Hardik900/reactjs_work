import React from 'react';

class Component_snapshot_update extends React.Component{
    constructor(){
        super();
        this.state={desc: "AI Designer"};
    }
    getSnapshotBeforeUpdate
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(prevState.desc,"previous State");
    }
    render(){
        return(
            <>
                <h1>{this.state.desc}</h1>
                <button onClick={()=>this.setState({desc: "javaScript Developer"})}>Press the button</button>
            </>
        )
    }
}

export default Component_snapshot_update;