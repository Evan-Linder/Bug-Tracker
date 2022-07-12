import{createSlice} from '@reduxis/toolkit'

const slice= createSlice({
    name: "user",
    initialState:[{}],
    reducers:{
        getUser:(state) =>{
            state.push({name:"Evan Linder"})
            state.push({name:"Caleb Wittrock"})
        }
    }
})
//exports all the information to default.
export default slice.reducer;
export const {getUser}= slice.actions;