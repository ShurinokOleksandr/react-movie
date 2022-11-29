import React from 'react';
import {logo} from "../../assets/img";

const HeaderLogo = () => {
    return (
        <div className="Header__Logo Logo">
            <a href="#"><img src={logo} className="ImageLogo" alt="logo"/></a>
        </div>
    );
};

export default HeaderLogo;