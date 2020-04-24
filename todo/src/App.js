import React, { useState, useReducer } from 'react';
import TodoForm from './components/TodoForm'
import './App.css'
import TodoExecutor from './components/TodoExecutor';
import { reducerList, reducer } from './Reducers/Reducer';
import styled from 'styled-components';


const Header = styled.h1`
border: solid;
background-color: lightgrey;
margin 3%;
font-size: 1.4rem;
font-family: helvetica;
height: 100%;
`


function App () {

  const [state, dispatch] = useReducer(reducer, reducerList);
  const [taskInput, setTaskInput] = useState('')

  const inputChange = event =>{
    event.preventDefault();
    setTaskInput(event.target.value)
}

  const taskSubmit = event =>{
    event.preventDefault();
    dispatch({type:"ADD_TASK", payload:taskInput})
} 

  const toggleItem = item => {
  dispatch({type:"TOGGLE_IT", payload:item})
}

  const clearCompleted = event =>{
    event.preventDefault();
    dispatch({type:"CLEAR_ALL"})
}

    return (
      <div className="App">
       <Header className="header">
         <h1>Josh Shaw's To Do List</h1>
         <TodoForm
         info={state}
         taskSubmit={taskSubmit}
         clearCompleted={clearCompleted}
         inputChange={inputChange}
         />
         </Header>
         <TodoExecutor info={state} toggleItem={toggleItem}/>
      </div>
    )
  };

export default App;