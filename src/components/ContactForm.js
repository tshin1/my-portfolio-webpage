import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      honeypot: '',
      formSubmitted: false,
    };
  }

  validEmail = (email) => {
    let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }

  detectBot = (honeypot) => {
    if (honeypot) { // if hidden form filled up
      console.log("Robot Detected!");
      return true;
    } else {
      console.log("Welcome Human!");
      return false;
    }
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  handlePhoneChange = (event) => {
    this.setState({phone: event.target.value});
  }

  handleMessageChange = (event) => {
    this.setState({message: event.target.value});
  }

  handleHoneypotChange = (event) => {
    this.setState({honeypot: event.target.value})
  }

  handleSubmit = (event) => {
    // Dont submit form if bot is detected
    if (this.detectBot(this.state.honeypot)) {
      return false;
    }
    // Google spreadsheet script
    let url = 'https://script.google.com/macros/s/AKfycbworLNlQ8S56AetLC7RWDSwPlUNwP_Hv4pnity-hvnW_mym3c2e/exec';
    // I had to do it this format to get it workign with axios. jquery did not require this format.
    // jquery worked even when I just sent in the data as a plain object.
    let data = 'name=' + this.state.name + '&email=' + this.state.email + '&phone=' + this.state.phone + '&message=' + this.state.message ;
    // Save 'this'
    let self = this;
    // Send form data via axios post
    axios.post(url, data)
    .then(function(response) {
      console.log(response);
      self.setState({formSubmitted: true});
    })
    .catch(function(error) {
      console.log(error);
    });

    // Prevent form default so this function can take over
    event.preventDefault();
  }

  render() {
    return (
      <div className="row" style={{}}>
        {
          this.state.formSubmitted
          ?
            <div className="col s12" style={{paddingLeft: '40px', paddingRight: '40px'}}>
              <h5>Thanks! I will contact you soon!</h5>
            </div>
          :
          <form
            onSubmit={this.handleSubmit}
            style={{maxWidth: '700px', paddingLeft: '40px', paddingRight: '40px', margin: '0 auto'}}
          >
            <input id="honeypot" name="honeypot" onChange={this.handleHoneypotChange} style={{display: 'none'}} />
            <div className="row">
              <div className="input-field col s12">
                <input id="name" value={this.state.name} onChange={this.handleNameChange} name="name" type="text" className="validate" />
                <label htmlFor="name">Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" value={this.state.email} onChange={this.handleEmailChange} name="email" type="text" className="validate" />
                <label htmlFor="email" data-error="wrong">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="phone" value={this.state.phone} onChange={this.handlePhoneChange} name="phone" type="text" className="validate" />
                <label htmlFor="phone">Phone Number</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea id="message" value={this.state.message} onChange={this.handleMessageChange} name="message" className="materialize-textarea validate"></textarea>
                <label htmlFor="message">Message</label>
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
        }
      </div>
    );
  }
}
