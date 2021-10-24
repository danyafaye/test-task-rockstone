import {combineReducers, createStore } from "redux"
import varsReducer from './vars-reducer';

let reducers = combineReducers(
    {
        varsR: varsReducer
    }
)

const store = createStore(reducers)

export default store;