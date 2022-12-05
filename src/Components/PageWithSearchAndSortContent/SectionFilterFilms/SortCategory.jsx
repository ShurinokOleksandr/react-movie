import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const SortCategory = ({title,value,setValue,}) => {
    const [genres, setGenres] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [language, setLanguage] = React.useState('');
    const [sortBy, setSortBy] = React.useState('');
    const sortForm = [
        {
            title:'Жанр',
            value:genres,
            setValue:setGenres,
        },
        {
            title:'Страна',
            value:country,
            setValue:setCountry,
        },
        {
            title:'Язык',
            value:language,
            setValue:setLanguage,
        },
        {
            title:'Сортировать по:',
            value:sortBy,
            setValue:setSortBy,
        },
    ]
    const adf = [1,2,4,5,6]
    return (

        <>
            {sortForm.map((a ,index)=>
                <FormControl key={index} className="Genres">
                    <InputLabel id="demo-simple-select-label">{a.title}</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={a.value}
                        label="Страна"
                        onChange={(event) => a.setValue(event.target.value)}
                    >
                        <MenuItem value={'ukraine'}>Украина</MenuItem>
                        <MenuItem value={'usa'}>США</MenuItem>
                        <MenuItem value={'poland'}>Польша</MenuItem>
                    </Select>
                </FormControl>)}

        </>

    )
};

export default SortCategory;