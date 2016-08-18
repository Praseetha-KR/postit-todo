import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, text }) => (
    <div className="todo__list__item">
        <label style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}>
            <input onChange={onClick} checked={ completed } type="checkbox" /> {text}
        </label>
    </div>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;
