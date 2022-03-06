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
                       a deeply engaging, online Full Stack Flex course that gives students the knowldege and skills
                       to build dynamic end-to-end web applications and become a full stack web developer in 24 weeks.
                       I have a passion for learning, problem solving, and personal growth. At my last position, I worked
                       in billing and was able to create spreadsheets and invent systems to improve tracking and
                       organization. I got to work alongside our IT staff and saw the role tech played in tracking
                       information and solving problems in ways my spreadsheets were limited. I thought about how much
                       more I could contribute if I could broaden my skillset by learning full-stack web development. I
                       look forward to working as a full stack web developer. 
                    </div>             
            </div>
        )
    }
}

export default AboutMe;