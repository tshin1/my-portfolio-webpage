import React, { Component } from 'react';
// import './App.css';
import style from './style.js';

import NavBar from './components/NavBar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container" style={style.whiteBackground}>
          <About />
          <Portfolio />
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}
