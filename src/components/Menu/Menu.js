/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Products</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Menu;