import { combineReducers } from "redux";
import { createProductReducer } from "./createProductReducer";


export const rootReducer = combineReducers({
    products: createProductReducer
})