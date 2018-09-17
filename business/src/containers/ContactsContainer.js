import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Contacts from '../components/Contacts';
import { fetchContacts } from '../actions/contacts'
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

    deleteContact: (contact) => dispatch({type: 'DELETE_CONTACT', payload: contact })
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);
