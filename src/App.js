import React, { Component } from 'react';
import uuid from 'uuid';
import Sidebars from './Components/Sidebars';
import Home from './Components/Home';
import UserInfo from './Components/UserInfo';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <div>
                <a href="/">Home</a>
            </div>
        </header>

        <content className="App-content">
        <Sidebars/>
            <Router>
                <switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/:id' exact component={UserInfo} />
                </switch>
            </Router>
        </content>
        <footer className="App-footer">

        </footer>

      </div>
    );
  }
}

export default App;
