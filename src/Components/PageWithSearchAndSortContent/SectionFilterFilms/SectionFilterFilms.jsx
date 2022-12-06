import React from 'react';

import SortCategory from "./SortCategory";
import SortCategoryByDate from "./SortCategoryByDate";

const SectionFilterFilms = () => {

    return (
        <div className="Films__content-parameters">
            {/*<div className="wrapper-sort">*/}
                <SortCategoryByDate/>
                <SortCategory/>
            {/*</div>*/}
        </div>
    );
};

export default SectionFilterFilms;