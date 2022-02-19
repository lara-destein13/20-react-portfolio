import autoBind from 'auto-bind';
import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
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
            <div className="Footer">Footer</div>
        );
    }
}

export default Footer;