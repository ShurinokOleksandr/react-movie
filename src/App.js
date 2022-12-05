import './assets/Styled/App.scss';
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import React from "react";
import {createBrowserRouter, Outlet, Route, RouterProvider, Routes,} from "react-router-dom";
import Main from "./Pages/Main";
import Films from "./Pages/Films";
import TV from "./Pages/TV";
import Anime from "./Pages/Anime";
import Home from "./Pages/Home";
import Watch from "./Pages/Watch";

function App() {
    return (
        <div className="App">
                <Header/>
                <Routes>
                    <Route path={'/react-movie'} element={<Main/> }/>
                    <Route path={'films'} element={<Films/> } />
                    <Route path={'tv'} element={<TV/> } />
                    <Route path={'anime'} element={<Anime/> } />
                    <Route path={'home'} element={<Home/> } />
                    <Route path={'watch/:id'} element={<Watch/> } />
                </Routes>
                <Footer/>
        </div>
    );
}

export default App;
