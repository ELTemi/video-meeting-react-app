import React, { Component } from 'react';
import CallCard from './CallCard';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


export default class CallLogs extends Component {

  render() {
    const allVideoLogs = this.props.rooms.map((room, index) => <CallCard key={index} room={room}/>);

    return (
      <Table>
        <TableHead>
          <TableRow>
            <CustomTableCell>Meeting Id</CustomTableCell>
            <CustomTableCell>Meeting Name</CustomTableCell>
            <CustomTableCell>Date of Call</CustomTableCell>
            <CustomTableCell>Meeting Status</CustomTableCell>
            <CustomTableCell>Call Duration</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {allVideoLogs}
        </TableBody>
      </Table>
     );
   }
}
