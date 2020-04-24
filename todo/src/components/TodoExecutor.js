import React from 'react';


const TodoExecutor = props => {
    
    return (
        <div className="todo-list">
            {props.info.todo.map(todo => {
                return (   
                    <div className={`todo${todo.complete ? "complete" : ""}`}>
                    <p>{todo.what}</p>
                    </div>  
                    )
                }
            )
        }
            <button>Clear Active Tasks</button>
        </div>
    )
};

export default TodoExecutor 