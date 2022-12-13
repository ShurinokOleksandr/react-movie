import React from 'react';
import {login} from "../../assets/img";
import {getAuth} from "firebase/auth";

const HeaderLogin = () => {
    const auth = getAuth();
    return (
        <div className="Header__Login">
            <div className="Header__Login--Link">
                <img
                    onClick={() => auth.signOut()}
                    src={login} alt="Form" className="ImageLogin"
                />
            </div>
        </div>
    );
};

export default HeaderLogin;