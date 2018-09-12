import React from 'react';


const ContactCard = ({contact}) =>
  <div>
    Name: {contact.name}
    Phone Number: {contact.phone_number}
  </div>

export default ContactCard;
