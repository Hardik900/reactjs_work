import React from "react";
import "./index.css";
import Thapa from "./Thapa";
import { Routes, Route, Switch, BrowserRouter } from "react-router-dom";
// import Navbar from "./Navbar";
import Home from "./Home";
import Blog from "./Blog";
import Login from "./Login"
import About from "./About";
import Error from "./Error";
import Routerparams from "./Routerparams";
import User from "./User";
import Nestedrouting from "./Nestedrouting";
import NestedRouting1 from "./nestedRouting1";
import NestedRouting2 from "./nestedRouting2";
import NestedRouting3 from "./nestedRouting3";
import Protected from "./Protected";
import API_Axios from "./API_Axios";
import NoteState from "./NoteState"

const App = () => {
    return (
        <>
            <NoteState>
                <BrowserRouter>
                    <Routes>
                        {/* <Route exact path='/' element={<Har/>}/> */}
                        <Route path='/' element={<Protected Component={Home} />} />
                        <Route path='/blog' element={<Blog />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/API_Axios' element={<API_Axios />} />
                        <Route path='/Routerparams/' element={<Routerparams />} >
                            <Route path='nestedRouting1' element={<NestedRouting1 />} />
                            <Route path='nestedRouting2' element={<NestedRouting2 />} />
                            <Route path='nestedRouting3' element={<NestedRouting3 />} />
                        </Route>
                        <Route path='Routerparams/user/:name' element={<User />} />
                        <Route path="/*" element={<Error />} />
                    </Routes>
                </BrowserRouter>
            </NoteState>
        </>
    );
}

export default App;