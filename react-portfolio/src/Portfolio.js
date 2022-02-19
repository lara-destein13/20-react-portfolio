import autoBind from 'auto-bind';
import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
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
            <div className="Portfolio">Portfolio</div>
        );
    }
}

export default Portfolio;