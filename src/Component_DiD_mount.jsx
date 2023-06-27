import React from 'react';
import { ReactDOM } from 'react';

// componentDidMount will call after call all html content.
// first constructor called after render and then componentdidmount.
// it will run only once.
// it will use to call api maximum time.


class Component_DiD_mount extends React.Component{
    componentDidMount(){
        //console.log("componentDidMount called")
    }
    constructor(){
        super();
        //console.log("Constructor called")
    }
    
    render(){
        //console.log("render called")
        return(
            <h1 style={{color:"white"}}>hi</h1>
        )
    }
}

export default Component_DiD_mount;