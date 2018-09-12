import React, { Component } from 'react';

class Business extends Component {


  render() {
    return (
      <div>
        <h2>Active Meetings</h2>
        <h2>Contacts</h2>
        <h2>Completed Meetings</h2>
      </div>
    );
  }
};

export default Business;

/*axios.get('//localhost:3001/rooms').then(results => {
console.log(results)
});*/
