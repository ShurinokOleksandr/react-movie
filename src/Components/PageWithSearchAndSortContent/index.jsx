import React from 'react';
import HeaderPageWithSearch from "./HeaderPageWithSearch";
import SectionWithFilm from "../SectionWithFilm";
import SectionFilterFilms from "./SectionFilterFilms";
import GenresFilms from "./SectionFilterFilms/GenresFilms";
import Actors from "./SectionWithActors";
import {useLocation} from "react-router-dom";
import ListOfFilms from "./ListOfFilms";
import {requestsMovies} from "../../Requests";

const Index = ({obj}) => {

    const location = useLocation()
    return (
        <section className="Films">
            <HeaderPageWithSearch {...obj}/>
            <SectionFilterFilms/>
            {/*depending on the window.location*/}
            {location.pathname !== 'films' ||'anime' ||'tv' ?
                <div>
                    <SectionWithFilm text ={'Рекомендуемо к просмотру'} fetchURL={requestsMovies.requestRated}/>
                    <GenresFilms/>
                    <SectionWithFilm text ={'Скоро в прокате'} fetchURL={requestsMovies.requestUpcoming}/>
                    <Actors/>
                    <SectionWithFilm text ={'Популярные Фильмы'} fetchURL={requestsMovies.requestPopular}/>
                </div>
                : <>
                    <ListOfFilms/>
                   </>
            }
        </section>
    );
};

export default Index;