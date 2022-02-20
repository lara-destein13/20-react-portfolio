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
            <div className="ContactMe">
                <form className="Form">
                    <label for="name">Enter full name:</label>
                    <input type="text" className="text-input" />
                    <label for="email">Enter email address:</label>
                    <input type="email" className="email-input" />
                    <label for="message">Message:</label>
                    <textarea type="textarea" className="message-input"></textarea>
                    <input type="submit" value="Submit"/>
                </form>              
            </div>
        );
    }
}

export default ContactMe;