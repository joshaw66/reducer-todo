import React from 'react';
import styled from 'styled-components';

const AddButton = styled.button`
margin: 2%;
`

const Container = styled.div`
background-color: lightblue;
height: 50%;
`

const TodoForm = props => {
    
    return(
        <Container>
            <form>
            <input type="text"
            value={props.taskInput}
            name="taskInput"
            onChange={props.inputChange}
            />
            <AddButton onClick={event=> {props.taskSubmit(event)}}>Add Todo Task</AddButton>
            <button onClick={event=> {props.clearCompleted(event)}}>Clear Completed Tasks</button>
            </form>
        </Container>

    )
}

export default TodoForm