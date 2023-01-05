import React from 'react';
import PageWithSearchAndSortContent from "../Components/PageWithSearchAndSortContent";
import {requestsMovies} from "../Requests/Requests";

const Films = () => {
    const obj = {
        url:requestsMovies,
        title:'Фильмы',
        page:'Вы любите смотреть фильмы онлайн и проводите много времени,' +
            ' прочесывая сайты в поисках чего-нибудь ' +
            'интересного? Стоит задержаться на ivi.ru – ' +
            'фильмов, которые собраны у нас, вам хватит ' +
            'надолго. Коллекция постоянно пополняется как' +
            ' новыми фильмами, так и признанными шедеврами прошлых лет! Независимо от того, кто вы – любитель энергичных боевиков или поклонница молодежных сериалов, изобилие нашего каталога заставит вас забыть обо всех других способах проведения досуга, и вы будете пересматривать любимые фильмы онлайн снова и снова!'
    }
    return (
        <PageWithSearchAndSortContent obj={obj}/>
    );
};

export default Films;