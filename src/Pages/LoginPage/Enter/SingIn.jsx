import React from 'react';
import Form from "../../../Components/Login/Form";
import {useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {addItem} from "../../../features/loginSlice/loginSlice";
import {useAuth} from "../../../hooks/useAuth";

const SingIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isCheck} = useAuth()
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(addItem({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/react-movie');
            })
            .catch(() => alert('Invalid user!'))
        if(isCheck){
            localStorage.setItem('email',email)
            localStorage.setItem('password',password)
        }
    }


    return (
        <Form
            title="Войти"
            handleClick={handleLogin}
        />
    )
};

export default SingIn;