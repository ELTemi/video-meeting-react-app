import React, { Component } from 'react';
import ContactCard from './Contact';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


class Contacts extends Component {



  render() {
    const allContacts = this.props.contacts.map((contact, index) =>
      <ContactCard deleteContact={this.props.deleteContact} key={index} contact={contact}/>
    );

    const { classes } = this.props;
    
    return (
      <div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Name</CustomTableCell>
              <CustomTableCell>Phone Number</CustomTableCell>
              <CustomTableCell>Actions</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {allContacts}
          </TableBody>
        </Table>
        </Paper>
      </div>
     );
   }
}

Contacts.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Contacts);
