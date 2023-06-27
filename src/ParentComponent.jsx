import React from 'react'
import { ReactDOM } from 'react'
import Card from './Card';
import Navbar from './Navbar';
import ChildComponent from './ChildComponent';
import ChildComponent2 from './ChildComponent2';


class ParentComponent extends React.Component {
    data = [
        { name: "Samuel", Designation: "Designer", skill: "Java" },
        { name: "Yash", Designation: "SrDesigner", skill: "JavaScipt" },
        { name: "Vishal", Designation: "JrDesigner", skill: "Flutter" }
    ]
    sts = [
        { name2: "Hardik", Designation2: "Designer", skill2: "Java" },
        { name2: "Chirag", Designation2: "SrDesigner", skill2: "JavaScipt" },
        { name2: "Ram", Designation2: "JrDesigner", skill2: "Flutter" }
    ]

    render() {
        return (
            <>
                {
                    this.data.map((i) => (
                        // <ChildComponent name={i.name} Designation={i.Designation} skill={i.skill} />
                        <ChildComponent {...i}/>
                ))
                }
                {
                    this.data.map((i) => (
                        // <ChildComponent2 name2={j.name2} Designation2={j.Designation2} skill2={j.skill2} />
                        <ChildComponent2 {...i}/>
                    ))
                }
            </>
        );
    }
}


export default ParentComponent;








// class Componentclass extends React.Component{
//     state=[
//         {name:"Hardik", skill:"Developer"},
//         {name:"Yash", skill:"Sr.Developer"},
//         {name:"Vishal", skill:"Jr.Developer"}
//     ]
//     render(){
//         return(
//             // <h1>{setState.name}</h1>
//             <>
//                 <h1>{this.state[0].name}</h1>
//                 <h1>{this.state[1].name}</h1>
//                 <h1>{this.state[2].name}</h1>
//             </>
//         )
//     }
// }

