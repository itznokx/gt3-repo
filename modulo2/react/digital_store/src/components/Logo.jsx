import LogoHeader from "../assets/logo-header.svg"
import LogoFooter from "../assets/logo-footer.svg"
import React, { Component } from "react";

const Logo = ({logoLocal}) => {
    const logo = logoLocal == "Header" ? LogoHeader : LogoFooter;
    console.log(logo)
    return (
            <div>
                <img id="logo-header" src={logo} alt="Digital Store header logo"
                />
            </div>
            
    );
}
export default Logo;