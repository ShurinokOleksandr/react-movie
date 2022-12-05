import React from 'react';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {TextField} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers";

const SortCategoryByDate = () => {
    const [data, setData] = React.useState(Date());

    return (
        <LocalizationProvider  dateAdapter={AdapterDayjs}>
            <DatePicker
                className={'Genres'}
                disableFuture
                openTo="year"
                views={['year', 'month', 'day']}
                value={data}
                onChange={(newValue) => {
                    setData(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
};

export default SortCategoryByDate;