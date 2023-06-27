import React from 'react';
import Component_will_unmount1 from './Component_will_unmount1';

class Component_will_unmount extends React.Component{
    constructor(){
        super();
        this.state={show:true}
    }
    
    render(){
        return(
            <>
                {this.state.show?<Component_will_unmount1 />:<h1 style={{color:"whitesmoke"}}>hidden</h1>}
                <button onClick={()=>this.setState({show:!this.state.show})}>click</button>
            </>
        )
    }
}

export default Component_will_unmount;