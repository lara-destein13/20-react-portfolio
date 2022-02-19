import autoBind from 'auto-bind';
import React, { Component } from 'react';
import './AboutMe.css';

class AboutMe extends Component {
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
            <div className="AboutMe">AboutMe</div>
        )
    }
}

export default AboutMe;