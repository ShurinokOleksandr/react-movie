import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {addItem} from "../../../features/loginSlice/loginSlice";
import Form from "../../../Components/Login/Form";
import {inAccount} from "../../../App";
import {useAuth} from "../../../hooks/useAuth";

const SingUp = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const {isCheck} = useAuth()
    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(addItem({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                nav('/');
            })
            .catch(console.error)
        if(isCheck){
            localStorage.setItem('email',email)
            localStorage.setItem('password',password)
        }
    }

    return (
        <Form
            title="Зарегистрироваться"
            handleClick={handleRegister}
        />
    )
};

export default SingUp;