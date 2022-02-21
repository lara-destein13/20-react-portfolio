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

    // render
    render() {
        const pages=this.props.pages
        const image=this.props.image


        

        return (
            <img className="photo" src={image} width="400px" height="400px" />
        );
    }
}

export default Project;