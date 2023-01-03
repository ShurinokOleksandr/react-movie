import React from 'react';
import SectionFilterFilms from "./SectionFilterFilms/SectionFilterFilms";
import ResetFilterButton from "./SectionFilterFilms/ResetFilterButton";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from "@mui/icons-material/Close";
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
                        <div style={{display:'flex'}}>
                            <ResetFilterButton >
                                <SearchIcon  fontSize={"large"}/>
                                Поиск
                            </ResetFilterButton>
                            <ResetFilterButton>
                                <CloseIcon className="Reset__Filter-img"/>
                                Сбросить фильтры<
                            /ResetFilterButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionWithSearchFilms;