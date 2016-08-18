import React from 'react';
import Filter from './Filter';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
    <div className="todo">
        <div className="todo__header">
            <AddTodo />
            <Filter />
        </div>
        <VisibleTodoList />
    </div>
);

export default App;
