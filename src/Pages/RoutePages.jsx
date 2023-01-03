import '../assets/Styled/App.scss';
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import React, {useEffect} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import {privetRoutes,publicRoutes} from "../Route";
import {useAuth} from "../hooks/useAuth";
import SingUp from "../Pages/LoginPage/Enter/SingUp";
import SingIn from "../Pages/LoginPage/Enter/SingIn";
import { getAuth } from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";
import {CircularProgress, LinearProgress} from "@mui/material";


export const inAccount = localStorage.getItem('inAccount')
function RoutePages() {
    const nav = useNavigate();
    const auth = getAuth();
    const [user,loading] = useAuthState(auth);
    useEffect(() => {
        if(user){
            window.scrollTo(0,0)
            nav('/react-movie')
        }else {
            nav('/loginPage')
        }
    },[user])
    return (
        loading ?
            <>
                <LinearProgress />
                <LinearProgress />
            </>
            :
            <div className="App">
                <div className="WrappApp">
                    { user  ?
                        <>
                            <Header/>
                            <Routes>
                                {
                                    privetRoutes.map(({path, element}) =>
                                        <Route key={path} path={path} element={element}/>)
                                }

                            </Routes>
                        </>
                        :
                        <>
                            <Routes>
                                {
                                    publicRoutes.map(({path, element}) =>
                                        <Route key={path} path={path} element={element}>
                                            <Route path={'singin'} element={<SingUp/>}/>
                                            <Route path={'login'} element={<SingIn/>}/>
                                        </Route>)
                                }
                            </Routes>
                        </>
                    }
                    <Footer/>
                </div>
            </div>
    );
}

export default RoutePages;
