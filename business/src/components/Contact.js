import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import RaisedButton from 'material-ui/RaisedButton';
import { withStyles } from '@material-ui/core/styles';


const CustomRaisedButton = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(RaisedButton);




class ContactCard extends Component {

  render(){
    const { contact } = this.props;
    return (
      <TableRow>
        <TableCell>{contact.name}</TableCell>
        <TableCell>{contact.phone_number}</TableCell>
        <TableCell><CustomRaisedButton onClick={() => this.props.deleteContact(this.props.contact)}>Delete</CustomRaisedButton></TableCell>
      </TableRow>
    )
  }

}

export default ContactCard;
