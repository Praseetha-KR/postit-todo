import React from 'react';
import FilterLink from '../containers/FilterLink';

const Filter = () => (
    <div className="todo__filter">
        <FilterLink filter="SHOW_ALL">
            <svg className="todo__filter__icon--all" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" aria-labelledby="title">
                <title id="title">All</title>
                <path d="M12,0H2C0.895,0,0,0.895,0,2v10c0,1.104,0.895,2,2,2h10c1.105,0,2-0.896,2-2V2C14,0.895,13.105,0,12,0z    M12,12H2V2h10V12z"/>
                <path d="M30,0H20c-1.105,0-2,0.895-2,2v10c0,1.104,0.895,2,2,2h10c1.104,0,2-0.896,2-2V2C32,0.895,31.104,0,30,0z    M30,12H20V2h10V12z"/>
                <path d="M30,18H20c-1.105,0-2,0.896-2,2v10c0,1.105,0.895,2,2,2h10c1.104,0,2-0.895,2-2V20   C32,18.895,31.104,18,30,18z M30,30l-10,0V20h10V30z"/>
                <path d="M12,18H2c-1.105,0-2,0.896-2,2v10c0,1.105,0.895,2,2,2h10c1.105,0,2-0.895,2-2V20   C14,18.895,13.105,18,12,18z M12,30L2,30V20h10V30z"/>
            </svg>
        </FilterLink>
        {" "}
        <FilterLink filter="SHOW_ACTIVE">
            <svg className="todo__filter__icon--unchecked" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" aria-labelledby="title">
                <title id="title">Un Checked</title>
                <path d="M30,0H2C0.895,0,0,0.895,0,2v28c0,1.105,0.895,2,2,2h28c1.104,0,2-0.895,2-2V2C32,0.895,31.104,0,30,0z    M30,30H2V2h28V30z"/>
            </svg>
        </FilterLink>
        {" "}
        <FilterLink filter="SHOW_COMPLETED">
            <svg className="todo__filter__icon--checked" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" aria-labelledby="title">
                <title id="title">Checked</title>
                <path d="M30,0H2C0.895,0,0,0.895,0,2v28c0,1.105,0.895,2,2,2h28c1.104,0,2-0.895,2-2V2C32,0.895,31.104,0,30,0z    M30,30H2V2h28V30z"/>
                <path d="M12.301,22.607c0.382,0.379,1.044,0.384,1.429,0l10.999-10.899c0.394-0.39,0.394-1.024,0-1.414   c-0.394-0.391-1.034-0.391-1.428,0L13.011,20.488l-4.281-4.196c-0.394-0.391-1.034-0.391-1.428,0c-0.395,0.391-0.395,1.024,0,1.414   L12.301,22.607z"/>
            </svg>
        </FilterLink>
    </div>
);

export default Filter;
