import React, { Component } from 'react';

export default class Contacts extends Component {

  render() {

    const allContacts = this.props.contacts.map((contact, index) => {
      return <li key={index}>{contact.name}: {contact.phone_number}</li>
    });

    return (
      <div>{allContacts}</div>
     );
   }
}
