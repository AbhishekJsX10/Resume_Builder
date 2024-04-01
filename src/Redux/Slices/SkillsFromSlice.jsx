

import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    skillSection:[]
}

const skillSlice = createSlice({
    name:"skillSlice",
    initialState,
    reducers:{
        addSkill: (state, action) => {
            state.skillSection = [...state.skillSection, action.payload];
        },
        deleteSkill: (state, action) => {
            state.skillSection = state.skillSection.filter((val, index) => index !== action.payload);
        }
    }
})

export const {addSkill,deleteSkill} =skillSlice.actions
export default skillSlice.reducer