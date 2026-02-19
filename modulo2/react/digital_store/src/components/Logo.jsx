import LogoImage from "../assets/logo-header.svg"
import React, { Component } from "react";

const Logo = () => {
    return (
        <div 
            id="logo-div"
            className="col-span-2"
        >
            <img src={LogoImage} alt="Digital Store header logo"
            />
        </div>
    );
}
export default Logo;