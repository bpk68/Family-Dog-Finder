import React from 'react';


export const StateContext = React.createContext(null);
export const DispatchContext = React.createContext(null);

export const actions = {
    BREEDS: {
        GET: 'get breeds',
        GET_SUCCESS: 'get breeds success',
        GET_ERROR: 'get breeds error'
    },
    ANSWERS: {
        UPDATE: 'update answers'
    }
};

export const createAction = (type, payload) => {
    return { type, payload };
};

export const reducer = (state, action) => {
    const payload = action.payload;

    switch (action.type) {
        case actions.BREEDS.GET:
            return {
                ...state,
                breeds: {
                    ...state.breeds,
                    isLoading: true
                }
            };
        case actions.BREEDS.GET_SUCCESS:
            return {
                ...state,
                breeds: {
                    isLoading: false,
                    isLoaded: true,
                    list: payload
                }
            };
        case actions.ANSWERS.UPDATE:
            return {
                ...state,
                answers: {
                    ...state.answers,
                    [payload.name]: payload.value
                }
            };
        default:
            return state;
    }
};