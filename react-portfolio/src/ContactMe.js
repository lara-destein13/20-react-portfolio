import autoBind from 'auto-bind';
import React, { Component } from 'react';
import './ContactMe.css';

class ContactMe extends Component {
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
            <div className="ContacttMe">ContactMe</div>
        );
    }
}

export default ContactMe;