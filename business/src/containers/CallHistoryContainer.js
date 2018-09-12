import React, { Component } from 'react';
import CallLogs from '../components/CallLogs';
import { fetchRooms } from '../actions/fetchRooms';
import { connect } from 'react-redux';

class CallHistoryContainer extends Component {
  render() {
    return(
      <div>
        <CallLogs rooms={this.props.rooms} />
      </div>
    )
  }

  componentDidMount() {
    this.props.fetchRooms()
  }
}

const mapStateToProps = ({rooms: { rooms }}) => {
  return ({rooms})
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRooms: () => {
      //let action =
      return dispatch(fetchRooms())
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CallHistoryContainer);
