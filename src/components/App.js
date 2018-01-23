import React, { Component } from 'react';
import './App.css';

// Importing additional components
import Header from './navigation/header';
import Menu from './navigation/menu';
import Notification from './common/notification';

class App extends Component {
  render() {
    return (
      <div>
        <Notification />
        <Header />
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
