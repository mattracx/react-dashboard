import React, { Component } from 'react';
import './Sidebar.css';
import Navigation from './Navigation/Navigation';

class Sidebar extends Component {
  render() {
    return <header className="Sidebar">
        <Navigation />
     </header>
  }
}

export default Sidebar;
