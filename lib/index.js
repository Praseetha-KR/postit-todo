import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';
import Tm from './test';

let store = createStore(todoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('maincontainer')
);

// render(
//     <div className="myDiv">Hello Electron
//         <Tm></Tm>
//     </div>,
//     document.getElementById('maincontainer')
// );
