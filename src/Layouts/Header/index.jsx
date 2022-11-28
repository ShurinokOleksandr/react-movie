import React from 'react';
import {logo,login,search,clear} from '../../assets/img/index'
import SideMenu from '../../Components/SideMenu/index'
import HeaderLinks from "./HeaderLinks";
const Header = () => {
    return (
        <header className="Header">
            <div className="Header__Container">
                <div className="Header__LogoAndCategories">
                    <div className="Header__Logo Logo">
                        <a href="#"><img src={logo} className="ImageLogo" alt="logo"/></a>
                    </div>
                    <HeaderLinks/>
                    <SideMenu />
                </div>
                <div className="Header__SearchAndLogin">
                    <div className="Header__Search Search">
                        <img
                            className="ImgSearch"
                            src={search}
                            alt="Search"/>
                        <input type="text" placeholder='Поиск...' className="Header__Input"/>
                    </div>
                    <div className="Header__Login">
                        <a href="#" className="Header__Login--Link">
                            <img src={login} alt="Login" className="ImageLogin"/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;