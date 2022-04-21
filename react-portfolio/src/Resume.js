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
            <div className="Resume">
            <h2 className="resume-header">Resume</h2>      
                <a href="../public/lara-destein-resume-2022.pdf" download>
                    Download Resume
                </a>    
                <ul>
                    <li className="shift">Front-end Proficiencies
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>JQuery</li>
                            <li>responsive design</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>                        
                    </li>    
                </ul>
                <ul>
                    <li className="shift">Back-end Proficiencies
                        <ul>
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, Sequelize</li>
                            <li>MongoDB, Mongoose</li>
                            <li>REST</li>
                            <li>GraphQL</li>
                        </ul>
                    </li>    
                </ul>       
            </div>
            );
        }        
    }    

export default Resume;