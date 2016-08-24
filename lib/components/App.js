import React from 'react';
import Filter from './Filter';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import electron, { ipcRenderer } from 'electron';

const App = () => (
    <div className="todo">
        <div className="todo__header">
            <AddTodo />
            <Filter />
        </div>
        <VisibleTodoList />
        <div className="todo__quit" onClick={() => ipcRenderer.send('quit')}>
            <svg className="todo__quit__icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" aria-labelledby="title">
                <title id="title">Quit</title>
                <g id="Group" transform="translate(-240.000000, -144.000000)">
                    <path d="M248,158 C250.761424,158 253,155.761424 253,153 C253,151.364186 252.214451,149.911848 251,148.999634 L251,146.673631 C253.364945,147.797092 255,150.207602 255,153 C255,156.865993 251.865993,160 248,160 C244.134007,160 241,156.865993 241,153 C241,150.207602 242.635055,147.797092 245,146.673631 L245,148.999634 C243.785549,149.911848 243,151.364186 243,153 C243,155.761424 245.238576,158 248,158 Z M248,153 C247.443865,153 247,152.553614 247,152.00297 L247,145.99703 C247,145.453036 247.447715,145 248,145 C248.556135,145 249,145.446386 249,145.99703 L249,152.00297 C249,152.546964 248.552285,153 248,153 Z M248,153" id="Oval 188"/>
                </g>
            </svg>
        </div>
    </div>
);

export default App;
