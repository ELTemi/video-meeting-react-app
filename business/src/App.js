import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import CallLogs from './components/CallLogs';
import VideoCall from './components/VideoCall';
import Business from './components/Business';
import ContactsContainer from './containers/ContactsContainer';


class App extends Component {
  render(props) {
    return (
        <div className="App">
          <header className="App-header">
            <h1>Consult Pearson EnterPrises</h1>
          </header>

          <Router>
            <div className="app">
              <NavBar />
              <Route exact path="/" component={Business} />
              <Route exact path="/all_logs" component={CallLogs} />
              <Route exact path="/contacts" component={ContactsContainer} />
              <Route exact path="/call" component={VideoCall} />
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
