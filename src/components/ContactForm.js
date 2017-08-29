import React, { Component } from 'react';

export default class ContactForm extends Component {
  render() {
    return (
      <div className="row">
        <form className="col s6">
          <div className="row">
            <div className="input-field col s12">
              <input id="name" type="text" className="validate" />
              <label for="name">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label for="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="phone" type="text" className="validate" />
              <label for="phone">Phone Number</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="message" type="text" className="validate" />
              <label for="message">Message</label>
            </div>
          </div>
        </form>
        <div className="col s6">
          Send me a message here!
        </div>
      </div>
    );
  }
}
