import React, { Component } from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactInfo from './components/ContactInfo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AboutMe />
        <Projects />
        <ContactInfo />
      </div>

    );
  }
}

export default App;
