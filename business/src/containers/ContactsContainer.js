import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Contacts from '../components/Contacts';
import { fetchContacts } from '../actions/contacts'
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

  componentDidMount() {
    this.props.fetchContacts()
  }
}

const mapStateToProps = ({contacts: { contacts }}) => {
  return ({contacts})
}

const mapDispatchToProps = dispatch => {
  return {
    fetchContacts: () => {
      return dispatch(fetchContacts())
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);
