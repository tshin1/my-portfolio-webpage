import React, { Component } from 'react';
import style from '../style.js';
import 'materialize-css';

import ContactForm from './ContactForm';

export default class Contact extends Component {
  render() {
    return (
      <div className="row section scrollspy" id="contact">
        <div className="col s12">
          <h1 className="center-align" style={style.sectionHeaderText}>Contact Me</h1>
          <ContactForm />
        </div>
      </div>
    );
  }
}
