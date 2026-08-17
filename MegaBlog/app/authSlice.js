import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: false,
        user: null,
    },
    reducers: {
        loginUser: (state, action) => {
            state.status = true;
            state.user = action.payload;
        },
        logoutUser: (state) => {
            state.status = false;
            state.user = null;
        },
    },
});

export const { loginUser,logoutUser } = authSlice.actions;

export default authSlice.reducer;