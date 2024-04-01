

import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    imageDataURL:null
}


const imageSlice = createSlice({
    name:"image",
    initialState,
    reducers:{
        uploadImage:(state,action) => {
            state.imageDataURL=action.payload
        }
    }
})


export const {uploadImage} = imageSlice.actions
export default imageSlice.reducer