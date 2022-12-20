import React, {useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {logo} from "../../assets/img";
import SingUp from "./Enter/SingUp";
import SingIn from "./Enter/SingIn";
import {addCheck} from "../../features/loginSlice/loginSlice";
import {getAuth, GoogleAuthProvider,FacebookAuthProvider,GithubAuthProvider,signInAnonymously , signInWithPopup} from "firebase/auth";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
const LoginPage = () => {
    const dispatch = useDispatch()
    const [show,setShow] = useState(true)
    const [checked,setCheked] = useState(false)


    const auth = getAuth();
    const Googleprovider = new GoogleAuthProvider();
    const FaceBookprovider = new FacebookAuthProvider();
    const provider = new GithubAuthProvider();

    function dispatchChecked(){
        setCheked(!checked)
        dispatch(addCheck({isCheck: !checked}))
    }



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
                                            <li onClick={() => signInWithPopup(auth, Googleprovider)} className="ListService-Item">
                                                <GoogleIcon sx={{ fontSize: 30 }} color='primary'/>
                                            </li>
                                            <li  onClick={() => signInWithPopup(auth, FaceBookprovider)} className="ListService-Item">
                                                <FacebookTwoToneIcon
                                                    sx={{ fontSize: 30}}
                                                    className={'FacebookIcon'}
                                                    color='primary'
                                                />
                                            </li>
                                            <li
                                                onClick={() => signInWithPopup(auth, provider)}
                                                className="ListService-Item">
                                                <GitHubIcon
                                                    sx={{ fontSize: 30 }}
                                                    color='primary'
                                                />
                                            </li>
                                            <li onClick={() => signInAnonymously(auth)}
                                                className="ListService-Item">
                                                <PersonOutlineSharpIcon
                                                    sx={{ fontSize: 30}}
                                                    color='primary'
                                                />
                                            </li>
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
