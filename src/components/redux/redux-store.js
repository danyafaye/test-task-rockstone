import {combineReducers, createStore } from "redux"
import varsReducer from './vars-reducer';

let reducers = combineReducers(
    {
        vars: varsReducer
    }
)

const store = createStore(reducers)

export default store;