import React, { Component } from 'react'
import { addContacts } from '../actions/contacts'
import { connect } from 'react-redux';


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
    console.log(event.target.name)
    this.setState({
      phoneNumber: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    this.props.addContacts(this.state)
    
  }


  render() {

    let showContact = this.state.name ? (<p>{this.state.name} : {this.state.phoneNumber}</p>) : ''
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

          <div>
            {showContact}
          </div>
          <div className="row col-25">
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    )
  }
}

/*const mapDispatchToProps = dispatch => {
  return {
    addContacts: () => {
      //let action =
      return dispatch(addContacts())
    },
  };
};*/


export default connect(null, {addContacts})(ContactForm)
