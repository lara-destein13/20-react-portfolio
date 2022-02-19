import autoBind from 'auto-bind';
import React, { Component } from 'react';
import './Resume.css';

class Resume extends Component {
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
            <div className="Resume">Resume</div>
        );
    }
}

export default Resume;