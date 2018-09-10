import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CallLogs from './components/CallLogs';
import Contacts from './components/Contacts';
import VideoCall from './components/VideoCall';
import Business from './components/Business';


class App extends Component {
  render(props) {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Router>
            <div className="app">
              <NavBar />
              <Route exact path="/" component={Business} />
              <Route exact path="/all_logs" component={CallLogs} />
              <Route exact path="/contacts" component={Contacts} />
              <Route exact path="/call" component={VideoCall} />
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
