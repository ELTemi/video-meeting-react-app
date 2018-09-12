import React, { Component } from 'react';
import ContactCard from './Contact';

export default class Contacts extends Component {

  render() {

    const allContacts = this.props.contacts.map((contact, index) =>
      <ContactCard key={index} contact={contact}/>
    );


    return (
      <div>{allContacts}</div>
     );
   }
}
