import autoBind from 'auto-bind';
import React, { Component } from 'react';
import './AboutMe.css';
import lara from './lara-pic.png';


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
                <h2 className="about-me-header">About Me </h2> 
                    <div className="Photo">
                        <img className="profile" src={lara} width="400px" height="500px" />
                    </div>
                    <div className="Paragraph">
                        My name is Lara DeStein and I am a recent graduate of Vanderbilt University's Coding Bootcamp, 
                        a deeply engaging course that gives students the knowledge and skills to build dynamic end-to-end 
                        web applications and become a full stack web developer in 24 weeks. I hope to find a position where 
                        I'll be working with top-tier Web Developers using the industry's best tools and practices. 
                        I enjoy working with passionate developers to build cool things. I'm always ready to learn new 
                        skills and go the extra mile to do that. This is a career change for me. Until recently I've worked 
                        for a not-for-profit agency helping people with disabilities to live independently in their own homes. 
                        I earned a reputation for being a person with both empathy and drive. I was promoted three times 
                        in four years. Thank you for considering me for your team.
                    </div>             
            </div>
        )
    }
}

export default AboutMe;