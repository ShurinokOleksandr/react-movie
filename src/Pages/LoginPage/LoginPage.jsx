import React, {useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {logo} from "../../assets/img";
import SingUp from "./Enter/SingUp";
import SingIn from "./Enter/SingIn";
import {useAuth} from "../../hooks/useAuth";
import {addCheck} from "../../features/loginSlice/loginSlice";


const LoginPage = () => {
    const dispatch = useDispatch()
    const {isCheck} = useAuth()
    const [show,setShow] = useState(true)
    const [checked,setCheked] = useState(false)
    function dispatchChecked(){
        setCheked(!checked)
        dispatch(addCheck({isCheck: !checked}))
    }
    console.log(isCheck)
    return (
        <section className={'LoginPage'}>
            <div className="LoginPage__Container">
                <div className="LoginPage__Container-Content">
                    <h1>
                        React Movie App
                    </h1>
                    <div className="Login__Form">
                        <div className="Login__Form-Container">
                            <div className="Form">
                                <div className="Form__Logo">
                                    <img src={logo} className="ImageLogo" alt="logo"/>
                                </div>
                                <div className="Form__Input">
                                    { show ? <SingUp/> : <SingIn/>}
                                    <div className="WrapRememberAndForgot">
                                        <div className="Button__Remember">
                                            <p>Запомнить меня</p>
                                            <input
                                                type={"checkbox"}
                                                checked={checked}
                                                onChange={() => dispatchChecked() }
                                            />
                                        </div>
                                        <div className="ForgotPassword">
                                            <button>
                                                Забыл пароль?
                                            </button>
                                        </div>
                                    </div>
                                    <div onClick={() => setShow(!show)} className="Form__Text">
                                        <button >
                                            {show ? <>Уже зарегистрированы?</>
                                                : <>Новый учасник?</>}
                                        </button>
                                    </div>
                                    <div className="Form__LoginWithService">
                                        <div className="text">
                                            Или используйте это:
                                        </div>
                                        <ul className="ListService">
                                            <li className="ListService-Item">g</li>
                                            <li className="ListService-Item">f</li>
                                            <li className="ListService-Item">g</li>
                                            <li className="ListService-Item">a</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
