import React, { Component } from 'react';
// import './App.css';
import style from './style.js';

import NavBar from './components/NavBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container" style={style.whiteBackground}>
          <div className="row">
            <div className="col s8">
              <h1>Ted Shin</h1>
              <p>Full stack developer and CS student. Experience with React, React Native, ES6, Express, MongoDB, Sass, Webpack, Git, Django, Javascript, Python</p>
            </div>
            <div className="col s4">
              <img
                src="https://drive.google.com/open?id=0B1j4xFUQtHYFdmNMSk03Nkd5Qlk"
                alt="Ted's Profile"
                height="250"
                width="250"
                style={style.circleImg}
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <h1 className="center-align">Portfolio</h1>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <h1 className="center-align">Contact Me</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
