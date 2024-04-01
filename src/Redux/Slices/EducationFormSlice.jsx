
import {createSlice} from "@reduxjs/toolkit"


const initialState ={
    educationSection :[]
}

const EducationSlice = createSlice({
    name:"EducationSlice",
    initialState,
    reducers:{
        addEducation: (state,action)=>{
            state.educationSection.push(action.payload)
        },
        deleteEducation: (state,action)=>{
            state.educationSection.splice(action.payload,1)
        }
    }
})

export const {addEducation,deleteEducation} = EducationSlice.actions
export default EducationSlice.reducer 