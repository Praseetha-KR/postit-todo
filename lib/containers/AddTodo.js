import React from 'react';
import { connect } from 'react-redux';
import { addTodo, createTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div className="todo__add">
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                // dispatch(addTodo(input.value));
                dispatch(createTodo(input.value));
                input.value = '';
            }}>
                <input
                    ref={node => {
                        input = node;
                    }}
                    className="todo__add__input"
                />
            </form>
        </div>
    );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
