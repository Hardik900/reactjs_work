import React from 'react';
import { hi } from './Import_export';

// shouldcomponentupdate will stop the rendering
// bydefault it return false
// if it return true then only it will render on screen else it will not render only show in console

class Component_should_update extends React.Component{
    constructor(){
        super();
        this.state = {count: 0}
    }

    shouldComponentUpdate(){
        var aa = this.state.count;
        console.log("shouldComponentUpdate",aa);
        if(aa>5 && aa<20)return true;
    }
    
    render(){
        return(
            <>
                <h1 style={{color:"red"}}>{this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>click here...</button>
            </>
        )
    }
}

export default Component_should_update;