import React from 'react';

export const reducerList = { todo: [
    {
        item: 'Clean the Office',
        complete: false,
        id: 1
    },
    {
        item: 'Get a Haircut',
        complete: false,
        id: 2
    },
    {
        item: 'Play with the Dog',
        complete: false,
        id: 3
    },
    {
        item: 'Beat Ocarina of Time',
        complete: false,
        id: 4
    },
    {
        item: 'Play the Guitar',
        complete: false,
        id: 5
    }
]}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
        return {
            ...state,
            todo: [...state.todo, {
                what:action.payload,
                id: Date.now(),
                complete: false
            }
        ]
    }
        default:
        return state;
    }
};