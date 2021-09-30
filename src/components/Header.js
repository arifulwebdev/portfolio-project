import React from "react";
import Typed from "react-typed";
const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
               <h1>Webdevelopment and websites promotions</h1> 
               <Typed className="type-text"
                strings = {["Web Design", "Web development","Facebook ADs", "Google ADs" ]}
                typeSpeed={50}
                backSpeed={75}
                loop
               />
               <a href="#" className="btn-main-offer">Conatct Me</a>
            </div>
        </div>
    )
}

export default Header
