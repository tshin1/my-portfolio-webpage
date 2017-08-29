import React, { Component } from 'react';

import ContactForm from './ContactForm';

export default class Contact extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <h1 className="center-align">Contact Me</h1>
          <ContactForm />
        </div>
      </div>
    );
  }
}
