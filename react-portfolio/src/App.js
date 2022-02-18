import logo from './logo.svg';
import autoBind from 'auto-bind';
import React, { Component } from 'react';
// import AboutMe from './AboutMe';
// import ContactMe from './ContactMe';
// import Footer from './Footer';
// import Header from './Header';
// import Portfolio from './Portfolio';
// import Resume from './Resume';
import './App.css';

class App extends Componenet {
  // constructor
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      middle: 'ABOUT_ME'
    }
  }

  // renderAboutMe
  renderAboutMe() {
    if (this.state.middle !== 'ABOUT_ME') {
      return null;
    }
    return( <div>contactMe</div> );
  }

  // renderFooter
  renderFooter() {
    return( <div>footer</div> );
  }

  // renderPortfolio
  renderPortfolio() {
    if (this.state.middle !== 'PORTFOLIO') {
      return null;
    }
    return( <div>aportfolio</div> );
  }

  // renderResume
  renderResume() {
    if (this.state.middle !== 'RESUME') {
      return null;
    }
    return( <div>resume</div> );
  }

  // render
  render() {
    return (
      <div>
        { this.renderHeader() }
        { this.renderAboutMe() }
        { this.renderContactMe() }
        { this.renderPortfolio() }
        { this.renderResume() }
        { this.renderFooter() }
      </div>
    );
  }

}

export default App;
