import React, { PropTypes } from 'react';

const Link = ({ active, children, onClick }) => {
    if (active) {
        return <span className="todo__filter__item todo__filter__item--active">{children}</span>;
    }

    return (
        <a href="#"
            className="todo__filter__item"
            onClick={e => {
                e.preventDefault();
                onClick();
            }}
            >
                {children}
        </a>
    );
};

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link;
