import React, { Component } from 'react';

export default class ContactForm extends Component {

  render() {
    return (
      <div className="row">
        <form
          id="gform"
          method="post"
          action="https://script.google.com/macros/s/AKfycbworLNlQ8S56AetLC7RWDSwPlUNwP_Hv4pnity-hvnW_mym3c2e/exec"
          className="col s6"
          style={{paddingLeft: '40px'}}
        >
          <div className="row">
            <div className="input-field col s12">
              <input id="name" name="name" type="text" className="validate" />
              <label for="name">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" name="email" type="text" className="validate" />
              <label for="email" data-error="wrong">Email</label>
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
              <textarea id="message" name="message" className="materialize-textarea validate"></textarea>
              <label for="message">Message</label>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <button className="btn waves-effect waves-light" type="submit" name="action">Send
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
        <div className="col s4">
          Send me a message here!
        </div>
      </div>
    );
  }
}
