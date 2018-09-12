import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Business from './components/Business';
import ContactsContainer from './containers/ContactsContainer';
import CallHistoryContainer from './containers/CallHistoryContainer';
import VideoCallContainer from './containers/CallContainer';



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
              <Route exact path="/all_logs" component={CallHistoryContainer} />
              <Route exact path="/contacts" component={ContactsContainer} />
              <Route exact path="/call" component={VideoCallContainer} />
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
