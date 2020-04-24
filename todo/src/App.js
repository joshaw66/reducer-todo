import React, { useState, useReducer } from 'react';
import TodoForm from './components/TodoForm'
import './App.css'
import TodoExecutor from './components/TodoExecutor';
import { reducerList, reducer } from './Reducers/Reducer';


function App () {

  const [state, dispatch] = useReducer(reducer, reducerList);
  const [taskInput, setTaskInput] = useState('')

  const taskSubmit = event =>{
    event.preventDefault();
    dispatch({type:"ADD_TASK", payload:taskInput})
}   

const clearCompleted = event =>{
    event.preventDefault();
    dispatch({type:"CLEAR_COMPLETED"})
}

const inputChange = event =>{
    event.preventDefault();
    setTaskInput(event.target.value)
}

    return (
      <div className="App">
       <div className="header">
         <h1>Josh Shaw's To Do List</h1>
         <TodoForm
         info={state}
         taskSubmit={taskSubmit}
         clearCompleted={clearCompleted}
         inputChange={inputChange}
         />
         </div>
         <TodoExecutor info={state}/>
      </div>
    )
  };

export default App;