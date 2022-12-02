import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderLinks = () => {
    return (
        <ul className="Header__Categories Categories">
            <li>
                <NavLink to={"react-movie"} className={({ isActive }) => isActive ? 'link activeLink' : 'link'}>
                    Главная
                </NavLink>
            </li>
            <li>
                <NavLink to={"films"} className={({ isActive }) => isActive ? 'link activeLink' : 'link'}>
                    Фильмы
                </NavLink>
            </li>
            <li>
                <NavLink to={"tv"} className={({ isActive }) => isActive ? 'link activeLink' : 'link'}>
                    TV
                </NavLink>
            </li>
            <li>
                <NavLink to={"anime"} className={({ isActive }) => isActive ? 'link activeLink' : 'link'}>
                    Аниме
                </NavLink>
            </li>
            <li>
                <NavLink to="/home" className={({ isActive }) => isActive ? 'link activeLink' : 'link'}>
                    Домашняя
                </NavLink>
            </li>
        </ul>
    );
};

export default HeaderLinks;