import { createStore,  combineReducers } from "redux";
import authorReducer from "./reducers/authors.reducer";

const reducers = {
    authors: authorReducer,
}

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer);

export default store;
