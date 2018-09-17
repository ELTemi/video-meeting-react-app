import React, { Component } from 'react';
import { connect } from 'react-redux';


class Business extends Component {

  render() {
    return (
      <div>
        <h2><button>All Contacts - {this.props.contacts.length}</button></h2>
        <h2><button>All Meetings - {this.props.rooms.length}</button></h2>
      </div>
    );
  }
};

const mapStateToProps = ({contacts: { contacts }, rooms: {rooms}}) => {
  return ({contacts, rooms})
}

export default connect(mapStateToProps)(Business);
