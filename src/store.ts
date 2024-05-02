import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { jobReducer } from "./reducers/JobReducer";

const store = configureStore({
    reducer: combineReducers({
        jobs: jobReducer
    })
})

export default store;