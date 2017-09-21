import React, { Component } from 'react';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
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

  handleSubmit = (event) => {
    axios.post('https://script.google.com/macros/s/AKfycbworLNlQ8S56AetLC7RWDSwPlUNwP_Hv4pnity-hvnW_mym3c2e/exec', {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });

    event.preventDefault();
  }
// https://script.google.com/macros/s/AKfycbworLNlQ8S56AetLC7RWDSwPlUNwP_Hv4pnity-hvnW_mym3c2e/exec
  render() {
    return (
      <div className="row">
        <form
          onSubmit={this.handleSubmit}
          className="col s6"
          style={{paddingLeft: '40px'}}
        >
          <input id="honeypot" name="honeypot" style={{display: 'none'}} />
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
        <div id="thankyou_message" className="col s6" style={{display: "none", paddingLeft: '40px'}}>
          <h5>Thanks! I will contact you soon!</h5>
        </div>
        <div className="col s4">
          Send me a message here!
        </div>
      </div>
    );
  }
}
