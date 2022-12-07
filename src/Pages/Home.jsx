import React from 'react';
import {logout} from "../assets/img";

const Home = () => {
    return (
        <section className="Home">
            <div className="Home__Container">
                <div className="Home__Container-content">
                    <div className="Home__Navbar">
                        <div className="Home__Navbar-content">
                            <div className="Navigation">
                                <div className="Navigation__Title">
                                    <p>Домашняя страница</p>
                                </div>
                                <ul className="Navigation__List">
                                    <li className="Navigation__List-Item">Понравившиеся</li>
                                    <li className="Navigation__List-Item">Непонравившиеся</li>
                                    <li className="Navigation__List-Item">Смотреть позже</li>
                                </ul>
                            </div>
                            <div className="Logout">
                                <a href="">Выйти</a>
                                <img src={logout} alt="logout"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;