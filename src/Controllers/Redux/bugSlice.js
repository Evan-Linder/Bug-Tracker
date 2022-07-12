import {createSlice} from '@reduxis/toolkit'
import{retrieveBugs} from '../bugController'
//creates the inital slice.
const slice = createSlice({
    name: "bug",
    initialState:[],
    reducers:{
        //anything returned will set the state.
        getBugs: state => retrieveBugs(),

        createBugs:(state,actions)=>{

        },
        updateBugs:(state,actions)=>{

        },

        markComplete:(state,action)=>{

        }
    }
})
//exports the slice and the const's to the user slice.
export default slice.reducer;
export const {getBugs,createBugs,updateBugs,markComplete} = slice.actions