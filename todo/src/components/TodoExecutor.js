import React from 'react';


const TodoExecutor = props => {
    return (
        <div className="todo-list">
            {props.info.todo.map(todo => {
                return (   
                    <div 
                    key={todo.id}
                    onClick={()=>{props.toggleItem(todo.id)}}
                    className={`todo${todo.finished ? "finished" : ""}`}>
                <p >{todo.what}</p>
                </div>  
                    )
                }
            )
        }
        </div>
    )
};

export default TodoExecutor 