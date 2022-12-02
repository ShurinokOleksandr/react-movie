import React from 'react';
import HeaderPageWithSearch from "./HeaderPageWithSearch";
import SectionWithSearchMovie from "./SectionWithSearchMovie";
import SectionWithFilm from "../../Components/SectionWithFilm";

const Index = ({obj}) => {




    return (
        <section className="Films">
            <HeaderPageWithSearch {...obj}/>
            <SectionWithSearchMovie/>
            <SectionWithFilm/>
            <SectionWithFilm/>
            <SectionWithFilm/>
        </section>
    );
};

export default Index;