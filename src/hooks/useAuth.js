import {useSelector} from "react-redux";

export function useAuth(){
    const {email,id,token,isCheck} = useSelector(state => state.login);

    return {
        isAuth:!!email,
        token,
        id,
        email,
        check : !!isCheck,
    }
}
