import React from 'react';
import Slider from "../Components/Swiper";
import SectionGetPremium from "../Components/SectionGetPremium";
import SectionWithFilm from "../Components/SectionWithFilm";
import {requestsMovies, requestsTV} from "../Requests";

const Main = () => {
    return (
        <>
            <Slider/>
            <SectionGetPremium/>
            <SectionWithFilm text ={'Рекомендуемо к просмотру'} fetchURL={requestsMovies.requestRated}/>
            <SectionWithFilm text ={'Скоро в прокате'} fetchURL={requestsMovies.requestUpcoming}/>
            <SectionWithFilm text ={'Популярные Фильмы'} fetchURL={requestsMovies.requestPopular}/>
            <SectionWithFilm text ={'Сериалы на лету'} fetchURL={requestsTV.requestAir}/>
            <SectionWithFilm text ={'Популярные Сериалы'} fetchURL={requestsTV.requestPopular}/>
            <SectionWithFilm text ={'Сериалы на сегодня'} fetchURL={requestsTV.requestToday}/>
        </>
    );
};

export default Main;