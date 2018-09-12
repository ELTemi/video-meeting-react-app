import React, { Component } from 'react';
import CallLogs from '../components/CallLogs';

class CallHistoryContainer extends Component {
  render() {
    return(
      <div>
        <CallLogs rooms={this.props.rooms} />
      </div>
    )
  }
}


export default CallHistoryContainer;
