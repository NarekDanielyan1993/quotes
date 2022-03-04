import { combineReducers } from "redux";
import quotesReducer from "./quote/slice";

const allReducers = combineReducers({
    quotesData: quotesReducer
})

export default allReducers;