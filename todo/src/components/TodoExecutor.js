import React, { useReducer } from 'react'
import Todo from './TodoProps'
import {initialList, reducer} from '../reducers/reducers'

const TodoExecutor = props => {
    const [state, dispatch] = useReducer(reducer, initialList)

    console.log(state)
    return (
        <div className="todo-list">
            {state.map(item => (
                <Todo 
                key={item.id} item={item} 
                toggleItem={props.toggleItem} 

                />
            ))}
            <button className='clear-btn' onClick={props.clearFinished}>Clear ToDo-List</button>
        </div>
    )
};

export default TodoExecutor 