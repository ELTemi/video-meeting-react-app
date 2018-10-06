import React, { Component } from 'react';
import Video from 'twilio-video';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Card, CardText } from 'material-ui/Card';

export default class VideoCallContainer extends Component {



 constructor(props) {
   super();
   this.state = {
      identity: 'sample_user',  /* Will hold the fake name assigned to the client. The name is generated by faker on the server */
      roomName: '',    /* Will store the room name */
      roomNameErr: false,  /* Track error for room name TextField. This will    enable us to show an error message when this variable is true */
      previewTracks: null,
      localMediaAvailable: false, /* Represents the availability of a LocalAudioTrack(microphone) and a LocalVideoTrack(camera) */
      hasJoinedRoom: false,
      activeRoom: null, // Track the current active room
      token: null
    };

   this.joinRoom = this.joinRoom.bind(this);
   this.handleRoomNameChange = this.handleRoomNameChange.bind(this);
   this.roomJoined = this.roomJoined.bind(this);
   this.leaveRoom = this.leaveRoom.bind(this)
 }



 componentDidMount() {

  fetch('//localhost:3001/tokens')
    .then(response => response.json())
    .then(results => {
      console.log(results)
        const { identity, token } = results;
        this.setState({ identity, token });
      });
  }

  handleRoomNameChange(e) {
   /* Fetch room name from text field and update state */
    let roomName = e.target.value;
    this.setState({ roomName });
  }

  joinRoom = () => {
    /*
  Show an error message on room name text field if user tries joining a room without providing a room name. This is enabled by setting `roomNameErr` to true
   */
    if (!this.state.roomName.trim()) {
      this.setState({ roomNameErr: true });
      return;
    }

    console.log("Joining room '" + this.state.roomName + "'...");
    console.log(this.state)
    let connectOptions = {
    name: this.state.roomName
    };

    if (this.state.previewTracks) {
      connectOptions.tracks = this.state.previewTracks;
    }

         /*
  Connect to a room by providing the token and connection    options that include the room name and tracks. We also show an alert if an error occurs while connecting to the room.
  */
    Video.connect(this.state.token, connectOptions)
      .then(this.roomJoined, error => {
        alert('Could not connect to Twilio: ' + error.message);
    });


  }

  attachTracks = (tracks, container) => {
    tracks.forEach(track => {
      container.appendChild(track.attach());
    });
  }

  attachParticipantTracks = (participant, container) => {
    var tracks = Array.from(participant.tracks.values());
    this.attachTracks(tracks, container);
  }

  roomJoined = (room) => {
    console.log("Joined as '" + this.state.identity + "'");
    this.setState({
      activeRoom: room,
      localMediaAvailable: true,
      hasJoinedRoom: true  // Removes ‘Join Room’ button and shows ‘Leave Room’
    });

    var previewContainer = this.refs.localMedia;
    if (!previewContainer.querySelector('video')) {
      this.attachParticipantTracks(room.localParticipant, previewContainer);
    }
  }

  leaveRoom = () => {
    this.state.activeRoom.disconnect();
    this.setState({ hasJoinedRoom: false, localMediaAvailable: false });
    alert("Call ended")
  }

render() {
   let showLocalTrack = this.state.localMediaAvailable ? (
     <div className="flex-item"><div ref="localMedia" /> </div>) : '';

   let joinOrLeaveRoomButton = this.state.hasJoinedRoom ? (
   <RaisedButton label="Leave Meeting" secondary={true} onClick={this.leaveRoom}  />) : (
   <RaisedButton label="Join Meeting" primary={true} onClick={this.joinRoom} />);

   return (
     <Card>
      <CardText>
        <div className="flex-container">
          {showLocalTrack}
         <TextField hintText="Meeting Name" onChange={this.handleRoomNameChange}
            errorText = {this.state.roomNameErr ? 'Meeting Name is required' : undefined}
          /><br />
          {joinOrLeaveRoomButton}  {/* Show either ‘Leave Room’ or ‘Join Room’ button */}
          </div>
        <div className="flex-item" ref="remoteMedia" id="remote-media" />
      </CardText>
     </Card>
   );
 }

}
