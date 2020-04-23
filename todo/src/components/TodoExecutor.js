import React, { useReducer } from 'react'
import Todo from './TodoProps'
import {reducerList, reducer} from '../Reducers/Reducer'

const TodoExecutor = props => {
    const [state, dispatch] = useReducer(reducer, reducerList)

    console.log(state)
    return (
        <div className="todo-list">
            {state.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem}/>
            ))}
            <button className='clear-btn' onClick={props.clearFinished}>Clear Active Tasks</button>
        </div>
    )
};

export default TodoExecutor 