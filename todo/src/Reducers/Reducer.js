import React from 'react';

export const reducerList = [
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
    }
]

export const reducer = (state, action) => {
    switch (action.type) {
      case 'Reducer_Fnc':
        return {}
      default:
        return state;
    }
};