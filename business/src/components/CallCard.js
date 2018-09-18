import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import RaisedButton from 'material-ui/RaisedButton';
import { withStyles } from '@material-ui/core/styles';
import Moment from 'react-moment';
import 'moment-timezone';



const CustomRaisedButton = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(RaisedButton);


class CallCard extends Component {
  render(){
    const { room } = this.props;

    return (

      <TableRow>
        <TableCell>{room.room_id}</TableCell>
        <TableCell><Moment>{room.date_of_call}</Moment></TableCell>
        <TableCell>{room.status}</TableCell>
        <TableCell>{room.call_duration}seconds</TableCell>
      </TableRow>
    )
  }


}

export default CallCard;
