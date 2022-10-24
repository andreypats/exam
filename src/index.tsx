// import React from 'react';
import './index.css';

import {combineReducers, createStore} from 'redux'

let initialState = {items: [{name: 'Dimych'}, {name: 'Ignat'}]}
const usersReducer = (state = initialState, action: any) => {
    return state
}

const store = createStore(combineReducers({
    users: usersReducer
}))

store.subscribe(() => {
    const state = initialState
    console.log(state)
})

store.dispatch({type: 'ANY'})

//Что нужно написать вместо XXX, чтобы получить актуальный стейт?
// initialState  -----
// initialState.items  -----


































