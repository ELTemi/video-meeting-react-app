import React, { Component } from 'react';

export default class CallLogs extends Component {

  render() {

    const allVideoLogs = this.props.rooms.map((room, index) => {
      return <li key={index}>{room.room_id}: {room.date_of_call}: {room.status}: {room.call_duration}mins </li>
    });

    return (
      <div>{allVideoLogs}</div>
     );
   }
}

  /*axios.get('//localhost:3001/rooms').then(results => {
    const { rooms } = results.data;
    this.setState({ rooms });
  });*/
