import React from 'react';
import HeaderPageWithSearch from "./HeaderPageWithSearch";
import SectionWithFilm from "../SectionWithFilm";
import SectionFilterFilms from "./SectionFilterFilms";
import GenresFilms from "./SectionFilterFilms/GenresFilms";
import Actors from "./SectionWithActors";
import {useLocation} from "react-router-dom";
import ListOfFilms from "./ListOfFilms";

const Index = ({obj}) => {

    const location = useLocation()
    return (
        <section className="Films">
            <HeaderPageWithSearch {...obj}/>
            <SectionFilterFilms/>
            {/*depending on the window.location*/}
            {location.pathname !== 'films' ||'anime' ||'tv' ?
                <div>
                    <SectionWithFilm text ={'Рекомендуемо к просмотру'} fetchURL={obj.url.requestRated}/>
                    <GenresFilms/>
                    <SectionWithFilm text ={'Ужасы'} fetchURL={obj.url.requestHorror}/>
                    <Actors/>
                    <SectionWithFilm text ={'Популярные Фильмы  '} fetchURL={obj.url.requestPopular}/>
                </div>
                : <>
                    <ListOfFilms/>
                   </>
            }
        </section>
    );
};

export default Index;