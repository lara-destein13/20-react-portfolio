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
                <ul>
                    <li>Click here to download my resume</li>
                </ul>
                <ul>
                    <li>Front-end Proficiencies
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
                    <li>Back-end Proficiencies
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