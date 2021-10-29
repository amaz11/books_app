import { combineReducers } from "redux";
import { getReducer } from "./getReducer";
import { initialForms } from "./forms";
import { createForms } from "react-redux-form";

const rootReducer = combineReducers({
    getReducer,
    ...createForms({
        books: initialForms})
})

export default rootReducer