import React, { Component } from 'react';
import $ from "jquery";
// import './App.css';
import style from './style.js';

import NavBar from './components/NavBar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default class App extends Component {
  componentDidMount() {
    $(document).ready(function(){
      $('.scrollspy').scrollSpy();
    });
  }

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
