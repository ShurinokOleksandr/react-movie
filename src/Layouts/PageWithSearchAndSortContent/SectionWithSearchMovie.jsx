import React from 'react';
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
const SectionWithSearchMovie = () => {

    const [age, setAge] = React.useState('');
    const [ter, setTer] = React.useState('');
    const [value, setValue] = React.useState(Date());

    return (
        <div className="Films__Search">
            <div className="Films__Search-container">
                <div className="Films__content">
                    {/*Categories for searching films*/}
                    <div className="Films__content-parameters">
                        <FormControl className="Genres">
                            <InputLabel id="demo-simple-select-label">Жанры</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Жанры"
                                onChange={(event) => setAge(event.target.value)}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                disableFuture
                                label="Responsive"
                                openTo="year"
                                views={['year', 'month', 'day']}
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionWithSearchMovie;