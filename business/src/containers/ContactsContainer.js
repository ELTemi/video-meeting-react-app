import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Contacts from '../components/Contacts';
import { fetchContacts, deleteContact } from '../actions/contacts'
import { connect } from 'react-redux';



class ContactsContainer extends Component {
  componentDidMount() {
    this.props.fetchContacts()
  }

  render() {
    return(
      <div>
        <ContactForm />
        <Contacts contacts={this.props.contacts} deleteContact={this.props.deleteContact}/>
      </div>
    )
  }
}

const mapStateToProps = ({contacts: { contacts }}) => {
  return {contacts}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchContacts: () => {
      return dispatch(fetchContacts())
    },

    deleteContact: (contact) => dispatch(deleteContact(contact))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);
