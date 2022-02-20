import autoBind from 'auto-bind';
import React, { Component } from 'react';
import './AboutMe.css';
import logo from './lara-pic.png';


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
            <div className="AboutMe">
                <div className="Photo">
                    <img className="lara-photo" src={logo} />
                </div>
                <div className="Paragraph">
                    My name is Lara DeStein and I am a student at Vanderbilt Universty's Coding Bootcamp, seeking a career in full-stack web development.
                    I graduated from the Universtiy of California Davis with a BA in Psychology in 2017. I began working for East Bay Innovations, a
                    non-profit organization whose mission is to empower individuals with disabilities to live in their own homes, work in jobs of their 
                    choosing, and be a part of their community.
                    After working at EBI as a Direct Support Professional, Executive Administrative Assistant, 
                    and Billing Manager, I reflected upon what skills I could develop to continue growing professionally. As a billing manager, I realized some 
                    needs that could be met if we incorporated new databases. We could serve more clients and simplify processes. I hope to use the skills I 
                    acquire through Vanderbilt University's Coding Bootcamp to build websites, databases, and applications for agencies whose mission is 
                    helping others.    
                </div>            
            </div>
        )
    }
}

export default AboutMe;