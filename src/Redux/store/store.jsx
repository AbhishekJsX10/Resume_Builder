

import {configureStore} from "@reduxjs/toolkit"
import ProfileFormReducer from "../Slices/ProfileForm"
import ImageReducer from "../Slices/ImageSlice"
import WorkExpReducer from "../Slices/WorkExpSlice"
import EducationReducer from "../Slices/EducationFormSlice"
import SkillReducer from "../Slices/SkillsFromSlice"

export const store = configureStore({
    reducer:{
        ProfileForm:ProfileFormReducer,
        image:ImageReducer,
        WorkExp:WorkExpReducer,
        EducationForm:EducationReducer,
        SkillForm:SkillReducer,
    }
})