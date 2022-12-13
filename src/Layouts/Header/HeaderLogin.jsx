import React from 'react';
import {login} from "../../assets/img";
import {removeItem} from "../../features/loginSlice/loginSlice";
import {useDispatch} from "react-redux";

const HeaderLogin = () => {
    const dispatch = useDispatch()
    const exit = () => {
        dispatch(removeItem())
        localStorage.removeItem('inAccount')
    }
    return (
        <div className="Header__Login">
            <div className="Header__Login--Link">
                <img
                    onClick={() => exit()}
                    src={login} alt="Form" className="ImageLogin"
                />
            </div>
        </div>
    );
};

export default HeaderLogin;