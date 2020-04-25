import React from 'react'
import styled from 'styled-components';

const AddButton = styled.button`
margin: 2%;
`

const MainForm = styled.form`
size: 2rem;
`

const TodoForm = props => {

        return(
            <div>
              <MainForm>
                <input type="text"
                value={props.taskInput}
                name="taskInput"
                onChange={props.inputChange}
                />
                <AddButton onClick={event=> {props.taskSubmit(event)}}>Add Task</AddButton>
                <button onClick={event=> {props.clearCompleted(event)}}>Clear Completed Tasks</button>
              </MainForm>
            </div>

        )
}

export default TodoForm