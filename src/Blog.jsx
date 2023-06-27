import React from "react";
import Navbar from "./Navbar";
import Use_state from "./Use_state";
// import ClassComponent from "./Class_component";
import ParentComponent from "./ParentComponent";
import Event_handlers from "./Event_handlers";
import Conditional_rendering from "./Conditional_rendering";
import List_Keys from './List_Keys';
import Form from './Form'
import Lifting_state_up from "./Lifting_state_up";
import Use_Effect from "./Use_Effect";
import Pure_component from "./Pure_component";
import Use_Memo from "./Use_Memo";
import Create_Ref from "./Create_Ref";

const Blog = () => {
    function parentAlert(){
        alert("parentAlert");
    }
    return(
        <>
            <Navbar/>
            <h1>Blog Page</h1>
            <Use_state/>  
            {/* <ClassComponent/> */}
            <ParentComponent/>
            <Event_handlers />
            <Conditional_rendering Greeting={false} />
            <List_Keys number={[1,2,3,4,5,6,8,9,10]} />
            <Form />
            <Lifting_state_up alert={parentAlert} />
            <Use_Effect />
            <Pure_component />
            <Use_Memo />
            <Create_Ref />
        </>
    );
}

export default Blog;