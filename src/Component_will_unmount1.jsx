import React from 'react';
class Component_will_unmount1 extends React.Component {
    componentWillUnmount() {
        // alert("componentWillUnmount");
    }
    render() {
        return(
            <h1 style={{ color:"whitesmoke"}}>show</h1>
        )
    }
}

export default Component_will_unmount1;