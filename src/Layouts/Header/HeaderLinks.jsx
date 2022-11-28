import React from 'react';

const HeaderLinks = () => {
    return (
        <ul className="Header__Categories Categories">
            <li><a href="#" className="link activeLink">Главная</a></li>
            <li><a href="#" className="link">Фильмы</a></li>
            <li><a href="#" className="link">TV</a></li>
            <li><a href="#" className="link">Аниме</a></li>
            <li><a href="#" className="link">Домашняя</a></li>
        </ul>
    );
};

export default HeaderLinks;