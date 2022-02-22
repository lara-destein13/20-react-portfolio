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
            <div className="Footer">
                <div>
                    <a href="https://github.com/lara-destein13">github</a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/lara-destein-6353bb149/">linkedin</a>
                </div>
                <div>
                    <a href="https://www.facebook.com/lara.destein">facebook</a>
                </div>   
            </div>
        );
    }
}

export default Footer;