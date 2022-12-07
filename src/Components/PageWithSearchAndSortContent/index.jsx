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

console.log(location)
    return (
        <section className="Films">
            <HeaderPageWithSearch {...obj}/>
            <SectionFilterFilms/>
            {/*depending on the window.location*/}
            {location.pathname === '/films' ||'/anime' ||'/tv' ?
                <div>
                    <SectionWithFilm/>
                    <GenresFilms/>
                    <SectionWithFilm/>
                    <Actors/>
                </div>
                : <>
                    <ListOfFilms/>
                   </>
            }

        </section>
    );
};

export default Index;