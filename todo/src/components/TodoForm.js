import React, { useReducer, useState } from 'react';
import { reducerList, reducer } from '../Reducers/Reducer';

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            item: ''
        };
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    submitItem = e => {
        e.preventDefault();
        this.setState({item: ''});
        this.props.addItem(e, this.state.item);
    };
    render(){
        return(
            <div>
                <form onSubmit={this.submitItem}>
                    <input
                    type="text"
                    value={this.props.taskInput}
                    placeholder="The task at hand is.."
                    name="taskInput"
                    onChange={this.props.inputChange}/>
                    <button onClick={event => {this.props.taskSubmit(event)}}>Add new Todo</button>
                    <button onClick={event => {this.props.clearCompleted(event)}}>Clear Completed Tasks</button>
                </form>
            </div>
        )
    }
}

export default TodoForm 