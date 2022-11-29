import React from 'react';
import {login} from "../../assets/img";

const HeaderLogin = () => {
    return (
        <div className="Header__Login">
            <a href="#" className="Header__Login--Link">
                <img src={login} alt="Login" className="ImageLogin"/>
            </a>
        </div>
    );
};

export default HeaderLogin;