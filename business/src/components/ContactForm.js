import React, { Component } from 'react'

class ContactForm extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      phoneNumber: ''
    };
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  };

  handlePhoneChange(event) {
    this.setState({
      phoneNumber: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    const target = event.target
    const name = target.name
    this.props.addContact(this.state)
    this.setState({
      [name] : ''
    })
  }


  render() {
    return(
      <div className="container">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className="row">
            <div className="col-75">
              <input name="contactName" type="text" placeholder="Contact Name..." onChange={(event) => this.handleNameChange(event)} value={this.state.name} />
            </div>
          </div>

          <div className="row">
            <div className="col-75">
              <input name="phoneNumber" type="text" placeholder="Contact Phone number..."onChange={(event) => this.handlePhoneChange(event)} value={this.state.phoneNumber} />
            </div>
          </div>
          <div className="row col-25">
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    )
  }
}


export default ContactForm
