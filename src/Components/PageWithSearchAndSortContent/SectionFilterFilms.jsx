import React from 'react';
import SectionFilterFilms from "./SectionFilterFilms/SectionFilterFilms";
import ResetFilterButton from "./SectionFilterFilms/ResetFilterButton";
const SectionWithSearchFilms = () => {

    return (
        <>
            <h1 style={{marginBottom:`30px`,color:`Yellow`}}>
                Поиск Фильмов
            </h1>
            <div className="Films__Search">
                <div className="Films__Search-container">
                    <div className="Films__content">
                        {/*Categories for searching films*/}
                        <SectionFilterFilms />
                        <ResetFilterButton/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionWithSearchFilms;