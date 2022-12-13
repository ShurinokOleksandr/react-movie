import React, {useState} from 'react';

const Form = ({title,handleClick}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    return (
        <div className={"WrapForms"}>
            <input
                placeholder={"Введи пожалуйста свою почту :)"}
                className={"Field"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                placeholder={"Введи пожалуйста свой пароль :)"}
                className={"Field"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
            />
            <button
                className={'Send'}
                onClick={() => handleClick(email, password)}
            >
                {title}
            </button>
        </div>
    );
};

export default Form;