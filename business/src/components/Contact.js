import React from 'react';


const ContactCard = ({contact}) =>
  <div>
    <h2>{contact.name} : {contact.phone_number}</h2>
  </div>

export default ContactCard;
