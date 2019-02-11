import React, { Component } from 'react';
import Header from './container/Header';
import SideMenu from './container/SideMenu';
import Artist from './component/Artist';
import AlbumGrid from './container/AlbumGrid';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SideMenu />
        <main>
          <Artist />
          <AlbumGrid />
        </main>
      </div>
    );
  }
}

export default App;
