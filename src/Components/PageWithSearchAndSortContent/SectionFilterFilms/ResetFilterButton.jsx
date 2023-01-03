import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
const ResetFilterButton = ({children}) => {

    return (

        <button className="Reset__Filter">
            <p>
                {children}
            </p>
        </button>
    );
};

export default ResetFilterButton;