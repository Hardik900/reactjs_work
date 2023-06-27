import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Thapa from "./Thapa";
import First from "./First";
import Data from "./Data";
import PropTypes from "prop-types";

function Home(){
        return(
        <>
            <Navbar/> 
            <h1 style={{color:"white", textAlign:"center", margin:"12px 0px 5px 0px"}}>Employee Details</h1>
            {/* <h1>Home Page</h1>  */}
            <div className="main">
                {/* <div><Thapa/></div> */}
            
                <div><Card 
                    EmpImg = {Data[0].EmpImg}
                    heading = {Data[0].heading}
                    profession = {Data[0].Profession}
                    title = {Data[0].title}
                    /></div>
                <div><Card 
                    EmpImg={Data[1].EmpImg}
                    heading={Data[1].heading}
                    profession = {Data[1].Profession}
                    title = {Data[1].title} />
                </div>
                <div><Card 
                    EmpImg={Data[2].EmpImg}
                    heading={Data[2].heading}
                    profession = {Data[2].Profession}
                    title = {Data[2].title} />
                </div>
                <div><Card 
                    EmpImg={Data[3].EmpImg}
                    heading={Data[3].heading}
                    profession = {Data[3].Profession}
                    title = {Data[3].title} />
                </div>
                <div><Card 
                    EmpImg={Data[4].EmpImg}
                    heading={Data[4].heading}
                    profession = {Data[4].Profession}
                    title = {Data[4].title} />
                </div>
                <div><Card 
                    EmpImg={Data[5].EmpImg}
                    heading={Data[5].heading}
                    profession = {Data[5].Profession}
                    title = {Data[5].title} />
                </div>
                <div><Card 
                    EmpImg={Data[6].EmpImg}
                    heading={Data[6].heading}
                    profession = {Data[6].Profession}
                    title = {Data[6].title} />
                </div>
                <div><Card 
                    EmpImg={Data[7].EmpImg}
                    heading={Data[7].heading}
                    profession = {Data[7].Profession}
                    title = {Data[7].title} />
                </div>
                <div><Card 
                    EmpImg={Data[8].EmpImg}
                    heading={Data[8].heading}
                    profession = {Data[8].Profession}
                    title = {Data[8].title} />
                </div>
                <div><Card 
                    EmpImg={Data[9].EmpImg}
                    heading={Data[9].heading}
                    profession = {Data[9].Profession}
                    title = {Data[9].title} />
                </div>
                <div><Card 
                    EmpImg={Data[10].EmpImg}
                    heading={Data[10].heading}
                    profession = {Data[10].Profession}
                    title = {Data[10].title} />
                </div>
            </div>
        </>
    );
}
Card.propTypes = {
    heading : PropTypes.string,
}
export default Home;