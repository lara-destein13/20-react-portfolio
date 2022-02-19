import logo from './logo.svg';
import autoBind from 'auto-bind';
import React, { Component } from 'react';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Footer from './Footer';
import Header from './Header';
import Portfolio from './Portfolio';
import Resume from './Resume';
import './App.css';

class App extends Component {
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
    return( <AboutMe/> );
  }

  // renderContactMe
  renderContactMe() {
    if (this.state.middle !== 'CONTACT_ME') {
      return null;
    }
    return( <ContactMe/> );
  }

  // renderFooter
  renderFooter() {
    return( <Footer/> );
  }

  // renderHeader
  renderHeader() {
    return( <Header/> );
  }

  // renderPortfolio
  renderPortfolio() {
    if (this.state.middle !== 'PORTFOLIO') {
      return null;
    }
    return( <Portfolio/> );
  }

  // renderResume
  renderResume() {
    if (this.state.middle !== 'RESUME') {
      return null;
    }
    return( <Resume/> );
  }

  // render
  render() {
    return (
      <div className="App">
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
