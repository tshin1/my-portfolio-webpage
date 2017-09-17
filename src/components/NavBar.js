import React, { Component } from 'react';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutActive: 'active',
      porfolioActive: '',
      contactActive: '',
    };
  }

  aboutClicked = () => {
    this.setState({
      aboutActive: 'active',
      portfolioActive: '',
      contactActive: '',
    });
  }

  portfolioClicked = () => {
    this.setState({
      aboutActive: '',
      portfolioActive: 'active',
      contactActive: '',
    });
  }

  contactClicked = () => {
    this.setState({
      aboutActive: '',
      portfolioActive: '',
      contactActive: 'active',
    });
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper container">
            <a href="#" className="brand-logo">Ted Shin</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li className={this.state.aboutActive}>
                <a href="#about" onClick={this.aboutClicked}>About</a>
              </li>
              <li className={this.state.portfolioActive}>
                <a href="#portfolio" onClick={this.portfolioClicked}>Portfolio</a>
              </li>
              <li className={this.state.contactActive}>
                <a href="#contact" onClick={this.contactClicked}>Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
