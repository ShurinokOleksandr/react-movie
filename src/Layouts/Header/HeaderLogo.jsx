import React from 'react';
import {logo} from "../../assets/img";
import {NavLink} from "react-router-dom";

const HeaderLogo = () => {
    return (
        <div className="Header__Logo Logo">
            <NavLink to={"/react-movie"}><img src={logo} className="ImageLogo" alt="logo"/></NavLink>
        </div>
    );
};

export default HeaderLogo;