import { applyMiddleware, combineReducers, createStore } from "redux";

import counterReducer from "./reducer/counterRedux";
import employeeReducer from "./reducer/employeeReducer";
import thunk from "redux-thunk";

export const configureStore = () => {

    const reducers = combineReducers({
        counterReducer: counterReducer,
        employeeReducer: employeeReducer
    });

    const middleware = [
        thunk
    ];

    return createStore(reducers, applyMiddleware(...middleware));
}