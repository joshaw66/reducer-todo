import React from 'react';
import TodoForm from './components/TodoForm'
import './App.css'
import TodoExecutor from './components/TodoExecutor';


function App () {
    return (
      <div className="App">
       <div className="header">
         <h1>Josh Shaw's To Do List</h1>
         <TodoForm/>
         </div>
         <TodoExecutor/>
      </div>
    )
  };

export default App;