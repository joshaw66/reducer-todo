import React,{useState,useReducer} from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'
import {userList, reducer} from './Reducers/reducers'
import styled from 'styled-components';

const Header = styled.div`
background-color: lightblue;
padding: 2%;
font-family: Helvetica;
border-radius: 10px;
`

const Full = styled.body`
background-color: lightgrey;
padding-bottom: 20%;
`

function App () {
  const [state, dispatch] = useReducer(reducer, userList);
  console.log("useReducer=state",state)
  console.log("useReducer=dispatch",dispatch)
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
      <Full>
      <div className="App">
       <Header className="header">
         <h1>Josh's To Do List</h1>
         <TodoForm  
         taskSubmit={taskSubmit}
         clearCompleted={clearCompleted}
         inputChange={inputChange}
         />
         </Header>
         <TodoList 
         info={state}
         toggleItem={toggleItem}
         />
          </div>
          </Full>
    )

    }

export default App;