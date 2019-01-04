import React, { Component } from 'react';


const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">
                NavBar
                <span className="badge badge-pill badge-secondary m-2">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
};

export default NavBar;