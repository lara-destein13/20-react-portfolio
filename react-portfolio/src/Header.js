import autoBind from 'auto-bind';
import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    // constructor
    constructor(props) {
        super(props);
        autoBind(this);
        
        this.state = {
        }
    }

    // render
    render() {
        return (
            <div className="Header">Header</div>
        );
    }
}

export default Header;