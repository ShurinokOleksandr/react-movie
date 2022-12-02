import React, {useState} from 'react';
import HeaderLinks from "./HeaderLinks";
import HeaderSearch from "./HeaderSearch";
import HeaderLogin from "./HeaderLogin";
import HeaderLogo from "./HeaderLogo";
const Header = () => {
    return (
        <header className="Header">
            <div className="Header__Container">
                <div className="Header__LogoAndCategories">
                    <HeaderLogo/>
                    <HeaderLinks/>
                </div>
                <div className="Header__SearchAndLogin">
                    <HeaderSearch/>
                    <HeaderLogin/>
                </div>
            </div>
        </header>
    );
};

export default Header;