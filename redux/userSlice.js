import { createSlice } from "@reduxjs/toolkit";

const userSlice =createSlice ({
    name:"user",
    initialState:{
        loggedInUser:null,
    },
    reducers:{
        addLoggedInUser :(state,actions) =>{
            state.loggedInUser = actions.payload;
        },
        removeLoggedInUser: (state, actions) =>{
            state.loggedInUser= null;
        }
    }
})


export default userSlice.reducer;
export const  {addLoggedInUser,removeLoggedInUser} = userSlice.actions;