import React from 'react';

import SortCategory from "./SortCategory";
import SortCategoryByDate from "./SortCategoryByDate";

const SectionFilterFilms = () => {

    return (
        <div className="Films__content-parameters">
            <SortCategoryByDate/>
            <SortCategory/>
        </div>
    );
};

export default SectionFilterFilms;