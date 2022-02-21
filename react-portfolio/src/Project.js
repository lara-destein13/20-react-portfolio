import autoBind from 'auto-bind';
import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
    // constructor
    constructor(props) {
        super(props);
        autoBind(this);
        
        this.state = {
            popUpDisplay: "none",
        }
    }
    mouseOver(event) {
        event.preventDefault();
        console.log("mouseOver");
        this.setState({ popUpDisplay: "inline-block" });
    }
    mouseOut(event) {
        event.preventDefault();
        console.log("mouseOut");
        this.setState({ popUpDisplay: "none" });
    }

    // render
    render() {
        const image=this.props.image
        const popUpDisplay=this.state.popUpDisplay
        console.log(`popUpDisply: ${popUpDisplay}`);
        const style={display:popUpDisplay}

        return (
            <div className="Project" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                <div>
                    <img className="photo" src={image} width="400px" height="400px" />
                </div>
                <div className="pop-up" style={style}>content</div>
            </div>           
        );
    }
}

export default Project;
