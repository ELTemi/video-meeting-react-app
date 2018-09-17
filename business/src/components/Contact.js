import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const ContactCard = ({contact}) =>
    <TableRow>
      <TableCell>{contact.name}</TableCell>
      <TableCell>{contact.phone_number}</TableCell>
    </TableRow>

export default ContactCard;
