import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name:'user',
    initialState:{
        email: '',
        isLoggedIn: false,
    },
    reducers: {
        addUserData: (state,action) =>{
            state.email = action.payload
        },
        login: (state) =>{
            state.isLoggedIn = true
        },
        logout: (state) =>{
            state.isLoggedIn = false
        },
    }
})
export const {addUserData, login,logout} = UserSlice.actions
export default UserSlice.reducer