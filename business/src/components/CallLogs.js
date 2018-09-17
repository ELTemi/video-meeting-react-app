import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default class CallLogs extends Component {

  render() {
    console.log(this.props.rooms)
    const allVideoLogs = this.props.rooms.map((room, index) => {
      return (
        <TableRow key={index}>
          <TableCell>{room.room_id}</TableCell>
          <TableCell>{room.date_of_call}</TableCell>
          <TableCell>{room.status}</TableCell>
          <TableCell>{room.call_duration}seconds</TableCell>
        </TableRow>
      )
    });

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Meeting Id</TableCell>
            <TableCell>Date of Call</TableCell>
            <TableCell>Meeting Status</TableCell>
            <TableCell>Call Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {allVideoLogs}
        </TableBody>
      </Table>
     );
   }
}

  /*axios.get('//localhost:3001/rooms').then(results => {
    const { rooms } = results.data;
    this.setState({ rooms });
  });*/
