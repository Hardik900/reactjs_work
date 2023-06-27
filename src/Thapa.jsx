import React from "react";
import "./index.css";
import First from "./First";
import List from "./Navbar";


function Thapa() {
    const FirstName = "Hardik";
    const LastName = "saini";
    var date = new Date().toLocaleDateString();
    var time = new Date().toLocaleTimeString();
    const img = "https://picsum.photos/200/300";
    const links = "https://www.youtube.com/watch?v=OloAP8p1k1w&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=15";

    var currdate = new Date().getHours();
    var store = "";
    if (currdate > 1 && currdate < 12) {
        store = "Good Morning";
    } else if (currdate >= 12 && currdate < 20) {
        store = "Good Afternoon";
    } else if (currdate <= 20 && currdate <= 24) {
        store = "Good Night";
    }

    return (
        <>
            <First />
            <List />
            <h1>Challenge3</h1>
            <h3>Hello It's {store}</h3>
            <h2 style={{ marginTop: "30px", border: "2px solid red" }}>Top Five Netflix Series</h2>
            <ol>
                <li>Series1</li>
                <li>Series1</li>
                <li>Series1</li>
                <li>Series1</li>
                <li>Series1</li>
            </ol>
            <p>{`Hello, ${FirstName} ${LastName} It's a paragraph`}</p>
            <p>Expreesion in JSX <b>{Math.ceil(Math.random() * 100)}</b></p>
            <b>It's Bold here</b>

            <h1 style={{ backgroundColor: "red" }} contentEditable="true">Challenge 2 display current time and Date</h1>
            <h3 className="challenge2">Today's Date is {date}</h3>
            <h3>Today's Time is {time}</h3>
            <a href={links} target="_blank">
                <img src={img} alt="logo" />
            </a>

            <h1>Challenge3</h1>
            <h3>Hello It's {store}.</h3>

            <h1>Challenge4</h1>
        </>
    );
}
export default Thapa;


