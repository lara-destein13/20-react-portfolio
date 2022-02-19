import autoBind from 'auto-bind';
import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    // constructor
    constructor(props) {
        super(props);
        autoBind(this);
        
        this.state = {
        }
    }

    // aboutMeClicked
    aboutMeClicked() {
        console.log('aboutMeClicked');
        this.props.app.showAboutMe();
    }

    // contactMeClicked
    contactMeClicked() {
        console.log('contactMeClicked');
        this.props.app.showContactMe();
    }

    // portfolioClicked
    portfolioClicked() {
        console.log('portfolioClicked');
        this.props.app.showPortfolio();
    }

    // resumeClicked
    resumeClicked() {
        console.log('resumeClicked');
        this.props.app.showResume();
    }


    // render
    render() {
        return (
            <div className="Header">
                <a onClick={this.aboutMeClicked}>&nbsp;AboutMe&nbsp;</a>
                <a onClick={this.contactMeClicked}>&nbsp;ContactMe&nbsp;</a>
                <a onClick={this.portfolioClicked}>&nbsp;Portfolio&nbsp;</a>
                <a onClick={this.resumeClicked}>&nbsp;Resume&nbsp;</a>
            </div>    
        );
    }
}

export default Header;