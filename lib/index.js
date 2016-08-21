import React from 'react';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import todoApp from './reducers';
import { query } from './actions';
import App from './components/App';

const loggerMiddleware = createLogger();

let store = createStore(
    todoApp,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )
);

store.dispatch(query());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('maincontainer')
);

// import Tm from './test';
// render(
//     <div className="myDiv">Hello Electron
//         <Tm></Tm>hi
//     </div>,
//     document.getElementById('maincontainer')
// );
