import {createSlice} from '@reduxis/toolkit'
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory'

const slice = createSlice({
    name:"auth",
    
//this calls to lock both admin and loggin in to false
initialState:{
    admin:false,
    LoggedIn:false,
},
reducers:{
    //have to include the action because information is passing.
    sigIn:(state,action)=>{
const {name,password}= action.pay;
state.LoggedI = true;
state.admin= true;
    },
//no information is passing therefore do not need action.
    signOut:(state)=>{
        state.LogginIn = false;
        state.admin = false;
    },
    createUser:(state,action)=>{
    
    },
}
})

export default slice.reducer;

export const{signIn,signout,createUser} = slice.actions;