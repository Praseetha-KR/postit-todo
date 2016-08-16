import React  from 'react';
import { render } from 'react-dom';

import Tm from './test';

render(
    <div className="myDiv">Hello Electron
        <Tm></Tm>
    </div>,
    document.getElementById('maincontainer')
);

