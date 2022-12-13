import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    email : null,
    id : null,
    token : null,
    isCheck:null,
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
        removeItem(state){
            state.email = null
            state.id = null
            state.token = null
            state.isCheck = null;
        },
    }
})
export  const {addItem,addCheck,removeItem} = loginSlice.actions;

export default loginSlice.reducer;