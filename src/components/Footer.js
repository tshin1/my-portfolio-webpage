import React, { Component } from 'react';
import IoGithub from 'react-icons/lib/io/social-github';
import IoLinkedin from 'react-icons/lib/io/social-linkedin';

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">About this page</h5>
              <p className="grey-text text-lighten-4">Made with React and Materialize by Ted Shin.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Around the Web</h5>
              <a className="grey-text text-lighten-3" href="https://github.com/tshin7"><IoGithub size="34"/></a>
              <a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/tshin7/"><IoLinkedin size="34"/></a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container center-align">
          Copyright © 2017 Ted Shin
          </div>
        </div>
      </footer>
    );
  }
}
