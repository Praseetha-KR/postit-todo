import React, { PropTypes } from 'react';

const Todo = ({ onClick, onDelete, completed, text }) => (
    <div className="todo__list__item">
        <label style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}>
            <input onChange={onClick} checked={ completed } type="checkbox" /> {text}
        </label>
        <span onClick={onDelete} className="todo__list__item__delete">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" aria-labelledby="title">
                <title id="title">Delete</title>
                <g>
                    <polyline fill="none" points="649,137.999 675,137.999 675,155.999 661,155.999" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                    <polyline fill="none" points="653,155.999 649,155.999 649,141.999" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                    <polyline fill="none" points="661,156 653,162 653,156" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
                </g>
                <g>
                    <path d="M28,6h-6.382l-1.724-3.447C19.725,2.214,19.379,2,19,2h-6c-0.379,0-0.725,0.214-0.895,0.553L10.382,6H4   C3.448,6,3,6.448,3,7s0.448,1,1,1h20v20H8V11c0-0.552-0.448-1-1-1s-1,0.448-1,1v18c0,0.553,0.448,1,1,1h18c0.553,0,1-0.447,1-1V8h2   c0.553,0,1-0.448,1-1S28.553,6,28,6z M13.618,4h4.764l1,2h-6.764L13.618,4z"/>
                    <path d="M14,24V14c0-0.552-0.448-1-1-1s-1,0.448-1,1v10c0,0.553,0.448,1,1,1S14,24.553,14,24z"/>
                    <path d="M20,24V14c0-0.552-0.447-1-1-1s-1,0.448-1,1v10c0,0.553,0.447,1,1,1S20,24.553,20,24z"/>
                </g>
            </svg>
        </span>
    </div>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;
