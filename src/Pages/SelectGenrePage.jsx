import React from 'react';
import HeaderPageWithSearch from "../Components/PageWithSearchAndSortContent/HeaderPageWithSearch";
import SectionFilterFilms from "../Components/PageWithSearchAndSortContent/SectionFilterFilms";

const SelectGenrePage = () => {
    return (
        <>
            <HeaderPageWithSearch />
            <SectionFilterFilms/>
        </>
    );
};

export default SelectGenrePage;