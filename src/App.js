import './assets/Styled/App.scss';
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import React, {useEffect} from "react";
import { Route, Routes, useNavigate} from "react-router-dom";
import {privetRoutes,publicRoutes} from "./Route";
import {useDispatch} from "react-redux";
import {useAuth} from "./hooks/useAuth";
import SingUp from "./Pages/LoginPage/Enter/SingUp";
import SingIn from "./Pages/LoginPage/Enter/SingIn";
import { getAuth } from "firebase/auth";


function App() {
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user)
    const nav = useNavigate()
    useEffect(() => {
        if(user){
            nav('/react-movie')
        }else {
            nav('/loginPage')
        }
    },[user])

    return (
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
                    <Routes>
                        {
                            publicRoutes.map(({path, element}) =>
                                <Route key={path} path={path} element={element}>
                                    <Route path={'singin'} element={<SingUp/>}/>
                                    <Route path={'login'} element={<SingIn/>}/>
                                </Route>)
                        }
                    </Routes>}
                <Footer/>
            </div>
        </div>
    );
}

export default App;
