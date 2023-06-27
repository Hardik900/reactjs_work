import React from "react";
import data from "./Import_export";
import Navbar from "./Navbar";
import { hi ,value } from "./Import_export";
import Constructor from "./Constructor";
import Render_life_cycle from "./Render_life_cycle";
import Component_DiD_mount from "./Component_DiD_mount";
import Component_did_update from "./Component_did_update";
import Component_should_update from "./Component_should_update";
import Component_will_unmount from "./Component_will_unmount";
import Life_cycle from "./Life_cycle";
import Component_snapshot_update from "./Component_snapshot_update";

function About(){
    const style = {color: "white"}
    return(
        <>
            <Navbar/>
            <h2  style = {style}>{data} Hardik</h2>
            <h2 style = {style}>{hi()}</h2>
            <h2 style = {style}>{value}</h2>
            <h2 style = {style}>About-Us Page</h2>  
            <Constructor />
            <Render_life_cycle name = "Hardik saini" />
            <Component_DiD_mount/>
            <Component_did_update name="Sam Anderson" age="19"/>
            <Component_should_update />
            <Component_will_unmount />
            <Life_cycle />
            <Component_snapshot_update />
        </>
    );
}

export default About;