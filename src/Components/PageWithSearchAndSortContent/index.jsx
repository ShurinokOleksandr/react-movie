import React from 'react';
import HeaderPageWithSearch from "./HeaderPageWithSearch";
import SectionWithFilm from "../SectionWithFilm";
import SectionFilterFilms from "./SectionFilterFilms";
import GenresFilms from "./SectionFilterFilms/GenresFilms";
import Actors from "./SectionWithActors";

const Index = ({obj}) => {




    return (
        <section className="Films">
            <HeaderPageWithSearch {...obj}/>
            <h1 style={{marginBottom:`30px`,color:`Yellow`}}>
                Поиск Фильмов
            </h1>
            <SectionFilterFilms/>
            <SectionWithFilm/>
            <GenresFilms/>
            <SectionWithFilm/>
            <Actors/>
        </section>
    );
};

export default Index;