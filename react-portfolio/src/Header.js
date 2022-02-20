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
                <div className="Name">Lara DeStein</div>
                    <nav className="Nav">
                        <a onClick={this.aboutMeClicked} className="Link">&nbsp;AboutMe&nbsp;</a>
                        <a onClick={this.contactMeClicked} className="Link">&nbsp;ContactMe&nbsp;</a>
                        <a onClick={this.portfolioClicked} className="Link">&nbsp;Portfolio&nbsp;</a>
                        <a onClick={this.resumeClicked} className="Link">&nbsp;Resume&nbsp;</a>
                    </nav>    
            </div>    
        );
    }
}

export default Header;