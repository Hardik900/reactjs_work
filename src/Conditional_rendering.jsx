import React  from 'react';

class Greeting extends React.Component{
            constructor(){
                super();
            }
    render(){
        return(
            <Conditional_rendering greeting={false}/>
        )
    }
}

class Conditional_rendering extends React.Component{
    constructor(props){
        super(props);
        // console.log(this.props)
    }
    // login = () => {
    //     return(<h1>logout</h1>)
    // }
    // logout = () => {
    //     return(console.log("fdvdfv"))
    // }
    render(){
        return(
            <>
                {this.props.Greeting?<h1 style={{color:"white"}}>login</h1>:<h1 style={{color:"white"}}>logout</h1>}
            </>
        )
    }
}


// class conditional_rendering1 extends React.Component{
//     constructor(){
//         super();
//         return(
//             <>
//                 <h1>logout</h1>
//                 <button>login</button>
//             </>
//         )
//     }
// }


export default Conditional_rendering;
export {Greeting};