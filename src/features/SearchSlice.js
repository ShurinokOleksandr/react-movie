import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {api_key} from "../Requests/Requests";


export const fetchSearchContent = createAsyncThunk('searchContent/fetchSearchContent',
    async ({mediaType,value}) => {
    console.log(mediaType)
        const {data} =  await axios.get(`https://api.themoviedb.org/3/search/${mediaType}?api_key=${api_key}&language=ru-RU&query=${value}&page=1&include_adult=false`)
        return data.results
    })
const initialState ={
    searchContent:[]
}
const searchContentSlice = createSlice({
    name:'searchContent',
    initialState,
    reducers:{
        removeContent(state){
            state.searchContent = []
        }
    },
    extraReducers : (builder) =>{
        builder
            .addCase(fetchSearchContent.fulfilled,(state,action) =>{
                    state.searchContent = action.payload
            })
    }
})
export const {removeContent} = searchContentSlice.actions
export default searchContentSlice.reducer