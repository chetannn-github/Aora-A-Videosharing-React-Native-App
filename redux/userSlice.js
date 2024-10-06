import { createSlice } from "@reduxjs/toolkit";

const userSlice =createSlice ({
    name:"user",
    initialState:{
        loggedInUser:null,
    },
    reducers:{
        addLoggedInUser :(state,actions) =>{
            state.loggedInUser = actions.payload;
            console.log("guuguuu")
            console.log(state.loggedInUser);
        },
        removeLoggedInUser: (state, actions) =>{
            console.log("user Removed")
             console.log(state.loggedInUser);
             state.loggedInUser= null;
        }
    }
})


export default userSlice.reducer;
export const  {addLoggedInUser,removeLoggedInUser} = userSlice.actions;