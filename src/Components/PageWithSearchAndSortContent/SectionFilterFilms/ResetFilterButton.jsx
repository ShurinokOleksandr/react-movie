import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
const ResetFilterButton = () => {

    return (

        <button className="Reset__Filter">
            <CloseIcon className="Reset__Filter-img"/>
            <p>
                Сбросить фильтр
            </p>
        </button>
    );
};

export default ResetFilterButton;