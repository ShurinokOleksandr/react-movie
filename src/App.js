import './assets/Styled/App.scss';
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import React from "react";
import {Route, Routes} from "react-router-dom";
import {privetRoutes,publicRoutes} from "./Route";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                {
                    privetRoutes.map(({path,element}) =>
                    <Route path={path} element={element} />
                    )
                }
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
