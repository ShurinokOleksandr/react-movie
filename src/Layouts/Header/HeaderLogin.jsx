import React from 'react';
import {login} from "../../assets/img";
import {Link} from "react-router-dom";

const HeaderLogin = () => {
    return (
        <div className="Header__Login">
            <Link to={"/login"} className="Header__Login--Link">
                <img src={login} alt="Form" className="ImageLogin"/>
            </Link>
        </div>
    );
};

export default HeaderLogin;