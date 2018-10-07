import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Moment from 'react-moment';
import 'moment-timezone';



class CallCard extends Component {
  render(){
    const { room } = this.props;

    return (

      <TableRow>
        <TableCell>{room.room_id}</TableCell>
        <TableCell>{room.name}</TableCell>
        <TableCell><Moment>{room.date_of_call}</Moment></TableCell>
        <TableCell>{room.status}</TableCell>
        <TableCell>{room.call_duration}seconds</TableCell>
      </TableRow>
    )
  }


}

export default CallCard;
