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
                    Email: laradestein13@gmail.com<br></br>
                    LinkedIn: <a href="https://www.linkedin.com/in/lara-destein-6353bb149/">https://www.linkedin.com/in/lara-destein-6353bb149/</a><br></br>
                    Github: <a href="https://github.com/lara-destein13">https://github.com/lara-destein13</a><br></br>
                    Facebook: <a href="https://www.facebook.com/lara.destein">https://www.facebook.com/lara.destein</a><br></br>
                </div>        
            </div>   
        );
    }        
}    

export default ContactMe;