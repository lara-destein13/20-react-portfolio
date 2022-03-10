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
                <h2 className="contact-me-header">Contact Me</h2> 
                <div className="contact-info">
                    Phone: (925) 819-1194<br></br>
                    Email: laradestein13@gmail.com
                </div>
                <form className="Form">
                    <label for="name" className="label">Enter full name:</label>
                    <input type="text" className="text-input" />
                    <label for="email" className="label">Enter email address:</label>
                    <input type="email" className="email-input" />
                    <label for="message" className="label">Message:</label>
                    <textarea type="textarea" className="message-input"></textarea>
                    <button type="submit"className="message-submit">Submit</button>
                </form>              
            </div>   
        );
    }        
}    

export default ContactMe;