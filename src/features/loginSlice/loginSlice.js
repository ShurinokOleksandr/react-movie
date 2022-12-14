import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    email : null,
    id : null,
    token : null,
    isCheck:false,
}

const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        addItem(state, action){
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.token = action.payload.token;
        },
        addCheck(state,action){
            state.isCheck = action.payload.isCheck;
        },

    }
})
export  const {addItem,addCheck} = loginSlice.actions;

export default loginSlice.reducer;