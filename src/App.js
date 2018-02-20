import React, { Component } from 'react';
import uuid from 'uuid';                    /* call uuid from node_modules */
import Sidebars from './Components/Sidebars';  /* calling Sidebar Component */
import Home from './Components/Home';           /* calling Home Component */
import UserInfo from './Components/UserInfo';   /* calling UserInfo Component */
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './App.css';                            /* calling Css file */

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
