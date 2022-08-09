import React from "react";
import Heading from "./Heading";
import "./Home.css"


const Home = () => {
    return (
        <div className="wrapper">
            <Heading text=" Vusimuzi" arc={140} radius={440} />
            <h2 className="ndimande">Ndimande Trading</h2>  
            <div className="services">
                <h3 className="electrical"><i className="fa fa-bolt fa-2xs"></i>Electrical</h3>
                <h3 className="Construction"><i className="fa fa-exclamation-triangle fa-2xs"></i>Construction</h3>
                <h3 className="maintainance"><i className="fa fa-wrench fa-2xs"></i>Maintainance</h3>
            </div> 
            <div className="small-screen">
                <h1 className="header">V u s i m u z i</h1>
            </div>
        </div>
    );
};

export default Home;