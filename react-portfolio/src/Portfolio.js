import autoBind from 'auto-bind';
import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
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
            <div className="Portfolio">  
                <div className="projects"> 
                    <a className="port-link" href="https://lara-destein13.github.io/password-generator/">
                        <h2 className="project-title">Password Generator</h2>
                        <p className="project-description">(Javascript)</p>
                    </a>
                </div>
                <div className="projects"> 
                    <a className="port-link" href="https://lara-destein13.github.io/4-code-quiz/">
                        <h2 className="project-title">Code Quiz</h2>
                        <p className="project-description">(Web APIs)</p>
                    </a>
                </div>
                <div className="projects"> 
                    <a className="port-link" href="https://lara-destein13.github.io/5-work-day-scheduler/">
                        <h2 className="project-title">Work Day Scheduler</h2>
                        <p className="project-description">(Third-Party APIs)</p>
                    </a>
                </div>
                <div className="projects"> 
                    <a className="port-link" href="https://lara-destein13.github.io/weather/">
                        <h2 className="project-title">Weather Dashboard</h2>
                        <p className="project-description">(Server-Side APIs)</p>
                    </a>
                </div>
                <div className="projects"> 
                    <a className="port-link" href="https://lara-destein13.github.io/my-backyard-trails/">
                        <h2 className="project-title">My Backyard Trails</h2>
                        <p className="project-description">(Interactive Front-End Project)</p>
                    </a>
                </div>
                <div className="projects"> 
                    <a className="port-link" href="https://lara-destein13.github.io/stick-ease/">
                        <h2 className="project-title">Stick Ease</h2>
                        <p className="project-description">(Interactive MERN SPA Project)</p>
                    </a>
                </div>
            </div>
        );
    }
}

export default Portfolio;