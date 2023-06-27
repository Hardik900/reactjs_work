import React from 'react';
import { NavLink} from 'react-router-dom';
import Navbar from './Navbar';
import Use_search_param_hook from './Use_search_param_hook';
import Controlled_component from './Controlled_component';
import Un_controlled_component from './Un_controlled_component';
import Use_Navigate from './Use_Navigate'
import Nestedrouting from './Nestedrouting';
// import NestedRouting1 from './nestedRouting1';
// import NestedRouting2 from './nestedRouting2';
// import NestedRouting3 from './nestedRouting3';
import Use_location from './Use_location';
import Ref_in_class_component from './Ref_in_class_component';
import Use_Ref from './Use_Ref';
import Forward_Ref from './Forward_Ref';
import Previous_state_in_function from './Previous_state_in_function';
import Previous_props_in_function from './Previous_props_in_function';


function Routerparams(){
    return(
        <>
            <Navbar />
            <h1 style={{color:"white"}}>Hello  User </h1>
            <h2><NavLink to="user/anil" state={{name:'hardik'}}>ANIL</NavLink></h2>
            <h2><NavLink to="user/sameer">SAMEER</NavLink></h2>
            <Use_search_param_hook />
            <Controlled_component />
            <Un_controlled_component />
            <Use_Navigate />
            <Nestedrouting />
            <Use_location />
            <Ref_in_class_component />
            <Use_Ref />
            <Forward_Ref />
            <Previous_state_in_function />
            <Previous_props_in_function/>
        </>
    )
}

export default Routerparams;