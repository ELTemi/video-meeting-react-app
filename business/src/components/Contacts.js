import React, { Component } from 'react';
import ContactCard from './Contact';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default class Contacts extends Component {

  render() {

    const allContacts = this.props.contacts.map((contact, index) =>
      <ContactCard key={index} contact={contact}/>
    );


    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Phone Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {allContacts}
          </TableBody>
        </Table>

      </div>
     );
   }
}
