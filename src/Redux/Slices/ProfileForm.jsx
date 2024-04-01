import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    image:"",
    FirstName:"",
    LastName:"",
    Email:"",
    Mobile:"",
    Address:"",
    City:"",
    State:"",
    Country:"",
    PostalCode:"",
    Objective:""
}


export const ProfileForm = createSlice({
    name:"ProfileForm",
    initialState,
    reducers:{
        setImage:(state,action)=>{
            state.image=action.payload
        },
        setFirstName:(state,action)=>{
            state.FirstName=action.payload
        },
        setLastName:(state,action)=>{
            state.LastName=action.payload
        },
        setEmail:(state,action)=>{
            state.Email=action.payload
        },
        setMobile:(state,action)=>{
            state.Mobile=action.payload
        },
        setAddress:(state,action)=>{
            state.Address=action.payload
        },
        setCity:(state,action)=>{
            state.City=action.payload
        },
        setState:(state,action)=>{
            state.State=action.payload
        },
        setCountry:(state,action)=>{
            state.Country=action.payload
        },
        setPostalCode:(state,action)=>{
            state.PostalCode=action.payload
        },
        setObjective:(state,action)=>{
            state.Objective=action.payload
        },
    }
})


export const {setImage,setFirstName,setLastName,setEmail,setMobile,setAddress,setCity,setState,setPostalCode,setCountry,setObjective} = ProfileForm.actions
export default ProfileForm.reducer