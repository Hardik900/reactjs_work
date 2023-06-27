import React from "react";
import Data from "./Data";
import "./index.css";

function Card(props){
    // console.log(props.name,"098808989");
    return(
        <>
            <div className="box">
                <img src={props.EmpImg} alt="Image" />
                <p>{props.heading}</p>
                <p>{props.profession}</p>
                <p>{props.title}</p>
                {/* <button onclick={this.textstate("Yash")}>Update State</button> */}
            </div>
        </>
    );
}
export default Card;