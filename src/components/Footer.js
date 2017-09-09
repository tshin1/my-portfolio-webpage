import React, { Component } from 'react';

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
              <h5 className="white-text">Links</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="https://github.com/tshin7">Github</a></li>
                <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/tshin7/">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2014 Copyright Text
          
          </div>
        </div>
      </footer>
    );
  }
}
