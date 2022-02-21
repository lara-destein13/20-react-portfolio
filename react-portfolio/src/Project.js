import autoBind from 'auto-bind';
import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
    // constructor
    constructor(props) {
        super(props);
        autoBind(this);
        
        this.state = {
        }
    }
    mouseOver(event) {
        event.preventDefault();
        console.log("mouseOver");
    }

    // render
    render() {
        const pages=this.props.pages
        const image=this.props.image


        

        return (
            <div className="Project" onMouseOver={this.mouseOver}>
                <div>
                    <img className="photo" src={image} width="400px" height="400px" />
                </div>
            </div>
           
        );
    }
}

export default Project;

{/* <div className="pop-up"> */}