import React, { Component } from 'react';
import ContactForm from '../components/ContactForm';
import Contacts from '../components/Contacts';
import { connect } from 'react-redux';

class ContactsContainer extends Component {
  render() {
    return(
      <div>
        <ContactForm addContact={this.props.addContact}/>
        <Contacts contacts={this.props.contacts} />
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addContact: (contact) => {
      dispatch({type: "ADD_CONTACT", contact})
    }
  };
};

export default connect(({ contacts }) => ({ contacts }), mapDispatchToProps)(ContactsContainer)
